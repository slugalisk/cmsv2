
import twitter from './twitter';
import menu from './menu';
import { reducer as reducerForm } from 'redux-form';
import setup from './setup';
import adminmobile from './adminmobile';
import togglers from './togglers';
import templatenav from './templatenav';

const reducers={
  menu,
  twitter,
  form: reducerForm,
  setup,
  adminmobile,
  togglers,
  templatenav,
};

export default reducers;