import React, { useEffect, useState } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import axios from 'axios'; 


function Books() {
    const apiKey = "FPABLBLCbRTbzpoL1gtI3acHlZTQn4Ca"
    // const [data, setData] = useState({books: []}) 
    // const axios = require('axios')
    // useEffect(() => {
    //     try {
    //         const fetchData= async() =>{
    //       const response = axios.get('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + apiKey, {    method: 'get',  });
    //       setData(response.data.books)
    //       console.log(response.data.books);
    //     }
    //     } catch (error) {
    //       console.error(error);
    //     }
    //     fetchData();},[]
    //     )
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=FPABLBLCbRTbzpoL1gtI3acHlZTQn4Ca");
        const json = await res.json();
        setData(json.results);
      };
      fetchData();
    }, [setData]);
  
    return (
      <ul>
        {data.map(item => (
          <li key={item.ObjectId}>
            <a href={item.amazon_product_url}><p>{item.list_name}</p></a>
          </li>
        ))}
      </ul>
    );
  
 
 
    // const [books,setBooks] = useState([])

    // useEffect(() => {
    // const url = "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" + apiKey
    //     console.log(url)
    // const fetchData = async() => {
    // const response = await fetch(url);
    // const json = await response.json();
    //         setBooks(json.book_details)

    // };

    // fetchData();
    // },[setBooks]);



    // return (
    // <div>
    //     <SearchBar/>
    //     <ul>
    //   {books.map(item => (
    //     <li key={item.ObjectId}>
    //       <a href={item.amazon_product_url}>{item.title}</a>
    //     </li>
    //   ))}
    // </ul>
    // </div>
    // );
}

export default Books;
