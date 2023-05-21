import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
// I beleive Huntly is in charge of this page

function HomePage () {
    return(
        <div>
            <Navigation/>
            <h1>Main Page</h1>
            <Link to ="/about">Go to About</Link>
            <Link to ='/login'>Login</Link>
            <Footer/>
        </div>
    )
}

export default HomePage