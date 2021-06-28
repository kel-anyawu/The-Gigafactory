import React from 'react';
import image1 from "../images/section1.jpg";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
           <section className="page-section clearfix">
            <div className="container">
                <div className="intro">
                    <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={image1} alt="..." />
                    <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Fantastic Designs</span>
                            <span className="section-heading-lower">Worth Displaying</span>
                        </h2>
                        <p className="mb-3">With more than 70 years of experience in joinery and carpentry, the Gigafactory have qualified joiners ready to work at your property anywhere in Nigeria. Whether you are looking for joinery, carpentry, conservatories or windows you are sure to have all of your needs met by our professional and qualified team. Suiting your home and lifestyle, we aim to create home improvements one step at a time.</p>
                        <div className="intro-button mx-auto"><Link to="/Store" className="btn btn-primary btn-xl">Visit Us Today!</Link></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="cta-inner bg-faded text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Our Promise</span>
                                <span className="section-heading-lower">To You</span>
                            </h2>
                            <p className="mb-0">When you walk into our store to choose designs for your home, office or space, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality materials. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </div>
    )
}

export default Home;
