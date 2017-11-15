import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Button} from 'react-bootstrap';

const AccountForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row className='user_form__section'>
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
      </Row>

      <Row className='user_form__section'>
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
      </Row>

      <Row className='user_form__section'>
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
      </Row>

      <Row className='user_form__section'>
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
      </Row>
   

      <Row className='user_form__section'>
      <Button 
          bsStyle="success" 
          type='submit' 
          disabled = {pristine || submitting}
        >
          Submit
        </Button>
        <Button 
          bsStyle="info" 
          type='button' 
          disabled = {pristine || submitting} 
          onClick={reset}
        >
          Clear Values
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'userAccount', // a unique identifier for this form
})(AccountForm);
