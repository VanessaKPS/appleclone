import React from 'react';

const NavBarIcon = (props) => {
  return <a href={props.href}><svg class={props.class} width={props.width} height={props.height} viewBox={props.viewBox}>
    {props.children}
  </svg></a>
}

export default NavBarIcon;