
import twitter from './twitter';
import menu from './menu';
import { reducer as reducerForm } from 'redux-form';

const reducers={
  menu,
  twitter,
  form: reducerForm,
};

export default reducers;