import React from "react";

const SearchField = (props) => {
    return (
        <div className="search-container">
            <h1>The Favourite Movie</h1>
            <form onSubmit={props.findTheMovie} action= "">
                <label>Search</label> 
                <input type="text" name="name" placeholder="type here" onChange={props.changeTheMovie} />
            </form>
        </div>
    )
}
export default SearchField;