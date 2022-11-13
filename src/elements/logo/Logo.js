import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <Link to={"/home"}>
                <img className="logo-light" src={image} alt="Logo" />
                <img className="logo-dark" src={image2} alt="Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
