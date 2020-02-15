import React from "react";

const SearchField = (props) => {
    return (
        <div className="search-container">
            <h1 tabIndex="0">The Favourite Movie</h1>
            <form onSubmit={props.findTheMovie} action= "">
                <label tabIndex="0" 
                       type="text" 
                       aria-label="labelText">Search</label> 
                <input tabIndex="0" 
                       type="text" 
                       name="name" 
                       placeholder="type here" 
                       aria-label="textInput" 
                       onChange={props.changeTheMovie} />
            </form>
        </div>
    )
}
export default SearchField;