import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Button} from 'react-bootstrap';

const DiscordForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row>
          <label>Discord username: </label>
          <div className='user_form__sublabel'>
            For the discord server details, ask in chat. Remember to add your username and id. e.g. Jimmy#999
          </div>
          <Field
              name='loginUsername'
              component='input'
              type='text'
              placeholder='Discord username and id. e.g. Jimmy#999'
              className='user_form__field'
            />
      </Row>
      Or connect to discord directly!

      <Row>
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
  form: 'userDiscord', // a unique identifier for this form
})(DiscordForm);
