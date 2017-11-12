import React from 'react';
import classNames from 'classnames';

export default class Toggler extends React.Component{

  render(){

    const adminTogglerInner = classNames(
      'admin_toggler__inner',
      {
        'admin_toggler__inner--active':this.props.toggleOn
      }
    )

  
    return(
      <div className='admin_toggler'>
        <div className={'admin_toggler__button'}>
          <div className={adminTogglerInner}>
          </div>
        </div>
      </div>
    )
  }
}