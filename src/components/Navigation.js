import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar.css"
import SearchBar from './SearchBar'

function Navigation() {
    
    return (
    <header className="head">  
        {/* <nav className="navbar navbar-expand"> */}
                <div className="links row mx-auto">
                <Link to="/" className="h3 nav-link col">Home</Link>
                <Link to="/about" className="h3 nav-link col">About</Link>
                {/* <Link to="/categories" className="nav-link col">Categories</Link> */}
                <Link to="/contacts" className="h3 nav-link col ">Contacts</Link>
                {/* <Link to="/preview">Preview</Link> */}
                </div>
        {/* </nav>  */}
        <SearchBar/> 
    </header>
    );
  }
  
  export default Navigation;

