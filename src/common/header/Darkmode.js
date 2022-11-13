import React from 'react';
import sun from "../../assets/images/icons/sun-01.svg"
import vector from "../../assets/images/icons/vector.svg"

const Darkmode = () => {
    const switchTheme = (e) => {
        document.querySelector('body').classList.toggle("light")
    }
    return (
        <button id="darkmode" onClick={(e) => switchTheme(e)}>
           <img className="light-icon" src={sun} alt="Sun images" />
           <img className="dark-icon" src={vector} alt="Sun images" />
        </button>
    )
}
export default Darkmode;