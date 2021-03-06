import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as RedditActions from '../../../actions/reddit';

import RedditPost from './RedditPost';

class RedditCont extends React.Component{

  componentWillMount(){
    this.props.action.fetchPostsIfNeeded();
  }

  render(){
    const mapPosts = this.props.posts.map((value) => {
      return (
        <RedditPost
          timestamp={value.timestamp}
          link={value.url}
          >
          {value.body}
        </RedditPost>
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
    posts: state.reddit.posts,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(RedditActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditCont);