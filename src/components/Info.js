import React from "react";
import defaultImg from "../images/defaultImg.png";

const Info = (props) => {
    return (
        <div className="infoContainer">
            <div className="infoImage">
                {props.initialMovie.poster_path === null ? <img className="defaultImg" src={defaultImg} alt="Default infoImage" /> : 
                <img className="defaultImg" src={`https://image.tmdb.org/t/p/w500${props.initialMovie.poster_path}`} alt="Movie infoImage" />}
            </div>
            <div className="detailsContainer">
                <p className="name">Title: {props.initialMovie.title}</p>
                <p className="year">Released: {props.initialMovie.release_date}</p>
                <p className="rate">Rating: {props.initialMovie.vote_average}</p>
                <div className="movieOverview"><strong>Description:</strong> {props.initialMovie.overview}</div>
            </div>
            <div className="backLink" onClick={props.hideMovieInfo}>
                <span>Back to Search</span>
            </div>
        </div>
    )
}
export default Info