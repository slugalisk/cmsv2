import React from 'react';
import {Button} from 'react-bootstrap';

import DonateForm from '../forms/DonateForm';

import showResults from './ShowResults';

export default class Donate extends React.Component{
  render(){
    return(
      <div className='user_content'>

        <div className='user_content__title'>
          Donate
        </div>
        <div className='user_content__section'>
          <DonateForm onSubmit={showResults} />
        </div>
      </div>
    );
  }
}