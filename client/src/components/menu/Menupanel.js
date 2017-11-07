import React from 'react';
import {Link} from 'react-router-dom';


export default class Menupanel extends React.Component{
  render(){
    const menuPanel={
      right:this.props.offset,
    }
   
    const menuLink={

    }
    return(
      <div 
        style = {menuPanel} 
        className = 'menuPanel'
      >
        <Link 
          to='/' 
          style = {menuLink} 
          className = 'menuLink' 
          onClick = {this.props.toggler}
        >
          Home
        </Link>
        <br/>
        <Link
          to = '/admin'
          style = {menuLink} 
          className = 'menuLink' 
          onClick = {this.props.toggler}
        >
          Admin
        </Link>
      </div>
    )
  }
}