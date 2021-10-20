import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
    
        
    //     <nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
    //         <div className="container">
    //         <Link to ="/" className="navbar-brand black">Booktrace</Link>
    //         <button
    //             type="button" 
    //             className="navbar-toggler"
    //             data-bs-target="#navbarNav"
    //             data-bs-toggle="collapse"
    //             aria-controls="navbarNav"
    //             aria-expanded="false"
    //             aria-label="Toggle Navbar"
    //             >
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
      
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //         <div className="mx-auto"></div>
    //         <ul className="navbar-nav">
    //             <li className="nav-item">
    //                 <Link to ="/" className="nav-link text-black">
    //                     Home
    //                 </Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to ="/about" className="nav-link text-black">
    //                     About
    //                 </Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to ="/categories" className="nav-link text-black">
    //                     Categories
    //                 </Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to ="/contacts" className="nav-link text-black">
    //                     Contacts
    //                 </Link>
    //             </li>
    //         </ul>
    //     </div>
    //     </div>
    //   </nav>

    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contacts">Contacts</Link>
    </nav>
        
    );
  }
  
  export default Navigation;

