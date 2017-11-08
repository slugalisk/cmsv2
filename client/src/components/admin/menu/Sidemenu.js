import React from 'react';
import {Link} from 'react-router-dom';


import Adminmenusect from './Menusect';
import Option from './Menuoption';

export default class Adminmenubar extends React.Component{
  render(){

    return(
      <div>
        <div className='admin_menu__container'>
        <Adminmenusect title="Account">
          <Link to='/admin/account'><Option>Account</Option></Link>
          <Option>OBS Integration</Option>
          <Option>Donations</Option>
        </Adminmenusect>
      
        <Adminmenusect title="Users">
          <Link to='/admin/users'><Option>Users</Option></Link>
          <Link to='/admin/subscriptions'><Option>Subscriptions</Option></Link>  
          <Link to='/admin/groups'><Option>Groups</Option></Link>
          <Link to='/admin/banlist'><Option>Ban List</Option></Link>
          <Link to='/admin/email'><Option>Email Users</Option></Link>
        </Adminmenusect>

        <Adminmenusect title="Chat">
          <Link to='/admin/emotes'><Option>Emotes</Option></Link>
          <Link to='/admin/chat'><Option>Chat</Option></Link>
          <Link to='/admin/bots'><Option>Bots</Option></Link>
          <Option>Polls</Option>
        </Adminmenusect>

        <Adminmenusect title="Site">
          <Link to='/admin/setup'><Option>Setup</Option></Link>
          <Link to='/admin/setup2'><Option>Setup2</Option></Link>
          <Link to='/admin/socials'><Option>Social Links</Option></Link>
          <Link to='/admin/SocialDisplay'><Option>Social Display</Option></Link>
          <Option>Custom Pages</Option>
        </Adminmenusect>

        <Adminmenusect title="Lootboxes">
          <Link to='/admin/lootboxes'><Option>Loot Boxes</Option></Link>
        </Adminmenusect>

          <br/>
          Log Out
        </div>
      </div>
    )
  }
}