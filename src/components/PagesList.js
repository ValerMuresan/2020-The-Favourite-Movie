import React from "react";

const PagesList = (props) => {

    let pagesListLinks = [];

    for (let i = 1; i <= props.pageNums + 1; i++) {
        let checkedPage = props.initialPage === i ? "checkedPage" : "";
        pagesListLinks.push(<li className={checkedPage} key={i} onClick={() => props.newPage(i)}><a href="#PageNumber"> {i}</a></li>)
    }
    return (
        <div className="pages-container">
                <ul tabIndex="0" aria-label="List of pages" className="pagesList">
                    { props.initialPage > 1 ? <li tabIndex="0" className="" onClick={() => props.newPage(props.initialPage - 1)}><a href="#PreviousPage">Previous</a></li>:""}
                     {pagesListLinks}
                    { props.initialPage < props.pageNums + 1 ? <li tabIndex="0" className="" onClick={() => props.newPage(props.initialPage + 1)}><a href="#NewPage">Next</a></li>:""} 
                </ul>
        </div>
    )
}
export default PagesList;