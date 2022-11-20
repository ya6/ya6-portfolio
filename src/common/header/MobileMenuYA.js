import React from 'react';
import Logo from "../../elements/logo/Logo";
import NavYA from './NavYA';
import { FiX } from "react-icons/fi";

const MobileMenu = ({show, onClose}) => {
    var elements = document.querySelectorAll('.popup-mobile-menu .has-droupdown > a');
    var elementsTwo = document.querySelectorAll('.popup-mobile-menu .with-megamenu > a');
    for(var i in elements) {
        if(elements.hasOwnProperty(i)) {
            elements[i].onclick = function() {
                this.parentElement.querySelector('.submenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }

    for(var i in elementsTwo) {
        if(elementsTwo.hasOwnProperty(i)) {
            elementsTwo[i].onclick = function() {
                this.parentElement.querySelector('.rn-megamenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }
    return (
        <div className={`popup-mobile-menu ${show ? "active": ""}`}>
            <div className="inner">
                <div className="header-top">
                    <Logo 
                        image={`/assets/images/logo/logo_w.png`}
                        image2={`/assets/images/logo/logo_b.png`}
                    />
                    <div className="close-menu">
                        <span className="close-button" onClick={onClose}><FiX /></span>
                    </div>
                </div>
                <NavYA />
            </div>
        </div>
    )
}
export default MobileMenu;