import React from "react";


import AboutFive from "../../elements/about/AboutFive";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import PortfolioOneYA from "../../elements/portfolio/PortfolioOneYA";


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
