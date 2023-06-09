import React from "react";
import Navigation from "./Navigation";

function About () {
    return(
    <section className="about">
        <Navigation/>
        <div className="main">
            
             <img src="./group.jpg" alt="Group Members"/> {/* Needs to be fixed to show image */}
            <div className="about-text">
                <h1>About Us</h1>
                <h5>Developer & Designer</h5>
                <p>George Leyva, Jevan Godoy, Huntley Castner, Fadi Faiyad came togther 
                for the first time and started to work on a class project. There was no other team 
                like them, working together to overcome any obstcale.</p>

                <p>Our team stands apart from the rest, fueled by a shared passion for excellence and an unwavering 
                commitment to overcome any obstacle that comes our way. From the moment 
                we came together, it was evident that there was no team quite like ours. 
                The synergy we have formed is unparalleled, 
                and it fuels our drive for success.</p>

            </div>
        </div>
    </section>
    )
}

export default About