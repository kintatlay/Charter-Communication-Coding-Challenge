import React from 'react';
import { Link } from "react-router-dom";
import "./css/Home.css";

const Home = ({movieData}) => {
    return (
        <ul>
            {movieData?.data?.map((ele) => {
                const image = (process.env.PUBLIC_URL + `/assets/moviePosterImages/${ele.id}.jpeg`) === null ? (process.env.PUBLIC_URL + `/assets/moviePosterImages/defaultImage.jpeg`) : (process.env.PUBLIC_URL + `/assets/moviePosterImages/${ele.id}.jpeg`);
                return <Link className="container--list-item" to={`/Movie/${ele.id}`} key={ele.id}>
                    <h2 className="container--list-title--color">{ele.title}</h2>
                    <img src={image} onError={(event) => event.target.setAttribute("src", process.env.PUBLIC_URL + `/assets/moviePosterImages/defaultImage.jpeg`)} alt="Not working" /> 
                </Link>
            })}
        </ul>
    )
};

export default Home;