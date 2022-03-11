// currentlt not use this file
import { useState, useEffect } from "react";

const MovieInfo = (props) => {
    const API_KEY = "d00f2bb6";
    const { selectMovie } = props;
    const [movieInfo, setMovieInfo] = useState();
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${selectMovie}&apikey=${API_KEY}`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }

                return res.json();
            })
            .then((response) => {
                setMovieInfo(response)
                console.log(response);
                }
                )
            .catch(err => {
                console.log(err.message);
            }
            )
    },[selectMovie])
	return (
        <div>
            <img src={movieInfo.Poster} alt=''></img>
            <h3>Movie Title: {movieInfo.Title}</h3>
            <p>Year: {movieInfo.Year}</p>
            <p>Writer: {movieInfo.Writer}</p>
            <p>Actors: {movieInfo.Actors}</p>
            <p>Plot: {movieInfo.Plot}</p>
        </div>
	);
};

export default MovieInfo;

// currentlt not use this file
