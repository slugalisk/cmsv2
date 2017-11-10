
import twitter from './twitter';
import menu from './menu';
import { reducer as reducerForm } from 'redux-form';
import setup from './setup';
import adminmobile from './adminmobile';

const reducers={
  menu,
  twitter,
  form: reducerForm,
  setup,
  adminmobile,
};

export default reducers;