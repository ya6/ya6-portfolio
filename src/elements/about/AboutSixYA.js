import React from 'react';
import {Link} from "react-router-dom";
import ProgressbarOneYA from "../progressbar/ProgressbarOneYA";
import SectionTitleTwo from "../sectionTitle/SectionTitleTwo";
import projects_promo from "../../assets/images/projects_promo.jpg"

const AboutSix = () => {
    return (
        <div className="about-style-6 rn-section-gap">
            <div className="plr_md--30 plr_sm--30">
                <div className="wrapper theme-shape">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="thumbnail text-start text-lg-center">
                                <img src={projects_promo} alt="projects" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-12 mt_sm--30">
                            <div className="inner">
                                <span className="theme-gradient subtitle">I have completed 10+ project.</span>
                                <h4 className="color-white maintitle">Have More Projects Complete in My Carreer Life.</h4>
                                <div className="read-more-btn">
                                    <Link className="btn-default btn-border" to="/portfolio">View More Projects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row--15">
                    <div className="col-lg-12">
                        <div className="rbt-progress-style-1 mt--60">
                            <SectionTitleTwo
                                Title= "My Working Experience"
                                textAlign= "text-start mb--40"
                            />
                            <ProgressbarOneYA />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSix
