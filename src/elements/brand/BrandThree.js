import React from 'react';
import html from '../../assets/images/logo/html.png'
import css from '../../assets/images/logo/css.png'
import js from '../../assets/images/logo/js.png'
import ts from '../../assets/images/logo/ts.png'
import node from '../../assets/images/logo/node.png'
import react from '../../assets/images/logo/react.png'
import react_router from '../../assets/images/logo/react_router.png'
import webpack from '../../assets/images/logo/webpack.png'
import bootstrap from '../../assets/images/logo/bootstrap.png'
import tailwind from '../../assets/images/logo/tailwind.png'
import mui from '../../assets/images/logo/mui.png'

const BrandList = [
    {
        image: html
    },
    {
        image: css
    },
    {
        image: js
    },
    {
        image: ts
    },
    {
        image: node
    },
    {
        image: react
    },
    {
        image: react_router
    },
    {
        image: webpack
    },
    {
        image: bootstrap
    },
  
    {
        image: tailwind
    },
    {
        image: mui
    },
  
]

const BrandThree = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href="#"><img src={`${data.image}`} alt="Brand Image" width={100} /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandThree;
