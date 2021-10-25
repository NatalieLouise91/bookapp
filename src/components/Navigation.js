import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar.css"

function Navigation() {
    
    return (
    <header>
        <nav className="navbar">
                <div className="container links row mx-auto">
                <Link to="/" className="nav-link col">Home</Link>
                <Link to="/about" className="nav-link col">About</Link>
                <Link to="/categories" className="nav-link col">Categories</Link>
                <Link to="/contacts" className="nav-link col ">Contacts</Link>
                {/* <Link to="/preview">Preview</Link> */}
            </div>
        </nav>
    </header>
    );
  }
  
  export default Navigation;

