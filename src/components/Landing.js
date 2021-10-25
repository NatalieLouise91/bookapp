import React, { useState, useEffect} from 'react';
import axios from 'axios'; 

    const Landing = () => {  
        const [result, setResult] = useState([]);   
     
        function loadBooks() {   
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&key=&maxResults=4`)  
                .then(data => {   
                    setResult(data.data.items);  
                })  
        }

        loadBooks();

    return (
        <div>
            <h2>Recommended Books</h2>
            <div className="container">  
                    <div className="row">  
                        {result.map(book => (  
                            <div className="col-sm-2">  
                                <div style={{ 'marginTop': '10px' }}>  
    
                                    <img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                    <div>  
                                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                        <p className="card-title">{book.volumeInfo.authors}</p> 
                                        <p className="card-title">{book.volumeInfo.averageRating}</p>   
                                        <a href= {book.volumeInfo.previewLink} target="_blank" className="btn btn-primary" >Preview</a> 
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