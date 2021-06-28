import React from 'react';
import shopImage from "../images/shop.jpg";

const About = () => {
    return (
        <div>
          <section className="page-section about-heading">
            <div className="container">
                <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={shopImage} alt="shop image" />
                <div className="about-heading-content">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 mx-auto">
                            <div className="bg-faded rounded p-5">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Strong Materials, Strong Furniture</span>
                                    <span className="section-heading-lower">About Our Furniture Heaven</span>
                                </h2>
                                <p>Founded in 1987 by the GoodyBag brothers, our establishment has been serving up ingenuine furniture and upholstery sourced from artisan wood sourcers in various regions of South and Central America. We are dedicated to travelling the world, finding the best wood, and bringing back to you here in our store.</p>
                                <p class="mb-0">
                                    We guarantee that you will fall in
                                    <em>lust</em>
                                    with our decadent designs the moment you walk inside until you finish your last tour. Join us for your home renovations, new openings, or simply just to enjoy some "furniture-alone time".
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </div>
    )
}

export default About
