import React from 'react';

export default class Authentication extends React.Component{
  render(){
    return(
      <div>
      <div>
        Providers
        <br/>Authentication providers are what we use to know who you are! you can login with any of the services below.
        <br/>
        <br/>Profile [Connect]
        <br/>Twitch [Connect]
        <br/> Google [Connect]
        <br/>Twitter [Connect]
        <br/>Reddit [Connect]
        <br/>Discord [Connect]
      </div>

      <div>
        Login Keys
        <br/>Login keys allow you to authenticate without the need for a username or password.
        <br/>
        <br/>Key - Created
        <br/>[stuff]
        <br/>Create New Key
      </div>
      </div>
    );
  }
}