import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TwitterActions from '../../../actions/twitter';

import TwitterPost from './TwitterPost';

class TwitterCont extends Component {

componentWillMount(){
  //this.props.action.fetchPostsIfNeeded();
}

render() {

  {/*
    const mapPosts = this.props.posts.map((value) => {
      return (
        <TwitterPost
          timestamp={value.timestamp}
          link={value.url}
          >
          {value.body}
        </TwitterPost>
      )
    });
  */}
    return (
      <div>
        <div
          className='twitter'
        >
          <div
            className='social__header'
          >
            Twitter
          </div>
          {/*{mapPosts}*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(TwitterCont);