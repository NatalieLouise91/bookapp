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
        <p class="text-center"><a href="https://github.com/NatalieLouise91/bookapp"><img src={Github} alt="link to github" height="60px"/></a></p>
        <br/>
        <br/>
        <h1 class="display-4 text-center font-weight-bold">Introducing our Team</h1>
        <hr class="my-4 bold"/>
        <ul>
          <p class="text-center"><a href="https://www.linkedin.com/in/natalie-bottema-6b8164207/">Natalie Bottema</a></p>
          <br/>
          <p class="text-center"><a href="https://www.linkedin.com/in/walterpham/">Walter Pham</a></p>
          <br/>
          <p class="text-center"><a href="https://www.linkedin.com/in/yoko-ujihara-9584541a2/">Yoko Ujihara</a></p>
          <br/>
          <p class="text-center"><a href="https://www.linkedin.com/in/ben-aitcheson-75963b84/" class="text-center">Ben Aitcheson</a></p>
          <br/>
          <p class="text-center"><a href="https://www.linkedin.com/in/russell-m-85435242/" class="text-center">Russell Moore</a></p>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
