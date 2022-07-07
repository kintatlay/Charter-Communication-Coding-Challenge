import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState("");
    let { movieId } = useParams();

    useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/movies/${movieId}`, { 
        headers: {
        Authorization: "Api-Key q3MNxtfep8Gt", },
    }).then((res => res.json()))
    .then((json) => setMovieDetail(json.data));
}, []);

    return (
        <div>
            {console.log(movieDetail)}
            <p>{movieDetail?.title}</p>
            <img src={process.env.PUBLIC_URL + `/assets/movieHeroImages/${movieId}.jpeg`} alt="Not working" /> 
            <p>{movieDetail?.description}</p>
            <p>{movieDetail?.releaseDate}</p>
            <p>{movieDetail?.topCast?.reduce((previousValue, currentValue) => {
                return [currentValue.name, ...previousValue];
            },[]).join(", ")}</p>
        </div>
    )
}

export default MovieDetail;