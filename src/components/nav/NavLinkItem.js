import React from 'react'
import {NavLink} from 'react-router-dom';

const NavLinkItem = props => {
    const { title, url } = props;
    return (
      <NavLink to={url} exact activeClassName="NavBar-menu-current" className="NavBar-menu-links">
        {title}
      </NavLink>
    );
}

export default NavLinkItem;