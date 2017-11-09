import React from 'react';
import {Route} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import AdminBackground from './components/AdminBackground';
import Admin from './Admin';
import Adminmenu from './menu/Sidemenu';
import Adminbar from './menu/Menubar';

import Account from './Account';

import UsersBanlist from './UsersBanlist';
import UsersEmail from './UsersEmail';
import UsersGroups from './UsersGroups';
import UsersList from './UsersList';
import UsersSubs from './UsersSubs';

import ChatBots from './ChatBots';
import ChatEmotes from './ChatEmotes';
import ChatPolls from './ChatPolls';
import ChatOptions from './ChatOptions';

import SiteSetup from './SiteSetup';
import SiteSocialLinks from './SiteSocialLinks';
import SiteSocialDisplay from './SiteSocialDisplay';
import SiteCustomPages from './SiteCustomPages';

import Lootbox from './Lootbox';



export default class Main extends React.Component{

  render(){
 
    return(
      <div>
      <Route path="/admin" render={(props) => <AdminBackground {...props}/>} /> 

      <Row>
      <Col md={2} className='admin_menu'>
      <Route path="/admin" render={(props) => <Adminmenu {...props}/>} />
      </Col>

      <Col md={10} mdOffset={2} className = 'admin_panel__wrapper'>
        <Col md={10} mdOffset={1}>
          <Route exact path="/admin" render={(props) => <Admin {...props}/>}/>

          <Route exact path="/admin/account" render={(props) => <Account {...props}/>}/>

          <Route exact path="/admin/users" render={(props) => <UsersList {...props}/>}/>
          <Route exact path="/admin/banlist" render={(props) => <UsersBanlist {...props}/>}/>
          <Route exact path="/admin/email" render={(props) => <UsersEmail {...props}/>}/>
          <Route exact path="/admin/groups" render={(props) => <UsersGroups {...props}/>}/>
          <Route exact path="/admin/subscriptions" render={(props) => <UsersSubs {...props}/>}/>

          <Route exact path="/admin/bots" render={(props) => <ChatBots {...props}/>}/>
          <Route exact path="/admin/emotes" render={(props) => <ChatEmotes {...props}/>}/>
          <Route exact path="/admin/polls" render={(props) => <ChatPolls {...props}/>}/>
          <Route exact path="/admin/chatoptions" render={(props) => <ChatOptions {...props}/>}/>

          <Route exact path="/admin/setup" render={(props) => <SiteSetup {...props}/>}/>
          <Route exact path="/admin/socials" render={(props) => <SiteSocialLinks {...props}/>}/>
          <Route exact path="/admin/socialdisplay" render={(props) => <SiteSocialDisplay {...props}/>}/>
          <Route exact path="/admin/custompages" render={(props) => <SiteCustomPages {...props}/>}/>
          
          <Route exact path="/admin/lootboxes" render={(props) => <Lootbox {...props}/>}/>
          
        </Col>
      </Col>

      <Route path="/admin" render={(props) => <Adminbar {...props}/>} />
        
      </Row>

      </div>
    )
  }
}