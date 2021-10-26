import React from 'react';
import Github from '../github.png'

function Contacts() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 text-center font-weight-bold">Contact</h1>
        <hr class="my-4 bold"/>
        <p class="text-center">We are a team of Coders from Coder Academy. This site is our second Hackathon project.</p>
        <br/>
        <p class="text-center">Here is the Github repo for this project. You can reach us here to raise any issues or modifications.</p>
        <br/>
        <a href="https://github.com/NatalieLouise91/bookapp"><img src={Github} alt="link to github" height="60px"/></a>
      </div>
    </div>
  );
}

export default Contacts;
