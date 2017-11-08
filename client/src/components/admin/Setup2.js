import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import showResults from "./components/showResults";
import SimpleForm from "./components/SetupForm";

export default class Setup2 extends React.Component{
  render(){
    return(
 
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div>
    );
  }
}
