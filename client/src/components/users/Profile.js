import React from 'react';
import AccountForm from './forms/AccountForm';
import DiscordForm from './forms/DiscordForm';

import showResults from './ShowResults';
export default class Profile extends React.Component{
  render(){
    return(
      <div className='user_content'>
        <div className='user_content__section'>
          <h2>
            [Account Name]
          </h2>
          <div>
            Joined on 22nd August, 2016 1:11 am
          </div>
          <div>
            Check out your old Subscriptions, Gifts and Donations.
          </div>
          <div>
            Sign Out
          </div>
        </div>

        <h2 className='user_content__title'>
          Account
        </h2>
        <div className='user_content__section'>
          <AccountForm onSubmit={showResults} />
        </div>

        <h2 className='user_content__title'>
          Discord
        </h2>
        <div className='user_content__section'>
          <DiscordForm onSubmit={showResults} />
        </div>
      </div>
    );
  }
}