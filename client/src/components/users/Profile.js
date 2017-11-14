import React from 'react';

export default class Profile extends React.Component{
  render(){
    return(
      <div>
        <div>
          <h2>Account Name</h2>
        </div>
        <div>
          Joined on 22nd August, 2016 1:11 am
        </div>
        <div>
          Check out your old Subscriptions, Gifts and Donations.
        </div>
        <div>
          Sign Out
        </div>

        <div>
          <br/>Account
          <br/>Username: 
          <br/>(You have no more name changes available)
          <br/>[form]
          <br/>Email: 
          <br/>Be it valid or not, it will be safe with us.
          <br/>[form]
          <br/>Nationality:
          <br/>The country you identify with
          <br/>[form]
          <br/>Accept Gifts: 
          <br/>Whether or not you would like the ability to receive gifts (subscriptions) from other people.
          <br/>[form]
          <br/>[submit]
        </div>

        <div>
          <br/>Discord
          <br/>Discord username: 
          <br/>For the discord server details, ask in chat. Remember to add your username and id. e.g. Jimmy#999
          <br/>[form]
          <br/>[submit]
        </div>
      </div>
    );
  }
}