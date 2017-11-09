import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TwitterActions from '../../../actions/twitter';

import TwitterComment from './TwitterSub';

class TwitterCont extends Component {

componentWillMount(){
  this.props.action.fetchPostsIfNeeded();
}

render() {
    const mapPosts = this.props.posts.map((value) => {
      return (
        <TwitterComment
          timestamp={value.timestamp}
          link={value.url}
          >
          {value.body}
        </TwitterComment>
      )
    });
    return (
      <div>
        <div
          className='twitter'
        >
          <div
            className='twitter__header'
          >
            Twitter
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

export default connect(mapStateToProps, mapDispatchToProps)(TwitterCont);