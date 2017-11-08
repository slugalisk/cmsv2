import React from 'react';
import Breakpoint from '../responsive/breakpoint.js';
export default function DesktopBreakpoint(props) {
 return (
 <Breakpoint name='desktop'>
 {props.children}
 </Breakpoint>
 );
}
