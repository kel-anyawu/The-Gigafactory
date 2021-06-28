import React from 'react';
import weblogo from "../images/gigafactory.png";
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div>
           <header>
            <h1 className="site-heading text-center text-faded d-none d-lg-block">
                <span className="site-heading-upper text-primary"><img src={weblogo} alt="web logo" /></span>
                <span className="site-heading-upper text-capitalize text-primary bg-secondary">The Furniture Heaven</span>
                {/* <span className="site-heading-lower">The GIGAFACTORY</span> */}
            </h1>
           < nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <Link to="index.html" className="navbar-brand text-uppercase fw-bold d-lg-none" >Start Bootstrap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><Link to="/" className="nav-link text-uppercase">Home</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/About" className="nav-link text-uppercase" >About</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/Products" className="nav-link text-uppercase" >Products</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/Store" className="nav-link text-uppercase" >Store</Link></li>

                    </ul>
                </div>
            </div>
        </nav> 
        </header>
        </div>
        
    )
}

export default Header
