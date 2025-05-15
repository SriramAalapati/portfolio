import { useState, useEffect, useRef } from "react";
import { motion,useScroll,useTransform} from "framer-motion";
import { div, p } from "framer-motion/client";
import '../styles/skills.css'
import aws from '../assets/AWS.png';
import azure from '../assets/Azure.png'
import ts from '../assets/TypeScript.png';
import js from '../assets/JavaScript.png';
import linux from '../assets/Linux.png';
import java from '../assets/java.png';
import mongodb from '../assets/MongoDB.png';
import numpy from '../assets/NumPy.png';
import pandas from '../assets/Pandas.png';
import powershell from '../assets/Powershell.png';
import css from '../assets/purple-css-logo.png';
import html from '../assets/HTML5.png';
import pycharm from '../assets/PyCharm.png';
import python from '../assets/Python.png';
import react from '../assets/React.png';
import scikit from '../assets/scikit-learn.png';
import selenium from '../assets/Selenium.png';
import tailwindcss from '../assets/Tailwind CSS.png';
import tf from '../assets/TensorFlow.png';
import vscode from '../assets/Visual Studio Code (VS Code).png';
import git from '../assets/Git.png';
import sql from '../assets/Azure SQL Database.png';
import django from '../assets/Django.png';
import node from '../assets/Node.js.png';
import c from '../assets/C.png';
import matplotlib from '../assets/Matplotlib.png';
export default function Skills() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.5 0.8"],

    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const animationStyles = { scale: scaleProgress, opacity: opacityProgress }
    return <>
        <motion.div className="scroll-mt-12 section-container min-h-[calc(100vh-3rem)] border-2 " id="skills">
            <motion.h2 ref={ref} style={animationStyles} id='education' className='text-xl lg:text-3xl font-bold underline text-center mb-5'>My Tech Stack</motion.h2>
            <motion.p ref={ref} style={{}} className="lg:text-lg md:text-md text-sm pl-2">I use different languages and framerworks based on type and complexity of the project. Here are the list which I use in frequently.</motion.p>
            
            <SkillsShow skill={Frontendskills}/>
            <SkillsShow skill={Backendskills}/>
            <SkillsShow skill={Programmingskills}/>
            <SkillsShow skill={Otherskills}/>
            <SkillsShow skill={Softwareskills}/>
            
        </motion.div>
    </>
}
const Frontendskills = {

    name: 'Frontend Web Development',
    maskedtext:'Documentation reading, Youtube learning, DevTools debugging, Inspecting others code, understanding how and why things work',
    tech: [
        {
            name: 'React',
            image: react
        },
        {
            name: "Tailwind CSS",
            image: tailwindcss
        },
        {
            name: "JavaScript",
            image: js
        },
        {
            name: "HTML5",
            image: html
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "TypeScript",
            image: ts
        }
    ]
}

const Backendskills = {

    name: 'Backend Web Development',
    maskedtext:'Fixing code anyway to get output.',
    tech: [
        {
            name: 'Django',
            image: django
        },
        {
            name: "Node.js",
            image: node
        },
        {
            name: "Mongo DB",
            image: mongodb
        },
        {
            name: "SQL",
            image: sql
        },
     
    ]
}

const Programmingskills = {

    name: 'Programming Languages',
    maskedtext:'Proficient in Logic building and coding,debugging.',
    tech: [
        {
            name: 'Python',
            image: python
        },
        {
            name: "Java",
            image: java
        },
        {
            name: "C",
            image: c
        },
       
     
    ]
}


const Otherskills = {

    name: 'Other Skills',
    maskedtext:'Mostly python libraries for machine learning and data science',
    tech: [
        {
            name: 'AWS',
            image: aws
        },
        {
            name: "Azure",
            image: azure
        },
        {
            name:"Linux",
            image:linux
        },
        {
            name:"Git",
            image:git
        },
        {
            name: "Numpy",
            image: numpy
        },
        
        {
            name: "Pandas",
            image: pandas
        },
        {
            name: "Selenium",
            image: selenium
        },
        {
            name: "Tensorflow",
            image: tf
        },
        {
            name:"Powershell",
            image:powershell
        },
        {
            name:"Scikit-Learn",
            image:scikit
        },
        {
            name:"Matplotlib",
            image:matplotlib
        }
    ]
}


const Softwareskills = {

    name: "IDE's I use for coding",
    maskedtext:'Honestly, increases productivity and lightweight.',
    tech: [
        {
            name: 'VS Code',
            image: vscode
        },
        {
            name: "PyCharm",
            image: pycharm
        },
        
     
    ]
}


const FrontWebDevelopment = ()=>{
    return <div className=" flex flex-col w-full">
        <div className=" ">
            Backend Web Development
        </div>
        <div className="flex gap-1 flex-wrap justify-center lg:justify-center">
            <Skill photo={react} name='React'/>
            <Skill photo={tailwindcss} name='Tailwindcss'/>
            <Skill photo={js} name='JavaScript'/>
            <Skill photo={css} name='CSS'/>
            <Skill photo={html} name='HTML'/>
            <Skill photo={ts} name='TypeScript'/>
            
        </div>
    </div>
}
const BackWebDevelopment = ()=>{
    return <div className=" flex flex-col  w-full">
        <div className=" ">
            Backend Web Development
        </div>
        <div className="flex gap-1 flex-wrap justify-center skill_main">
            <Skill photo={django} name='Mongo DB'/>
            <Skill photo={node} name='Node.js'/>
            <Skill photo={mongodb} name='Mongo DB'/>
            <Skill photo={sql} name='SQL'/>
            <SKillsMasked text='i use them'/>
        </div>
    </div>
}



const Skill = ({photo,name})=>{
    return <div className=" w-16 lg:w-20 h-fit  dark:bg-cyan-900 border-px border-indigo-500 hover:border-indigo-800 hover:shadow-md shadow-sm shadow-indigo-500 ">
        <img loading="lazy" src={photo} alt={`${name}'s image`} className="w-full aspect-square pointer-events-none  p-2"/>
        <p className="text-center text-xs  lg:text-md dark:text-slate-300">{name}</p>

    </div>
}

export const SKillsMasked = ({text})=>{
    

    return <p className="skill_mask dark:bg-[#eb5939] bg-indigo-600 text-white text-sm md:text-md lg:text-lg">{text}</p>
}

const SkillsShow = ({skill})=>{
    return <div className="flex flex-col w-full mb-2">
        <div className="text-xl font-medium mb-5 pl-2 lg:pl-10 skill_main relative">
            {skill.name}
            <SKillsMasked text={skill.maskedtext}/>
        </div>
        <div className="flex gap-4 flex-wrap justify-start lg:justify-start lg:pl-10 pl-2">
            {skill.tech.map((techItem,index)=>(
                <Skill key={index} photo={techItem.image} name={techItem.name}/>
            ))}
        </div>
    </div>
}