import React, {useState} from 'react';
import NavLinkItem from './NavLinkItem';

const NavBar = () => {
  const [links] = useState([
     {id:1, url:"/", title:"Home"},
     {id:2, url:"/addrecipe", title:"Create"}
  ])
  return (
    <nav className="NavBar-menu">
      <ul>
        {links.map(link => ( 
        <li key={link.id}>
          <NavLinkItem  url={link.url} title={link.title} />
          </li>
          ))}
      </ul>
    </nav>
  );
}

export default NavBar;