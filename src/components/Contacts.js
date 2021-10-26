import React from 'react';
import Github from '../github.png'

function Contacts() {
  return (
    <div>
        <h1>Contact</h1>
        <p>We are a team of Coders from Coder Academy. This site is our second Hackathon project.</p>
        <p>Here is the Github repo for this project. You can reach us here to raise any issues or modifications.</p>
        <a href="https://github.com/NatalieLouise91/bookapp"><img src={Github} alt="link to github" height="60px"/></a>
    </div>
  );
}

export default Contacts;
