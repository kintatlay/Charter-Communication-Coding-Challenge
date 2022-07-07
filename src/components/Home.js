import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/Home.css";
import "./SearchBar";
import SearchBar from './SearchBar';
import Pagination from "../components/Pagination";

const Home = ({movieData}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    const [genres, setGenres] = useState("All");
    const [genresOptions, setGenresOptions] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 10;
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        const genresOptions = movieData?.reduce((previousValue, currentValue) => {
            var updateArr = [...previousValue];
            for (var i=0; i<currentValue.genres.length; i++) {
                if (!(previousValue.includes(currentValue.genres[i]))) {
                    updateArr.push(currentValue.genres[i]);
                }
            }
            return updateArr; 
        }, ["All"]);
        setGenresOptions(genresOptions)
    }, [])

    const handleClickPrev = () => {
        setCurrentPage(currentPage -1);
    };

    const handleClickNext = () => {
        setCurrentPage(currentPage +1);
    }

    const handleClickPage = (targetPage) => {
        setCurrentPage(targetPage);
    }

    useEffect(() => {
        var filterSearchMovie = function(searchWord) {
            return movieData.filter(movie => movie.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1);
        }
        if (genres === "All") {
            setFilteredData(filterSearchMovie(searchMovie));
        } else {
            var searchWordFilter = filterSearchMovie(searchMovie);
            setFilteredData(searchWordFilter?.filter(movie => movie.genres.includes(genres)));
        }
    }, [genres, searchMovie])

    return (
        <div className="container--list-item--flex">
                <div className="container--menu--flex">
                    <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
                    <div className="select--label--flex">
                        <label>Genres: </label>
                        <div className="select--dropdown">
                            <select value={genres} onChange={(event) => setGenres(event.target.value)}>
                                {genresOptions?.map((ele, i) => {
                                    return <option key={i} value={ele}>{ele}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            <ul>
                {filteredData.length !== 0 ?
                    filteredData?.slice((currentPage-1)*recordPerPage, (currentPage)*recordPerPage).map((ele) => {
                        const image = (process.env.PUBLIC_URL + `/assets/moviePosterImages/${ele.id}.jpeg`);
                        return <Link className="container--list-item" to={`/Movie/${ele.id}`} key={ele.id}>
                            <h2 className="container--list-title--color">{ele.title}</h2>
                            <img src={image} onError={(event) => event.target.setAttribute("src", process.env.PUBLIC_URL + `/assets/moviePosterImages/defaultImage.jpeg`)} alt="Not working" /> 
                        </Link>
                    })
                    :
                    <p className="message--fallback--text" >No results were found.</p>
                }
                <Pagination
                    totalPages={filteredData.length/recordPerPage}
                    itemsPerPage={recordPerPage}
                    handleClickPrev={handleClickPrev}
                    handleClickNext={handleClickNext}
                    totalItems={filteredData.length}
                    currentPage={currentPage}
                    handleClickPage={handleClickPage}
                />
            </ul>
        </div>
    )
};

export default Home;