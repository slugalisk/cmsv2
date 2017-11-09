import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class Emotes extends React.Component{
  render(){
    return(
 
    <div>
      <Col 
        md={12} 
        mdOffset={0} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
        [submit new emote button]<br/>
        image must be larger than 32x32 and smaller than 200x200<br/>
        upload button<br/>
        upload preview<br/>
        emote nameadvanced css transforms<br/>
        none - rotate - rainbowify - shake - rotate - custom<br/>
        <br/>
        [everyone]<br/>
        [t1]<br/>
        [t2]<br/>
        [t3]<br/>
        [t4]<br/>
        [custom]<br/>
        [mods]<br/>
        [admins]<br/>
        [inactive]<br/>
        <br/><br/>
        click option: <br/>
        delete<br/>
        name [name input field]<br/>
        css transforms<br/>
        none - rotate - rainbowify - shake - rotate - custom<br/>
      </Col>
    </div>
    );
  }
}
