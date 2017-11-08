import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SetupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Page</h2>
        <label>Background Color</label>
        <div>
          <Field
            name='pageBackgroundColor'
            component='input'
            type='text'
            placeholder=''
          />
        </div>
      </div>
      <div>
        <label>Header Color 1</label>
        <div>
          <Field
            name='pageHeaderColor1'
            component='input'
            type='text'
            placeholder=''
          />
        </div>
      </div>
      <div>
        <label>Header Color 2</label>
        <div>
          <Field
            name='pageHeaderColor2'
            component='input'
            type='text'
            placeholder=''
          />
        </div>
      </div>

      <div>
        <label>Header Font</label>
        <div>
          <Field name='pageHeaderFont' component='select'>
            <option />
            <option value='georgia'>Georgia</option>
            <option value='palatino linotype'>Palatino Linotype</option>
            <option value='times new roman'>Times New Roman</option>
            <option value='Open Sans'>Open Sans</option>
            <option value='arial'>Arial</option>
            <option value='arial black'>Arial Black</option>
            <option value='comic sans ms'>Comic Sans MS</option>
            <option value='impact'>Impact</option>
            <option value='lucida sans unicode'>Lucida Sans Unicode</option>
            <option value='tahoma'>Tahoma</option>
            <option value='trebuchet ms'>Trebuchet MS</option>
            <option value='verdana'>Verdana</option>
            <option value='courier new'>Courier New</option>
            <option value='lucida console'>Lucida Console</option>
          </Field>
        </div>
      </div>

      <div>
        <label>Body Font</label>
        <div>
          <Field name='pageBodyFont' component='select'>
            <option />
            <option value='georgia'>Georgia</option>
            <option value='palatino linotype'>Palatino Linotype</option>
            <option value='times new roman'>Times New Roman</option>
            <option value='Open Sans'>Open Sans</option>
            <option value='arial'>Arial</option>
            <option value='arial black'>Arial Black</option>
            <option value='comic sans ms'>Comic Sans MS</option>
            <option value='impact'>Impact</option>
            <option value='lucida sans unicode'>Lucida Sans Unicode</option>
            <option value='tahoma'>Tahoma</option>
            <option value='trebuchet ms'>Trebuchet MS</option>
            <option value='verdana'>Verdana</option>
            <option value='courier new'>Courier New</option>
            <option value='lucida console'>Lucida Console</option>
          </Field>
        </div>
      </div>

      <h2>Sections</h2>
      <div>
      <label>Background</label>
      <div>
        <Field
          name='sectionBackgroundColor'
          component='input'
          type='text'
          placeholder=''
        />
      </div>
    </div>
    <div>
      <label>Header Text</label>
      <div>
        <Field
          name='sectionHeaderTextColor'
          component='input'
          type='text'
          placeholder=''
        />
      </div>
    </div>
    
    <div>
      <label>Header Size</label>
      <div>
        <Field
          name='sectionHeaderSize'
          component='input'
          type='text'
          placeholder=''
        />
      </div>
    </div>

    <div>
      <label>Body Text</label>
      <div>
        <Field
          name='sectionBodyTextColor'
          component='input'
          type='text'
          placeholder=''
        />
      </div>
    </div>

    <div>
      <label>Link Text</label>
      <div>
        <Field
          name='sectionLinkColor'
          component='input'
          type='text'
          placeholder=''
        />
      </div>
    </div>

    <div>
      <label>Border Color</label>
      <div>
        <Field
          name='sectionBorderColor'
          component='input'
          type='text'
          placeholder=''
        />
      </div>
    </div>




      <div>
        <button type='submit' disabled={pristine || submitting}>Submit</button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'setup', // a unique identifier for this form
})(SetupForm);
