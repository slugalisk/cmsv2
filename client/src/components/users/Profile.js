import React from 'react';
import {Button} from 'react-bootstrap';

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
            <Button 
            bsStyle="danger" 
            type='button'
            >
              Sign Out
            </Button>
          </div>
        </div>

        <div className='user_content__title'>
          Account
        </div>
        <div className='user_content__section'>
          <AccountForm onSubmit={showResults} />
        </div>

        <div className='user_content__title'>
          Discord
        </div>
        <div className='user_content__section'>
          <DiscordForm onSubmit={showResults} />
        </div>
      </div>
    );
  }
}