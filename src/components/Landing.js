import React from 'react';
import axios from 'axios'; 

function Landing() {

    function topBooks() {  
        const book = 5
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=&maxResults=10")  
            .then(data => {  
                console.log(data.data.items);  
            })  
    }
    return(
        <div>
            <p>{topBooks}</p>   
        </div>
    )
}

export default Landing;