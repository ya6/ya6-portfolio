import {useState, useRef} from "react";
// import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
// import Nav from './Nav';
// import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import logo_w from "../../assets/images/logo/logo_w.png"
import logo_b from "../../assets/images/logo/logo_b.png"

const HeaderTwo = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }


    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
  
    
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
                                    image={logo_w}
                                    image2={logo_b}
                                />
                              
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-8">
                            <div className="header-right">
                     
                                <Darkmode />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  /> */}
        </>
    )
}
export default HeaderTwo;