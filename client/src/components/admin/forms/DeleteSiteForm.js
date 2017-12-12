import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';

class DeleteSiteForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      strings:[]
    }
  }

  getStrings = (e) => {
    e.preventDefault();
    fetch('/getids')
      .then(res => res.json())
      .then(strings => this.setState({ strings }));
  }

  render(){

    const strings = this.state.strings;

  const { handleSubmit, pristine, submitting } = this.props;

  const testget=()=>{
    fetch('http://localhost:5000/testget')
  }

  const testput=()=>{
    fetch('http://localhost:5000/testput')
  }

  return (
    <form onSubmit={handleSubmit}>


        <Row className='admin_setup__row'>
          <label>Delete</label>
          <Field
            name='siteId'
            component='input'
            type='text'
            placeholder='Site ID'
            className='admin_form_field'
          />
        </Row>


        <Row className='admin_setup__row'>
          {strings.map((string, index) =>
            <div key={index}>
              {string}
            </div>
          )}
        </Row>

    <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0}>
      <Col md={4} sm={6} xs={12}>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Row className='admin_button_wrapper'>
            <Button 
              bsStyle='success' 
              type='submit' 
              disabled = {pristine || submitting}
              className='admin_button'
            >
              Submit
            </Button>

            <Button 
              bsStyle='success' 
              type='submit' 
              onClick={this.getStrings}
              className='admin_button'
            >
              Get Site ID Numbers
            </Button>
            
            <Button 
              bsStyle='warning' 
              type='button' 
              onClick={testget}
              className='admin_button'
            >
              test get
            </Button>

            <Button 
              bsStyle='warning' 
              type='button' 
              onClick={testput}
              className='admin_button'
            >
              test put
            </Button>

          </Row>
        </Col>
      </Col>
    </Col>

      
    </form>
  );
}
};

export default reduxForm({
  form: 'deleteSite', // a unique identifier for this form
})(DeleteSiteForm);
