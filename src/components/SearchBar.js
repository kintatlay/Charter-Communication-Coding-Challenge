import React from 'react'
import "../css/SearchBar.css";

const SearchBar = ({searchMovie, setSearchMovie}) => {
    return (
        <div className="searchBar__wrapper">
        <div className="searchBar__input-data">
            <input
                required
                className="search__input-text"
                type="text" 
                value={searchMovie}
                onChange={(e) => {
                    setSearchMovie(e.target.value);
                }}
            />
            <label>Search ...</label>
        </div>
    </div>
    )
}

export default SearchBar;