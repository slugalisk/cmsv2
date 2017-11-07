import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TwitterActions from '../actions/twitter';

class TwitterCont extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

componentWillMount(){
  this.props.action.fetchPostsIfNeeded();
}

  render() {
    const mapPosts = this.props.posts.map((value) => {
      return (<div><span>{value.body}</span></div>)
    });

    return (
      <div>
        {mapPosts}
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