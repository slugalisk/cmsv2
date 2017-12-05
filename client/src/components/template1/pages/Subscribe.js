import React from 'react';
import {Button} from 'react-bootstrap';

import SubscribeForm from '../forms/SubscribeForm';

import showResults from './ShowResults';

export default class Subscribe extends React.Component{
  render(){
    return(
      <div className='user_content'>

        <div className='user_content__title'>
          Subscribe [send a message too]
        </div>

        Would you like to gift someone a subscription? 


        Tier IV
Know in your heart you have made the right choice here.
$40
        1 month [button]
        $96
        3 month [button]

        Tier III
Wow such value so prestige you should purchase immediately.

$20
1 month
Choose
$48
3 month
Choose
Tier II
Got a bit more to contribute? Probably the best investment of all time.

$10
1 month
Choose
$24
3 month
Choose
Tier I
Get access to chat features and be eligible for future subscriber events!

$5
1 month
Choose
$12
3 month
        <div className='user_content__section'>
          <SubscribeForm onSubmit={showResults} />
        </div>
      </div>
    );
  }
}