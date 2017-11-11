import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TwitterActions from '../../../actions/twitter';

import LastfmPost from './LastfmPost';

class LastfmCont extends React.Component{
 
  componentWillMount(){
    this.props.action.fetchPostsIfNeeded();
  }

  render() {
      const mapPosts = this.props.posts.map((value) => {
        return (
          <LastfmPost
            timestamp={value.timestamp}
            link={value.url}
            >
            {value.body}
          </LastfmPost>
        )
      });
      return (
        <div>
          <div
            className='lastfm'
          >
            <div
              className='social__header'
            >
              Lastfm
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

export default connect(mapStateToProps, mapDispatchToProps)(LastfmCont);