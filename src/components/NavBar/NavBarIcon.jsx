import React from 'react';

const NavBarIcon = (props) => {
  return <a href={props.href} target='_blank' rel="noopener noreferrer"><svg className={props.className} width={props.width} height={props.height} viewBox={props.viewBox}>
    {props.children}
  </svg></a>
}

export default NavBarIcon;