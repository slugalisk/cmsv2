import React from 'react';
import {Button} from 'react-bootstrap';


export default class SubscriptionRow extends React.Component{
  render(){
    return(
      <div className='subscription_row'>
        <div className='subscription_row__left'>
          <div className='subscription_title'>
            {this.props.subscriptionTitle}
          </div>
          <div className='subscription_subtitle'>
            {this.props.subscriptionSubtitle}
          </div>
        </div>
        <div className='subscription_row__right'>
          <div className='subscription_row__price_1_row'>
            <div className='subscription_row__price_1'>
              {this.props.subscriptionCost1}
            </div>
            <div className='subscription_row__price_1_time'>
              1 month
              <br/>
              <Button 
                bsStyle="success" 
                type='submit' 
              >
                Choose
              </Button>
            </div>
          </div>
          <div className='subscription_row__price_2_row'>
            <div className='subscription_row__price_2'>
              {this.props.subscriptionCost2}
            </div>
            <div className='subscription_row__price_2_time'>
              3 months
              <br/>
              <Button 
                bsStyle="success" 
                type='submit' 
              >
                Choose
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}