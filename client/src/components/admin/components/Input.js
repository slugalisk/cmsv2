import React from 'react';
import classNames from 'classnames';

export default class Inputv2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shadow:"2px solid #666",
      hovered:false,
    }
    this.hovered=this.hovered.bind(this);
    this.nothovered=this.nothovered.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  hovered(){
    this.setState({
      hovered: true,
    })
  }
  nothovered(){
    this.setState({
      hovered: false,
    })
  }

handlechange(){
  this.props.getvalue(this.refs.input.value);
}


  render(){


    const adminFormField = classNames(
      'admin_form_field',
      {
        'admin_form_field--focused':this.state.hovered,
      }
    );


    return(
      <div>
      <input 
        type={this.props.type} 
        name={this.props.name} 
        className={adminFormField}
        onFocus={this.hovered} 
        onBlur={this.nothovered}
        placeholder={this.props.placeholder}
        //onChange={this.handlechange}
        ref="input"
      />
      </div>
    )
  }
}