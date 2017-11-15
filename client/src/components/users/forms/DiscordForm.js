import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const DiscordForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Row>
        <Col md = {12} sm = {12} xs = {12}> 
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
        </Col>
      </Row>
      Or connect to discord directly!

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
  form: 'userDiscord', // a unique identifier for this form
})(DiscordForm);
