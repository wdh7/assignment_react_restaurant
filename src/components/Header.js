import React from 'react';

const Header = (props) => {
  return (
    <header className='main-header'>
      <nav className='container'>
        <span id='logo'>The Restaurant</span>
        <ul>
          <li>About</li>
          <li>Menu</li>
          <li>Blog</li>
        </ul>
      </nav>
      <section className='hero'></section>
    </header>
  )
};


export default Header;
