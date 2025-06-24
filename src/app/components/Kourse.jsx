'use client'

import React from 'react'

import {
    FaLaptopCode,
    FaLanguage,
    FaBalanceScale,
    FaCalculator,
    FaChartLine,
    FaSuperscript,
    FaGlasses
} from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";

const courses = [
    { title: "Kompyuter savodhonligi", desc: "Dive into our dynamic Community Hub", color: "#e74c3c", icon: <FaLaptopCode /> },
    { title: "Grafik dizayn", desc: "Dive into our dynamic Community Hub", color: "#2980b9", icon: <SiAltiumdesigner /> },
    { title: "Ingliz tili", desc: "Dive into our dynamic Community Hub", color: "#f39c12", icon: <RiEnglishInput /> },
    { title: "Rus tili", desc: "Dive into our dynamic Community Hub", color: "#e67e22", icon: <MdLanguage /> },
    { title: "Nemis tili", desc: "Dive into our dynamic Community Hub", color: "#3498db", icon: <MdLanguage /> },
    { title: "Front-end", desc: "Dive into our dynamic Community Hub", color: "#2ecc71", icon: <FaComputer /> },
    { title: "Back-end", desc: "Dive into our dynamic Community Hub", color: "#c0392b", icon: <FaComputer /> },
  ];

const Kourse = () => {
    return (
        <div className='kurslar'>
            <div className='kurs2'>
                <h1 className='name-kurses'>Kurslar</h1>
            </div>
            <div className="course-grid">
                {courses.map((course, index) => (
                    <div className="course-card" key={index} style={{ backgroundColor: course.color }}>
                        <div className="course-icon">{course.icon}</div>
                        <div className="course-info">
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Kourse