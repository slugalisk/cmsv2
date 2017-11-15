import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const AccountForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row className='user_form__section'>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Username:</label>
            <div className='user_form__sublabel'>
              (You have no more name changes available)
            </div>
            <Field
              name='loginUsername'
              component='input'
              type='text'
              placeholder=''
              className='user_form__field'
              disabled='disabled'
            />
        </Col>
      </Row>

      <Row className='user_form__section'>
        <Col md = {12} sm = {12} xs = {12}> 
          <label>Email:</label>
          <div className='user_form__sublabel'>
          Be it valid or not, it will be safe with us.
          </div>
            <Field
              name='email'
              component='input'
              type='email'
              placeholder=''
              className='user_form__field'
            />
        </Col>
      </Row>

      <Row className='user_form__section'>
        <Col md = {12} sm = {12} xs = {12}>
        <label>Country:</label>
        <div className='user_form__sublabel'>
          The country you identify with
        </div>
        <Field 
          name='country'
          component='select'
          className='user_form__field'
        >
          <option />
          <option value='georgia'>United States</option>
          <option value='georgia'>Not United States</option>
        </Field>
        </Col>
      </Row>

      <Row className='user_form__section'>
        <Col md = {12} sm = {12} xs = {12}>
        <label>Accept Gifts:</label>
        <div className='user_form__sublabel'>
          Whether or not you would like the ability to receive gifts (subscriptions) from other people.
        </div>
        <Field 
          name='gifts'
          component='select'
          className='user_form__field'
        >
          <option />
          <option value='georgia'>Yes, I accept gifts</option>
          <option value='georgia'>No, I do not accept gifts</option>
        </Field>
        </Col>
      </Row>
   

      <Row className='user_form__section'>
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
