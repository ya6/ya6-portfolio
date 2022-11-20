import React from "react";
import PortfolioDetailsContentYA from "../../elements/portfolio/PortfolioDetailsContentYA";
import PortfolioData from "../../data/portfolio/PortfolioData.json";
// import Layout from "../common/Layout";
import { useParams } from "react-router-dom";


const PortfolioDetails = () => {
  const {id} = useParams(id);
  console.log("id", id);
  console.log(PortfolioData);
  const data = PortfolioData.filter((portfolio) => portfolio.id === Number(id));
console.log(data);
  return (
    <>
      <PortfolioDetailsContentYA data={data[0]} />
    </>
  );
};

export default PortfolioDetails;
