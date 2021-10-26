import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ImageUnavailable from '../assets/ImageUnavailable.jpg'
import "../Title.css"
import "../Searchbar.css";


    const Landing = () => {  
        const [result, setResult] = useState([]);   
     
        function LoadBooks() {   
            useEffect(() => {
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&key=&maxResults=10`)  
                    .then(data => {   
                        setResult(data.data.items);  
                    },
                    [])                 
            })
        }

        LoadBooks();

    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4 title-page">Recommended Books</h1>
                <hr class="my-4 bold"/>

                </div>
            </div>
            <div className="container">  
                    <div className="row">  
                        {result.map(book => (  
                            <div className="col-sm-2">  
                                <div style={{ 'marginTop': '10px' }}>  
    
                                    <img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ImageUnavailable} alt={book.title} />  
                                    <div>  
                                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                        <p className="card-title">{book.volumeInfo.authors}</p> 
                                        <p className="card-title">{book.volumeInfo.averageRating}</p>   
                                        <a href= {book.volumeInfo.previewLink} className="btn btn-primary" >Preview</a> 
                                    </div>  
                                </div>  
                            </div>  
                        ))}  
                    </div>  
                </div>
        </div>
    )
}

export default Landing;