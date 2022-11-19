import React from 'react';
import {Link} from "react-router-dom";
import { route } from '../../config/config';

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to={route.HOME}>Home</Link>
                
            </li>
            
            <li><Link to="/about-us">About</Link></li>

          

          

            <li className="has-droupdown"><Link to={route.PORTFOLIO}>Portfolio</Link>
              
            </li>

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
