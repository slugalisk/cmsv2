import React from 'react';

import moment from 'moment'

export default class LastfmPost extends React.Component{
  render(){
    return(
      <div className='lastfm_post'>
        <img 
          src='https://lastfm-img2.akamaized.net/i/u/300x300/a4b5098fe19c7fdb6e1b92acfe4da5fa.png'
          className='lastfm_image'
        />
        <div className='lastfm_text'>
          <a href={this.props.link}>
            Link
          </a> 
            {this.props.children}
          <br/>
          <span 
            className='lastfm_timestamp'
          >
            {moment(this.props.timestamp, 'YYYY-MM-DD-HH:mm:ss.SSS Z').fromNow()}
          </span>
        </div>
    </div>
    );
  }
}