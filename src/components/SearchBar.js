import React, { useState } from 'react';

const SearchBar = () => {
  
    const [search, setSearch] = useState([])
    console.log(setSearch)
    return (
    <div className="searchbar">
        <form action="">
            <input type ="text" 
            search={search}
            onChange={event => setSearch(event.target.search)}/>
            <button type="submit" >Search</button>
        </form>
    </div>
  );
}

export default SearchBar;