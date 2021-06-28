import React from 'react';
import shopImage from "../images/shop.jpg";


const Store = () => {
    return (
        <div>
            <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="cta-inner bg-faded text-center rounded">
                            <h2 className="section-heading mb-5">
                                <span className="section-heading-upper">Come On In</span>
                                <span className="section-heading-lower">We're Open</span>
                            </h2>
                            <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Sunday
                                    <span className="ms-auto">Closed</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Monday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Tuesday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Wednesday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Thursday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Friday
                                    <span className="ms-auto">7:00 AM to 8:00 PM</span>
                                </li>
                                <li className="list-unstyled-item list-hours-item d-flex">
                                    Saturday
                                    <span className="ms-auto">9:00 AM to 5:00 PM</span>
                                </li>
                            </ul>
                            <p className="address mb-5">
                                <em>
                                    <strong>1116 Orchard Street,</strong>
                                    <br />
                                    Kubwa, Abuja-Nigeria.
                                </em>
                            </p>
                            <p className="mb-0">
                                <small><em>Call Anytime</em></small>
                                <br />
                                (0803) 585-8468
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

export default Store
