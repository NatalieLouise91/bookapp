import React, { useState } from 'react';
import axios from 'axios'; 

const SearchBar = () => {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);   
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }

    return (
        <form onSubmit={handleSubmit}>  
        <div className="card-header main-search">  
            <div className="row">  
                <div className="col-12 col-md-3 col-xl-3">  
                    <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                </div>  
                <div className="ml-auto">  
                    <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                </div>  
            </div>  
        </div>

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
        </form>
    )
}

export default SearchBar;