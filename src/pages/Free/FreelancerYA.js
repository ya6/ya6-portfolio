import React from 'react'


import AboutSixYA from '../../elements/about/AboutSixYA';

import ServiceFiveYA from "../../elements/service/ServiceFiveYA";
import SectionTitleTwo from "../../elements/sectionTitle/SectionTitleTwo";
import PricingOne from "../../elements/pricing/PricingOne";
import BrandThree from "../../elements/brand/BrandThree";
import TimelineTwoYA from "../../elements/timeline/TimelineTwoYA";
import TestimonialOne from "../../elements/testimonial/TestimonialOne";
import ContactForm from "../../elements/contact/ContactForm";

import hero_back from "../../assets/images/herro_back.jpg"
import contact_image from "../../assets/images/contact_image.jpg"



const Freelancer = () => {
    return (
        <>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 variation-3 height-850 bg_image bg_image_fixed theme-shape" style={{backgroundImage: `url(${hero_back})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="inner text-start">
                                    <h1 className="title">Hi there, I am‍ <br /><span className="theme-gradient">Aleksander</span></h1>
                                    <p className="description">I am an engineer and developer striving to create products that people like and businesses value.</p>
                                    <div className="button-group mt--40 mt_sm--20">
                                        {/* <Link className="btn-default btn-border" to="#">Click For Hire Me</Link>
                                        <Link className="btn-default btn-icon" to="#">About Me <i className="icon"><FiArrowRight /></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

                <AboutSixYA />


                <div className="rwt-timeline-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <TimelineTwoYA classVar="dark-line"  />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--10">
                                <SectionTitleTwo
                                    Title= "My Recent Works"
                                    textAlign= "text-start"
                                />
                            </div>
                        </div>
                        <ServiceFiveYA 
                            serviceStyle = "gallery-style"
                            textAlign = "text-start"
                        />
                    </div>
                </div>


                


                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}



                <div className="contact-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitleTwo
                                    Title= "Contact With Me"
                                    textAlign= "text-start"
                                />
                            </div>
                        </div>
                        <div id="contact" className="row row--30 mt--40">
                            <div className="col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30">
                                <ContactForm formStyle="contact-form-1" />
                            </div>
                            <div className="col-lg-6 order-1 oder-lg-2">
                                <div className="thumbnail">
                                    <img className="radius w-100" src={contact_image} alt="Corporate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
        </>
    )
}
export default Freelancer;