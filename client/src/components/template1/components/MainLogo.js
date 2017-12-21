import React from 'react';
import logo from '../../../images/logo.svg';

export default class MainLogo extends React.Component{
  render(){
    return(
      <div>
        <img src={logo} className='stream_logo'/>
      </div>
    );
  }
}