import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieDetail.css";

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
        <div className="movie--detail--view">
            {/* {console.log(movieDetail)} */}
            <section>
                <img 
                    className="image--detail--size"
                    src={process.env.PUBLIC_URL + `/assets/movieHeroImages/${movieId}.jpeg`} 
                    onError={(event) => event.target.setAttribute("src", process.env.PUBLIC_URL + `/assets/movieHeroImages/defaultImage.jpeg`)}
                    alt="Not working" 
                />
                <h2 className="movie--detail-title--color">{movieDetail?.title}</h2>
                <p className="movie--detail--color"><span className="movie--detail--bold">Genres: </span>{movieDetail?.genres?.reduce((previousValue, currentValue) => {
                    return [currentValue, ...previousValue];
                },[]).join(", ")}</p>
                <p className="movie--detail--color"><span className="movie--detail--bold">Release Year: </span>{movieDetail?.releaseDate}</p>
                <p className="movie--detail--color"><span className="movie--detail--bold">Top Cast: </span>{movieDetail?.topCast?.reduce((previousValue, currentValue) => {
                    return [currentValue.name, ...previousValue];
                },[]).join(", ")}</p>
            </section>
            <p className="movie--detail--color"><span className="movie--detail--bold">Description: </span>{movieDetail?.description}</p>
        </div>
    )
}

export default MovieDetail;