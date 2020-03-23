import React,{Component,Fragment} from 'react';
import RDropdownButton from 'r-dropdown-button';
import './index.css';

export default class RBar extends Component{
  constructor(props){
    super(props); 
    var {vertical} = this.props;
  }
  getStyle(h,active){
    var buttonStyle = typeof this.props.buttonStyle === 'function'?this.props.buttonStyle(h):this.props.buttonStyle;
    var customStyle = typeof h.style === 'function'?h.style(h):h.style;
    var show = h.show?h.show():undefined;
    var obj = {...buttonStyle,...customStyle};
    if(show === false){obj.display = 'none';}
    return obj;
  }
  getButton(h,i){
    var active = h.value === this.activeValue;
    var {onClick} = this.props;
    return (
      <RDropdownButton {...h} 
        iconStyle={this.iconStyle}
        className={active?'active':''} key={i} 
        style={this.getStyle(h,active)}
        onClick={()=>onClick(h,i)} disabled={active?'disabled':''}
      />
      
    )
  }
  render(){
    var {items,active,className,id,vertical} = this.props;
    var show = typeof this.props.show === 'function'?this.props.show():this.props.show;
    var style = typeof this.props.style === 'function'?this.props.style():this.props.style;
    if(show === false){return ''}
    this.activeValue = typeof active === 'function'?active():active;
    return (
      <div className={`r-bar${vertical?' r-bar-vertical':' r-bar-horizontal'}${className?' ' + className:''}`} id={id} style={style}>
        {items.length > 0 &&
          <Fragment>
            <div className='r-bar-start r-bar-sides'>
              {items.filter((h)=>h.side !== 'end').map((h,i)=>this.getButton(h,i))}
            </div>
            <div className='r-bar-end r-bar-sides'>
              {items.filter((h)=>h.side === 'end').map((h,i)=>this.getButton(h,i))}
            </div>
          </Fragment>
        }
      </div>
    )
  }
}
RBar.defaultProps = {items:[],show:true}