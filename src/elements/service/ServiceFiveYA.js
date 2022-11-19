import React from 'react';
import {Link} from "react-router-dom";
import {AnimationOnScroll}  from "react-animation-on-scroll";
import galery_image_01 from "../../assets/images/galery-image-01.png"
import galery_image_02 from "../../assets/images/galery-image-02.png"
import galery_image_03 from "../../assets/images/galery-image-03.png"

const ServiceList = [
    {
        image: galery_image_01,
        title: 'Awarded Design',
        description: 'There are many variations variats.'
    },
    {
        image: galery_image_02,
        title: 'Design & Creative',
        description: 'Passages there are many variatin.'
    },
    {
        image: galery_image_03,
        title: 'App Development',
        description: 'Variations There are many of pass.'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <AnimationOnScroll  
                    animateIn="animate__bounceIn">
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll >
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;