import React from 'react';
import PortfolioDetailsContent from "../elements/portfolio/PortfolioDetailsContent";
import PortfolioData from "../data/portfolio/PortfolioData.json";
import Layout from "../common/Layout";


const PortfolioDetails = ({match: {params: {id}}}) => {
    const portfolioId = parseInt(id, 10)
    const data = PortfolioData.filter(portfolio => portfolio.id === portfolioId);
    return (
        <>
           
                <PortfolioDetailsContent data={data[0]} />
          
        </>
    )
}

export default PortfolioDetails;
