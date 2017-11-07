import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TwitterActions from '../actions/twitter';


class TwitterCont extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    this.testfunction = this.testfunction.bind(this);
  }

  
componentWillMount(){
 // this.props.dispatch(this.props.action.fetchPostsIfNeeded("asd"));

}
  testfunction(){
    this.props.action.fetchPostsIfNeeded();
    console.log(Object.entries(this.props));
  }

  render() {
    console.log(this.props.posts);

  const mapItems = Object.entries(this.props.cart.map).map(([key, value]) => {
      return (<div><span>{key}: </span><span>{value}</span></div>)
    });
    const mapPosts = this.props.posts.map((value) => {
      return (<div><span>{value.body}</span></div>)
    });



    return (
      <div>
        {mapPosts}
        {mapItems}
        <button onClick={()=>this.props.action.setMapKey("testkey", "testvalue")}>submit</button>
        <button onClick={()=>this.props.action.setMapKey("testkey", "number2value")}>submit</button>
        <button onClick={(this.testfunction)}>submit</button>

        <h2>Car Items</h2>
        <ol>
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state, prop){

  /*the name of the reducer*/
  return{
    cart: state.twitter,
    map: state.twitter.map,
    posts: state.twitter.posts,
  }
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(TwitterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterCont);