import React from 'react';
import NavBar from './NavBar';
import './header.css';
const Header = () => {
  return (
    <header className="Header">
      <h1>Recipes</h1>
      <NavBar/>
    </header>
  )
}

export default Header;