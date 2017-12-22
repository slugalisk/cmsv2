
import menu from './menu';
import { reducer as reducerForm } from 'redux-form';
import setup from './setup';
import adminmobile from './adminmobile';
import togglers from './togglers';
import templatenav from './templatenav';

import sites from './sites';

import discord from './discord';
import google from './google';
import reddit from './reddit';
import twitter from './twitter';
import lastfm from './lastfm';
import instagram from './instagram';
import twitch from './twitch';

import api from './api';

const reducers={
  menu,
  form: reducerForm,
  setup,
  adminmobile,
  togglers,
  templatenav,

  sites,
  
  discord,
  google,
  twitter,
  reddit,
  lastfm,
  instagram,
  twitch,

  api,
};

export default reducers;