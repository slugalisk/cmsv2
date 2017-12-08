import React from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';

import Adminmenusect from './Menusect';
import Option from './Menuoption';

export default class Adminmenubar extends React.Component{
  render(){

    return(
        <Col md={2} className='admin_menu__container'>
        <Adminmenusect title="ACCOUNT">
          <Link to='/admin/account'><Option>Account</Option></Link>
          <Option>OBS Integration</Option>
        </Adminmenusect>
      
        <Adminmenusect title="USERS">
          <Link to='/admin/users'><Option>Users</Option></Link>
          <Link to='/admin/groups'><Option>Groups</Option></Link>
          <Link to='/admin/banlist'><Option>Ban List</Option></Link>
          <Link to='/admin/email'><Option>Email Users</Option></Link>
          <Link to='/admin/subscriptions'><Option>Subscriptions</Option></Link>  
          <Link to='/admin/donations'> <Option>Donations</Option></Link>
        </Adminmenusect>

        <Adminmenusect title="CHAT">
          <Link to='/admin/emotes'><Option>Emotes</Option></Link>
          <Link to='/admin/chatoptions'><Option>Chat</Option></Link>
          <Link to='/admin/bots'><Option>Bots</Option></Link>
          <Link to='/admin/polls'><Option>Polls</Option></Link>
        </Adminmenusect>

        <Adminmenusect title="SITE">
          <Link to='/admin/domain'><Option>Domain Name</Option></Link>
          <Link to='/admin/setup'><Option>Setup</Option></Link>
          <Link to='/admin/socials'><Option>Social Links</Option></Link>
          <Link to='/admin/socialdisplay'><Option>Social Display</Option></Link>
          <Link to='/admin/custompages'><Option>Custom Pages</Option></Link>
        </Adminmenusect>

        <Adminmenusect title="BOXES">
          <Link to='/admin/lootboxes'><Option>Loot Boxes</Option></Link>
        </Adminmenusect>

        <div className='admin_menu__subtext'>
          Log Out
        </div>
        </Col>
    )
  }
}