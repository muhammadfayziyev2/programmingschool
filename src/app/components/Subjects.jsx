import React from "react";

import {
    SiJavascript,
    SiReact,
    SiRedux,
    SiNodedotjs,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiSass,
    SiGit
} from "react-icons/si";

const techIcons = [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "React", icon: <SiReact color="#61dafb" /> },
    { name: "Redux", icon: <SiRedux color="#764abc" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "TypeScript", icon: <SiTypescript color="#007acc" /> },
    { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572b6" /> },
    { name: "SASS", icon: <SiSass color="#cc6699" /> },
    { name: "Git", icon: <SiGit color="#f05032" /> },
];

const repeatedIcons = [...techIcons, ...techIcons, ...techIcons, ...techIcons];

const TechSlider = () => {
    return (
        <div className="slider-container">
            <div className="slider-track">
                {repeatedIcons.map((tech, index) => (
                    <div className="slide" key={index}>
                        {tech.icon}
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechSlider;
