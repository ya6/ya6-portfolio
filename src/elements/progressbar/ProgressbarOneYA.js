import React from 'react';
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";

const progressData = [
    {
      id: 1,
      title: "HTML, CSS",
      percantage: 90,
      progressColor: "#006d77",
    },
    {
      id: 2,
      title: "JavaScript",
      percantage: 85,
      progressColor: "#ffbe0b",
    },
    {
      id: 3,
      title: "TypeScript",
      percantage: 40,
      progressColor: "#059DFF",
    },
    {
      id: 4,
      title: "React",
      percantage: 70,
      progressColor: "#E33FA1",
    },
    {
      id: 5,
      title: "Redux",
      percantage: 30,
      progressColor: "#6549D5",
    },
    {
      id: 6,
      title: "NodeJS",
      percantage: 15,
      progressColor: "#9b2226",
    },
    {
      id: 7,
      title: "Webpack",
      percantage: 50,
      progressColor: "#4361ee",
    },
    {
      id: 8,
      title: "PHP",
      percantage: 50,
      progressColor: "#4cc9f0",
    },
    {
      id: 9,
      title: "Laravel",
      percantage: 50,
      progressColor: "#f72585",
    },
    {
      id: 10,
      title: "GIT",
      percantage: 60,
      progressColor: "#bc4749",
    },
    {
      id: 11,
      title: "Inkscape, CorelDraw, Photoshop",
      percantage: 65,
      progressColor: "#b5838d",
    },
];

const ProgressbarOne = () => {
    return (
        <>
            {progressData.map((progress) => (
            <TrackVisibility
                once
                key={progress.id}
                className="single-progress"
            >
                <Skill progress={progress} /> 
            </TrackVisibility>
            ))} 
        </>
    )
}


export default ProgressbarOne;
