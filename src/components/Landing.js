import React, { useEffect, useState } from 'react';


function Landing() {
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

useEffect(() => {

  const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699";
  
  const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        setTitle(json.items[0].volumeInfo.title);
        setAuthor(json.items[0].volumeInfo.authors);
        setDescription(json.items[0].volumeInfo.description);
        setImage(json.items[0].volumeInfo.imageLinks.thumbnail);
    } catch (error) {
        console.log("error",error);
    }
  };

  fetchData();
  }, []);

    return (
      <div>
          <h1>{title}</h1>
          <h1>{author}</h1>
          <p>{description}</p>
          <img src={image}/>
      </div>
    );


}

export default Landing;