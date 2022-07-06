import React, { Suspense } from 'react'
import { useState, useEffect } from "react";
import {
    BrowserRouter,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import MovieDetail from "./MovieDetail";
import Loader from "./Loader";
const Home = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./Home")), 300);
    })
})

const Router = () => {
    const [movieData, setMovieData] = useState("");
    const [movieDetail, setMovieDetail] = useState("");
  
    useEffect(() => {
        fetch("https://code-challenge.spectrumtoolbox.com/api/movies", { 
            headers: {
            Authorization: "Api-Key q3MNxtfep8Gt", },
        }).then((res => res.json()))
        .then((json) => setMovieData(json));
    }, []);
    
    // useEffect(() => {
    //     fetch("https://code-challenge.spectrumtoolbox.com/api/movies/SP015622350000", { 
    //         headers: {
    //         Authorization: "Api-Key q3MNxtfep8Gt", },
    //     }).then((res => res.json()))
    //     .then((json) => setMovieDetail(json));
    // }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Suspense fallback={<Loader />}><Home movieData={movieData} /></Suspense>}/>
                <Route path="/Home/:movieId" element={<MovieDetail/>}/>
                <Route 
                    path="*"
                    element={<Navigate to="/Home" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;