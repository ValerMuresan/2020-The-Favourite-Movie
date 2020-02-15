import React from "react";
import details from "../images/details.png";
import defaultImg from "../images/defaultImg.png";

const Movie = (props) => {
	/*
	The defaultImg.png was downloaded from here 
	https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png
	*/
	let movieImg = "";
	let cover = {
		backgroundImage: "url(" + movieImg + ")"
	}
	return (
			<div className="movie-container"
			     tabIndex="0"
				 aria-label="Movie container">
				{ props.movieImg === null ? <img className="defaultImg" tabIndex="0" aria-label="Movie without poster" src={defaultImg} alt="Default poster" style={cover} /> :
				<img className="movieImg" tabIndex="0" aria-label="Movie poster" src={`https://image.tmdb.org/t/p/w500${props.movieImg}`} alt="Movie poster" style={cover} /> }
				{props.movieRating === 0 ? <div tabIndex="0" aria-label="Movie not rated" className="movieRating">Not rated</div> :
					<div tabIndex="0" aria-label="Movie rate" className="movieRating">Rating {props.movieRating} </div>}
				<div tabIndex="0" aria-label="Released year" className="movieYear">{props.movieYear}</div>
				<p><a href="#Details" onClick={() => props.movieInfo(props.movieId)}><img tabIndex="0" aria-label="Info button" className="detailsIcon" src={details} alt="Details icon" /></a></p>
			</div>
    );
}
export default Movie;