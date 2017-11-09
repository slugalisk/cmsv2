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
          <Link to='/admin/chatoptions'><Option>Chat</Option></Link>
          <Link to='/admin/bots'><Option>Bots</Option></Link>
          <Link to='/admin/polls'><Option>Polls</Option></Link>
        </Adminmenusect>

        <Adminmenusect title="Site">
          <Link to='/admin/setup'><Option>Setup</Option></Link>
          <Link to='/admin/socials'><Option>Social Links</Option></Link>
          <Link to='/admin/socialdisplay'><Option>Social Display</Option></Link>
          <Link to='/admin/custompages'><Option>Custom Pages</Option></Link>
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