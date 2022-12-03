import React from 'react'

import FooterFour from '../../common/footer/FooterFour';
import BrandThree from '../../elements/brand/BrandThree';
import AboutFour from '../../elements/about/AboutFourYA';
import ServiceOneYA from "../../elements/service/ServiceOneYA";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../../elements/counterup/CounterUpFourYA";
import TeamFour from "../../elements/team/TeamFourYA";
import TimelineTwo from "../../elements/timeline/TimelineTwo";
import Separator from "../../elements/separator/Separator";

const AboutUs = () => {
    return (
        <>
         
            <main className="page-wrapper">
             
               



               




               
                <Separator />

               

             


                <AboutFour image="./images/about/contact-image.jpg" />
                
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area pb--100">
                    <div className="container mt_dec--30">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Corporate Team."
                                    title = "Corporate Team Member."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}






             
            </main>
        </>
    )
}

export default AboutUs;
