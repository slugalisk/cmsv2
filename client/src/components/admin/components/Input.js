import React from 'react';
import classNames from 'classnames';

export default class Inputv2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
    this.handlechange = this.handlechange.bind(this);
  }

handlechange(){
  this.props.getvalue(this.refs.input.value);
}
  render(){

    return(
      <div>
      <input 
        type={this.props.type} 
        name={this.props.name} 
        className='admin_form_field'
        placeholder={this.props.placeholder}
        //onChange={this.handlechange}
        ref="input"
      />
      </div>
    )
  }
}