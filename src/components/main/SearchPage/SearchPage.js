import React, {useState} from 'react'
import classes from "./SearchPage.module.css";
import ReviewPost from "../Review/ReviewPost";

function SearchPage(props) {
    

    return (
        <section>
            <ReviewPost data={props.data}/>
        </section>
    )
}

export default SearchPage
