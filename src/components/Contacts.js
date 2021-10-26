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

        <p>Introducing our Team:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/natalie-bottema-6b8164207/">Natalie Bottema</a></li>
          <li><a href="https://www.linkedin.com/in/walterpham/">Walter Pham</a></li>
          <li><a href="https://www.linkedin.com/in/yoko-ujihara-9584541a2/">Yoko Ujihara</a></li>
          <li><a href="https://www.linkedin.com/in/ben-aitcheson-75963b84/">Ben Aitcheson</a></li>
          <li><a href="https://www.linkedin.com/in/russell-m-85435242/">Russell Moore</a></li>
        </ul>
    </div>
  );
}

export default Contacts;
