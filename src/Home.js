import React from 'react'

const Home = ({movieData}) => {
    return (
        <ul>
            {movieData?.data?.map((ele) => {
                return <li key={ele.id}>
                    <img src={process.env.PUBLIC_URL + `/assets/moviePosterImages/${ele.id}.jpeg`} alt="Not working" /> 
                    {ele.title}
                </li>
            })}
        </ul>
    )
};

export default Home;