import {useState, useRef} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import NavYA from './NavYA';

import MobileMenuYA from './MobileMenuYA';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";

const HeaderTwo = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }


    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;
    
    const checkChange = (value) => {
      setCheck(value);
    };


    return (
        <>
            <header ref={ref} className={`rn-header header-default header-left-align ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-6 col-4 position-static">
                            <div className="header-left d-flex">
                                <Logo 
                                    image={`/assets/images/logo/logo_w.png`}
                                    image2={`assets/images/logo/logo_b.png`}
                                />
                                <nav className="mainmenu-nav d-none d-lg-block">
                                    <NavYA />
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-8">
                            <div className="header-right">
                     
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                    </div>
                                </div>
                                <Darkmode />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenuYA show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderTwo;