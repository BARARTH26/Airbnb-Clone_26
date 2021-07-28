import React,{useState,useEffect} from 'react';
import "./Banner.css";
import {Button} from "@material-ui/core";
import Search from "./Search";
//install the npm i date-fns....!!!!

function Banner() {

    const[showSearch,setShowSearch] =  useState(false); 

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button varient="outlined" className="banner__searchButton" onClick={()=> setShowSearch(!showSearch) } >{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>plan a differnet kind of getaway to uncover the hidden gems near you.</h5>
                <Button varient="outlined">Explore NearBy</Button>
            </div>
        </div>
    )
}

export default Banner
