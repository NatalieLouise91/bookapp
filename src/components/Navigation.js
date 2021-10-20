import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/contacts">Contacts</Link>
        </nav>
    </header>
    );
  }
  
  export default Navigation;

