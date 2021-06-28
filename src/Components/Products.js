import React from 'react';
import image1 from "../images/sofa.jpg";
import image2 from "../images/dining.jpg";
import image3 from "../images/specialty.jpg";


const Products = () => {
    return (
        <div>
          <section className="page-section">
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Carved to Perfection</span>
                                <span className="section-heading-lower">Couches & Sofas</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={image1} alt="..." />
                    <div className="product-item-description d-flex me-auto">
                        <div className="bg-faded p-5 rounded"><p class="mb-0">We take pride in our work, and it shows. Every time you order furniture from us, we guarantee that it will be an experience worth having. Whether it's our world famous Sofa & Couches, a dining set, or something as simple as a set of speciality sourced bed furniture, you will be coming back for more.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section">
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex me-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Great materials, Beautiful display</span>
                                <span className="section-heading-lower">Dining Sets</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={image2} alt="..." />
                    <div className="product-item-description d-flex ms-auto">
                        <div className="bg-faded p-5 rounded"><p class="mb-0">Our store display features great upholstery designs, dining and kitchen sets, and even bedsets, perfect for homes. We source our ingredients from local wood shops whenever possible, alongside premium vendors for specialty materials.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-section">
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">From Around the World</span>
                                <span className="section-heading-lower">Speciality Design Sets</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={image3} alt="..." />
                    <div className="product-item-description d-flex me-auto">
                        <div className="bg-faded p-5 rounded"><p class="mb-0">Travelling the world for the very best quality furniture is something take pride in. When you visit us, you'll always find new designs from around the world, mainly from regions in Central and South America. We sell our designs in smaller to large bulk quantities. Please visit us in person for more details.</p></div>
                    </div>
                </div>
            </div>
        </section>  
        </div>
    )
}

export default Products
