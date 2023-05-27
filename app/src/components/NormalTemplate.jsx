import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Weather from "./Weather";
function NormalTemplate () {
    return (
        <div>
            <Navigation/>
            <h2>Normal template for the rest</h2>
            <Weather />
            <Footer/>
        </div>
    )
}

export default NormalTemplate