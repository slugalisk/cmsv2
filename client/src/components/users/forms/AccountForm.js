import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const AccountForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Username</label>
          <br/>
          (You have no more name changes available)
            <Field
              name='loginUsername'
              component='input'
              type='text'
              placeholder=''
              className='admin_form_field'
              disabled='disabled'
            />
        </Col>
      </Row>

      <Row>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Email</label>
          <br/>
          Be it valid or not, it will be safe with us.
            <Field
              name='email'
              component='input'
              type='email'
              placeholder=''
              className='admin_form_field'
            />
        </Col>
      </Row>

      <Row>
        <Col md = {12} sm = {12} xs = {12}>
        <label>Country</label>
        <Field 
          name='country'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='georgia'>United States</option>
          <option value='georgia'>Not United States</option>
        </Field>
        </Col>
      </Row>

      <Row>
        <Col md = {12} sm = {12} xs = {12}>
        <label>Accept Gifts?</label>
        <Field 
          name='gifts'
          component='select'
          className='admin_form_field'
        >
          <option />
          <option value='georgia'>Yes, I accept gifts</option>
          <option value='georgia'>No, I do not accept gifts</option>
        </Field>
        </Col>
      </Row>
   

      <Row>
        <button type='submit' disabled = {pristine || submitting}>Submit</button>
        <button type='button' disabled = {pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'userAccount', // a unique identifier for this form
})(AccountForm);
