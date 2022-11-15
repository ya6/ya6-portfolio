import React from 'react';
import {AnimationOnScroll}  from "react-animation-on-scroll";


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded}) => {
    return (
        <div className={`section-title ${textAlign}`}>
             <AnimationOnScroll  
                    animateIn="animate__bounceIn">
                <h4 className={`subtitle ${radiusRounded}`}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: subtitle}}></span></h4>
            </AnimationOnScroll>
            
            <AnimationOnScroll  
                    animateIn="animate__bounceIn">
                <h2 className="title w-600 mb--20" dangerouslySetInnerHTML={{__html: title}}></h2>
            </AnimationOnScroll>

            <AnimationOnScroll  
                    animateIn="animate__bounceIn">
                <p className="description b1" dangerouslySetInnerHTML={{__html: description}}></p>
            </AnimationOnScroll>
        </div>
    )
}
export default SectionTitle;