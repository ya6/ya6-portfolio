import React from 'react';
import {AnimationOnScroll}  from "react-animation-on-scroll";


const TimelineData = [
    {
        id: "1",
        title: "Idea",
        // description: "Present all available features in Essentials.",
    },
    {
        id: "2",
        title: "Prototype",
        // description: "All Feature available features in Essentials.",
    },
    {
        id: "3",
        title: "Design",
        // description: "Popular Feature available features in Essentials.",
    },
    {
        id: "4",
        title: "Develop",
        // description: "Latest Feature available features in Essentials.",
    },
    {
        id: "5",
        title: "Testing",
        // description: "Latest Feature available features in Essentials.",
    },
    {
        id: "6",
        title: "Launch",
        // description: "Latest Feature available features in Essentials.",
    },
    {
        id: "7",
        title: "Support",
        // description: "Latest Feature available features in Essentials.",
    },
    {
        id: "8",
        title: "Evolution",
        // description: "Latest Feature available features in Essentials.",
    },
  
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <AnimationOnScroll  
                           animateIn="animate__bounceIn">
                                <h6 className="title">{data.title}</h6>
                            </AnimationOnScroll >
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <AnimationOnScroll  
                           animateIn="animate__bounceIn">
                                <p className="description">{data.description}</p>
                            </AnimationOnScroll >
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;