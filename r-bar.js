import React,{Component,Fragment} from 'react';
import RDropdownButton from 'r-dropdown-button';
import './index.css';

export default class RBar extends Component{
  getStyle(h){
    var buttonStyle = this.getValue(this.props.buttonStyle,h);
    var customStyle = this.getValue(h.style,h);
    var show = this.getValue(h.show,h);
    var obj = {...buttonStyle,...customStyle};
    if(show === false){obj.display = 'none';}
    return obj;
  }
  getButton(h,i){
    var item = this.getValue(h);
    var {onClick} = this.props;
    return (
      <RDropdownButton {...h} 
        iconStyle={this.iconStyle}
        className={this.getValue(h.className)} key={i} 
        style={this.getStyle(h)}
        onClick={()=>onClick(h,i)}
      />
    )
  }
  getValue(value,p){return typeof value === 'function'?value(p===undefined?this.props:p):value}
  render(){
    var {id,vertical} = this.props;
    var show = this.getValue(this.props.show);
    var style = this.getValue(this.props.style);
    var className = this.getValue(this.props.className);
    var items = this.getValue(this.props.items);
    if(show === false){return ''}
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