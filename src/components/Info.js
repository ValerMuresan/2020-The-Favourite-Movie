import React from "react";
import defaultImg from "../images/defaultImg.png";

const Info = (props) => {
    return (
        <div className="infoContainer">
            <div tabIndex="0" aria-label="Movie image" className="infoImage">
                {props.initialMovie.poster_path === null ? <img className="defaultImg" src={defaultImg} alt="Default infoImage" /> : 
                <img className="defaultImg" src={`https://image.tmdb.org/t/p/w500${props.initialMovie.poster_path}`} alt="Movie infoImage" />}
            </div>
            <div className="detailsContainer">
                <p tabIndex="0" type="text" aria-label="Movie title" className="name">Title: {props.initialMovie.title}</p>
                <p tabIndex="0" type="text" aria-label="Released date" className="year">Released: {props.initialMovie.release_date}</p>
                <p tabIndex="0" type="text" aria-label="Rate" className="rate">Rating: {props.initialMovie.vote_average}</p>
                <div tabIndex="0" type="text" className="movieOverview"><strong>Description:</strong> {props.initialMovie.overview}</div>
            </div>
            <div tabIndex="0" aria-label="Go to main page" className="backLink" onClick={props.hideMovieInfo}>
                <span>Back to Search</span>
            </div>
        </div>
    )
}
export default Info