import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Weather from "./cssFiles/Weather";
import ProjectCardsDisplay from "./ProjectCardsDisplay"

function NormalTemplate () {
    return (
        <div>
            <Navigation/>
            <ProjectCardsDisplay />
            <Weather />
            <Footer/>
        </div>
    )
}

export default NormalTemplate