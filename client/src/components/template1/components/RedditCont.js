import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TwitterActions from '../../../actions/twitter';

import RedditSub from './RedditSub';

class RedditCont extends React.Component{

  componentWillMount(){
    this.props.action.fetchPostsIfNeeded();
  }

  render(){
    const mapPosts = this.props.posts.map((value) => {
      return (
        <RedditSub
          timestamp={value.timestamp}
          link={value.url}
          >
          {value.body}
        </RedditSub>
      )
    });

    return(
      <div>
         <div
          className='reddit'
        >
          <div
            className='social__header'
          >
            Reddit
          </div>
          {mapPosts}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, prop){
  /*the name of the reducer*/
  return{
    posts: state.twitter.posts,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(TwitterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditCont);