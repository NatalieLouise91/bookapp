import React from 'react';
import '../App.css';

function About() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 text-center font-weight-bold">About</h1>
        <hr class="my-4 bold"/>
        <p class="text-center">BookMark is an app that allows users (that's you!) to find books based upon keywords, book titles or author names!</p>
        <br/>
        <p class="text-center">It will deliver The book title, author name and the cover image for all results delivered from your serch query.</p>
        <br/>
        <p class="text-center">A handy link is provided to purchase a title, or view the work on the Google Books.</p>
      </div>
    </div>
  );
}

export default About;