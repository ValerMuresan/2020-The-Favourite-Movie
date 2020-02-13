import React, { Component } from "react";
import SearchField from "./components/SearchField";
import "./css/style.css";
import MdbKey from "./components/MdbKey";
import Movies from "./components/Movies";
import PagesList from "./components/PagesList";
import Info from "./components/Info";


class App extends Component {
	constructor() {
		super()
		this.state = {
			movies: [],
			query: "",
			totalResults: 0,
			initialPage: 1,
			initialMovie: null
		}
		this.mdbKey = MdbKey
	}
	findTheMovie = (event) => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.mdbKey}&query=${this.state.query}`)
		.then(data => data.json())
		.then(data => {
			console.log(data);
			this.setState({ movies: [...data.results], totalResults: data.total_results })
		})
		event.preventDefault()
	}
	changeTheMovie = (event) => {
		this.setState({ query: event.target.value });
	}
	newPage = (pageIndex) => {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.mdbKey}&query=${this.state.query}&page=${pageIndex}`)
		.then(data => data.json())
		.then(data => {
			console.log(data);
			this.setState({ movies: [...data.results], initialPage: pageIndex, totalResults: data.total_results })
		})
	}
	movieInfo = (id) => {
		let selectedMovie; 
		this.state.movies.forEach((movie, i) => {
			if (movie.id === id) {
				selectedMovie = movie
			}
		})
		this.setState({ initialMovie: selectedMovie })
	}
	hideMovieInfo = () => {
		this.setState({ initialMovie: null })
	}
	render() {
		let pageNums = Math.floor(this.state.totalResults / 20);
		return (
			<div>
				{ this.state.initialMovie === null ? <div><SearchField findTheMovie={this.findTheMovie} changeTheMovie={this.changeTheMovie} /> <Movies  movieInfo={this.movieInfo} movies={this.state.movies} /> </div>: <Info initialMovie={this.state.initialMovie} hideMovieInfo={this.hideMovieInfo} /> }
				{ this.state.totalResults > 20 && this.state.initialMovie === null ? <PagesList pageNums={pageNums} newPage={this.newPage} initialPage={this.state.initialPage} /> : ""}
		   </div>
	   );
	}
}
export default App;
