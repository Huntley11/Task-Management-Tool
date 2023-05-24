import React from "react";
import Navigation from "./Navigation";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";

function GetStarted() {
    return (
        <div className="body">
            <Navigation />
            <h2>Getting Started</h2>
            <div className="checkoff">
                <img id="checked" src="https://static.vecteezy.com/system/resources/previews/006/549/765/original/to-do-list-hand-drawn-doodle-icon-free-vector.jpg" alt="app with items checked off" />
                <div>
                    <h3>Easy as 1 2 3</h3>
                    <p>
                        To all the parents struggling with keeping track where the kids are on their tasks.
                        This app helps everyone on where their at with their tasks. Be it homework, cleaning, or maitenance.
                        A helpful reminder to you and everyone what todays or weeks goals are.
                    </p>
                </div>
            </div>
            <div className="checkoff">
                <div>
                    <h3>Home Repairs</h3>
                    <p>
                        Dont think this is only for kids. Parents need help to remembering what needs fixing around the house.
                        This app helps to adults on major events to. Need to fix a toilet or the roof. This app helps with ...
                        Also this app can help to plan events such as parties.
                    </p>
                </div>
                <img id="roof" src="./roof_repair.jpg" alt="Roof repair" />

            </div>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://placehold.co/600x150"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/600/150"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/seed/picsum/600/150"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2>Upcoming Features</h2>
            <div className="checkoff">
                <img id="deal" src="https://img.freepik.com/premium-vector/little-kid-hand-shake-with-friend_97632-6565.jpg?w=2000" alt="kids deal" />
                <div>
                    <h3>IOU / Compromise</h3>
                    <p>
                        Kids have power too. Don't think that parents can only be the boss.
                        Give your child a a get out of jail free card. This feature allows kids to pass the task back to the parents.
                        IOU simply has kids approve to switch responsibilites from one another.
                    </p>
                </div>
            </div>

            
        </div>
    )
};

export default GetStarted