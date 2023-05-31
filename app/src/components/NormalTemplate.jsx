import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Weather from "./Weather";
import ProjectCardsDisplay from "./ProjectCardsDisplay"

function NormalTemplate () {
    return (
        <div>
            <Navigation/>
            <ProjectCardsDisplay />
            <br/>
            <br/>
            <br/>
            <Weather />
            <Footer/>
        </div>
    )
}

export default NormalTemplate