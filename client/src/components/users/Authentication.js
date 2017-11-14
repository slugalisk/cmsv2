import React from 'react';

export default class Authentication extends React.Component{
  render(){
    return(
      <div className='user_content'>
        <h2 className='user_content__title'>Providers</h2>
        <div className='user_content__section'>
          <br/>Authentication providers are what we use to know who you are! you can login with any of the services below.
          <br/>
          <br/>Profile [Connect]
          <br/>Twitch [Connect]
          <br/> Google [Connect]
          <br/>Twitter [Connect]
          <br/>Reddit [Connect]
          <br/>Discord [Connect]
        </div>

        <h2 className='user_content__title'>Login Keys</h2>
        <div className='user_content__section'>
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