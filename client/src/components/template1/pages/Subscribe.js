import React from 'react';
import {Button} from 'react-bootstrap';

import SubscribeForm from '../forms/SubscribeForm';

import showResults from './ShowResults';

export default class Subscribe extends React.Component{
  render(){
    return(
      <div className='user_content'>

        <div className='user_content__title'>
          Subscribe
        </div>
        <div className='user_content__section'>
          <SubscribeForm onSubmit={showResults} />
        </div>
      </div>
    );
  }
}