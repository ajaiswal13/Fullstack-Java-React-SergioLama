import * as React from 'react';

const Header = (props) => {
  return(
    <header className="app-header">
     <img src={props.logoSrc} className="app-logo" alt="logo"/>
     <h1 className="app-title">{props.title}</h1>
    </header>
  )
}

export default Header;