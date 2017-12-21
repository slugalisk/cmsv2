import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Button} from 'react-bootstrap';

const DonateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row>
          <label>Name:</label>
          <div className='user_form__sublabel'>
          </div>
          <Field
              name='donateName'
              component='input'
              type='text'
              placeholder='[Username]'
              className='user_form__field'
            />
      </Row>
      <Row>
      <label>Amount:</label>
      <div className='user_form__sublabel'>
      </div>
      <Field
          name='donateAmount'
          component='input'
          type='text'
          placeholder='$5.00'
          className='user_form__field'
        />
      </Row>
      <Row>
          <label>Message:</label>
          <div className='user_form__sublabel'>
          </div>
          <Field
              name='donateMEssage'
              component='input'
              type='text'
              placeholder='Write a message ...'
              className='user_form__field'
            />
      </Row>
      By clicking the "Continue" button, you are confirming that this purchase is what you wanted and that you have read the user agreement.
      <Row>
        <Button 
          bsStyle="success" 
          type='submit' 
          disabled = {pristine || submitting}
          className='user_button'
        >
          Submit
        </Button>
        <Button 
          bsStyle="info" 
          type='button' 
          disabled = {pristine || submitting} 
          onClick={reset}
          className='user_button'
        >
          Clear Values
        </Button>
      </Row>
    </form>
  );
};

export default reduxForm({
  form: 'donateForm', // a unique identifier for this form
})(DonateForm);
