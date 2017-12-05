import React from 'react';
import {Button} from 'react-bootstrap';

import SubscriptionRow from '../components/SubscriptionRow';

import showResults from './ShowResults';

export default class Subscribe extends React.Component{
  render(){
    return(
      <div className='user_content'>

        <div className='user_content__title'>
          Subscribe [send a message too]
        </div>

        <SubscriptionRow
          subscriptionTitle='Tier IV'
          subscriptionSubtitle='Know in your heart you have made the right choice here.'
          subscriptionCost1='$40'
          subscriptionCost2='$96'
          subscriptionLink1=''
          subscriptionLink2=''
        />

        <SubscriptionRow
          subscriptionTitle='Tier III'
          subscriptionSubtitle='Wow such value so prestige you should purchase immediately.'
          subscriptionCost1='$20'
          subscriptionCost2='$48'
          subscriptionLink1=''
          subscriptionLink2=''
        />

        <SubscriptionRow
          subscriptionTitle='Tier II'
          subscriptionSubtitle='Got a bit more to contribute? Probably the best investment of all time.'
          subscriptionCost1='$10'
          subscriptionCost2='$24'
          subscriptionLink1=''
          subscriptionLink2=''
        />

        <SubscriptionRow
          subscriptionTitle='Tier I'
          subscriptionSubtitle='Get access to chat features and be eligible for future subscriber events!'
          subscriptionCost1='$5'
          subscriptionCost2='$12'
          subscriptionLink1=''
          subscriptionLink2=''
        />
      </div>
    );
  }
}