import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ProjectCardsDisplay from "./ProjectCardsDisplay"

function NormalTemplate () {
    return (
        <div>
            <Navigation/>
            <ProjectCardsDisplay />
            <Footer/>
        </div>
    )
}

export default NormalTemplate