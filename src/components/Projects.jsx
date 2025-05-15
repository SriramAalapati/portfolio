// a trained model for english speaking for improvements using nlp,
// a summarizer on what happend in tech industry in last 24 hours,


import { useRef, } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Projects(){
const ref = useRef(null)
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.8"],

})
const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
const animationStyles = { scale: scaleProgress, opacity: opacityProgress }
return <>
    <motion.div className="scroll-mt-12 section-container min-h-[calc(100vh-3rem)] border-2 " id="projects">
        <motion.h2 ref={ref} style={animationStyles}  className='text-xl lg:text-3xl font-bold underline text-center mb-5'>Tech in Action</motion.h2>
        <div className="flex flex-wrap gap-2">
            <ProjectCard project={SpeakSmart}/>
            <ProjectCard project={DevDigest}/>
        </div>
   </motion.div>
   </>
}

const SpeakSmart = {
    title:"SpeakSmart: AI-Powered English Speaking Coach",
    problem:"Many students struggle with spoken English fluency, pronunciation, and grammar. This tool provides real-time feedback and personalized improvement suggestions, helping learners gain confidence in speaking.",
    tech:[
        'React','FastAPI','Djnago',,"NLP",
    ],
    status:"ongoing",
    completed:false,
    link:"www.com",

}
const DevDigest = {
    title:"DevDigest: AI-Powered Coding Updates Summarizer",
    problem:"Developers often struggle to keep up with the latest programming trends, language updates, and framework changes. This tool automatically collects, processes, and summarizes key coding-related news from the last 24 hours, ensuring developers stay informed without information overload.",
    tech:[
        'React','Web Scraping','BeautifulSoup','FastAPI','Djnago',,"NLP",
    ],
    status:"ongoing",
    completed:false,
    link:"",
}

const ProjectCard = ({project})=>{
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.1 0.8"],
    
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const animationStyles = { scale: scaleProgress, opacity: opacityProgress }
    

    return <motion.div ref={ref} style={animationStyles} className=" lg:w-1/3 border-2 lg:ml-2 h-96 min-h-fit" >
            <motion.div>
                <motion.h2 className="font-bold text-xl text-center">{project.title}</motion.h2>
                <hr  className="w-[90%] mx-auto border-1"/>
                <motion.p className="font-medium text-md pl-2 my-1">How It Helps : </motion.p>
                <motion.p className="font-medium text-md pl-2 ">{project.problem}</motion.p>

            </motion.div>
            <motion.p className="font-medium text-md pl-2 my-1">Tech Used : </motion.p>
            <motion.div className="flex gap-2 pl-2 flex-wrap">
                {
                    project.tech.map((tech,index)=>
                        <motion.p key={index} className="border-2 border-indigo-600 py-1 px-2  rounded-2xl  cursor-pointer hover:shadow-xl bg-indigo-600 text-white transition-colors duration-500">{tech}</motion.p>
                    )
                }
            </motion.div>
            <motion.p className="font-medium text-md pl-2 my-1">Status : <span className="text-indigo-600">{project.status}</span></motion.p>
            <motion.p className="font-medium text-md pl-2 my-1">link : <span className="text-indigo-600">{project.completed? project.link:'link will be updated after completing.'}</span></motion.p>
    </motion.div>
}

