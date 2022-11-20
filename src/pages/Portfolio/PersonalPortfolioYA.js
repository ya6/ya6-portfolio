import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import FooterTwo from "../../common/footer/FooterTwo";
// import Copyright from '../common/footer/Copyright';
import AboutFive from "../../elements/about/AboutFive";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import PortfolioOneYA from "../../elements/portfolio/PortfolioOneYA";
import TestimonialOne from "../../elements/testimonial/TestimonialOne";
import Separator from "../../elements/separator/Separator";
import ProgressbarTwo from "../../elements/progressbar/ProgressbarTwo";
import BrandFour from "../../elements/brand/BrandFour";
import BlogList from "../../components/blog/itemProp/BlogList";
import BlogClassicData from "../../data/blog/BlogList.json";
// var BlogListData = BlogClassicData.slice(0, 3);

const PersonalPortfolio = () => {
  return (
    <>
      {/* <AboutFive /> */}

      {/* Start Portfolio Area  */}
      <div className="rwt-portfolio-area rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Project"
                title="Check My Recent Works!"
                description="Projects on various subjects"
              />
            </div>
          </div>
          <PortfolioOneYA Column="col-lg-4 col-md-6 col-12 mt--30 portfolio" />
        </div>
      </div>
      {/* End Portfolio Area  */}
    </>
  );
};
export default PersonalPortfolio;
