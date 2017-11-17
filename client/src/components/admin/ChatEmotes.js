import React from 'react';
import showResults from './components/showResults';

import {Col} from 'react-bootstrap';

import EmoteForm from './forms/EmoteForm';

export default class Emotes extends React.Component{
  render(){
    return(
 
    <div>
        <EmoteForm onSubmit={showResults}/>
      
    </div>
    );
  }
}
