import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
    return (
    <div className="movies-container">
        {
            props.movies.map((movie, i) => {
                return (
                <Movie key={i} movieInfo={props.movieInfo} movieImg={movie.poster_path} movieRating={movie.vote_average} movieTitle={movie.title} 
                movieYear={movie.release_date} movieOverview={movie.overview} movieId={movie.id} movieDetails={movie.details}/>
                )
            })
        }
    </div>
    )
}
export default Movies;