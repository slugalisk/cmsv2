
import twitter from './twitter';
import menu from './menu';
import { reducer as reducerForm } from 'redux-form';
import setup from './setup';

const reducers={
  menu,
  twitter,
  form: reducerForm,
  setup,
};

export default reducers;