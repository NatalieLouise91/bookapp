import React, { useState } from 'react';
import "../Searchbar.css";
import axios from 'axios'; 
import ImageUnavailable from '../assets/ImageUnavailable.jpg'


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

    function handleClear(event){
        event.preventDefault();
        setResult([])
    }

    return (
        <form onSubmit={handleSubmit}>  
        <div className="card-header main-search">  
            <div className="row">
                <div className="col logo ">
                    <h1>BookMark</h1>
                </div>
                    <div className="col-6 flex-fill d-grid gap-2 mx-auto">  
                        <input onChange={handleChange} className="AutoFocus form-control search-bar" placeholder="Search by Title" type="text" /> 
                    </div>
                      
                    <div className="col d-grid gap-2 mx-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" /> 
                    </div> 
                        <div className="col d-grid gap-2 mx-auto">  
                        <input onClick={handleClear} type="submit" value="Clear" className="btn  btn-primary" />
                    </div> 
 
            </div>
        </div>

        <div className="container">  
                <div className="row shelf g-2">  
                    {result.map(book => (  
                        <div className="col-sm-2 single-card">  
                            <div className="inner-card">  
                                  <img className="text-center card-img-top" variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ImageUnavailable } alt={book.title} />  
                                <div className="card-desc">  
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-title">{book.volumeInfo.authors}</p> 
                                    <p className="card-title">{book.volumeInfo.averageRating}</p>   
                                    <a href= {book.volumeInfo.previewLink} className="preview btn btn-primary" >Preview</a> 

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