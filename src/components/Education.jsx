import { motion, useScroll, useTransform } from 'framer-motion';
import narayana from '../assets/narayana.png';
import sasi from '../assets/sasi-logo1.png';
import site from '../assets/sasi.png';
import { MaskedText } from './Home';
import { useRef } from 'react';
export default function EducatonSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.5 0.8 "],

    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const animationStyles = { scale: scaleProgress, opacity: opacityProgress }
    const schoolMaskedText = 'It was a place where I dreamed of becoming every profession  and discovered the confidence to chase them. It nurtured my belief that I could achieve anything with determination and hard work.'
    const interMaskedText = 'It was a place where I often felt lost, questioning why I was there and unsure about my direction in life. It even shattered my dreams, but it became a period of self-discovery.'
    const engineeingMaksedTedt = 'It is a place where I witnessed a real struggle to build a career, yet I leave with the hope of securing a job and starting my professional journey as a software developer.'
    return (
        <motion.div className='min-h-[calc(100vh-3rem)] border-2  scroll-mt-12 section-container' id='education'>
            <motion.h2 ref={ref} style={animationStyles} id='education' className='text-xl lg:text-3xl font-bold underline text-center mb-5'>My Education Details</motion.h2>
            {/* School images and text */}
            <div className=' flex flex-col items-start  lg:items-center'>
                <div className='flex flex-col items-stretch '>
                    <Education image={narayana} name='Narayana English Medium School' year='2020' percentage={'93.1%'} place={'Neeladripuram'} maskedText={schoolMaskedText} />
                    <Pretimeline />
                    <Education image={sasi} name='Sasi Junior College' year='2020 - 2022' percentage={'94.1%'} place={'Tadepalligudem'} maskedText={interMaskedText} />
                    <Pretimeline />
                    <Education image={site} name='Sasi Institute of Technology and Engineering' year='2022 - 2026 [expected]' percentage={'75% [expected]'} place={'Tadepalligudem'} maskedText={engineeingMaksedTedt} />
                </div>
            </div>
            <div className='lg:w-full lg:px-4 relative' >
                <motion.h2 whileInView={{ opacity: 1, x: 0, scale: 1 }} initial={{ opacity: 0, x: -100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.85, once: true }} className='lg:text-2xl md:text-md  font-medium underline underline-offset-2'>
                    What I learnt from <span className='text-indigo-600 underline dark:text-white'>17 Years of studing</span> :
                </motion.h2>
                <EducationPostText />
            </div>

        </motion.div>
    )
}
const Education = ({ image, name, year, percentage, place, maskedText }) => {
    const EducationMaskText = () => {
        return <p className=' text-md md:text-lg  dark:!bg-[#ec4e39]  dark:!text-black  lg:text-xl font-medium leading-5  lg:leading-8  !bg-indigo-600'>{maskedText}</p>
    }
    return (
        <motion.div className='flex items-center '  >
            <motion.div >
                <motion.img whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.4 }} transition={{ duration: 0.6 }} viewport={{ amount: 0.7, once: true }} src={image} alt={`${name}'s logo`} className='w-28  aspect-square lg:w-46 lg:max-w-52 object-contain ' />
            </motion.div>

            <motion.div className='relative w-full'>
                <MaskedText child={<EducationMaskText />} maskSize={200} />

                <motion.div>
                    <motion.p whileInView={{ opacity: 1, x: 0, scale: 1 }} initial={{ opacity: 0, x: -100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.85, once: true }} className='font-medium text-lg md:text-xl lg:text-2xl'>{name}</motion.p>
                    <motion.p whileInView={{ opacity: 1, x: 0, scale: 1 }} initial={{ opacity: 0, x: -100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.85 }} className='text-indigo-500 font-medium text-sm lg:text-lg' >Percentage : {percentage}</motion.p>
                    <motion.p whileInView={{ opacity: 1, x: 0, scale: 1 }} initial={{ opacity: 0, x: -100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.85 }} className='font-medium text-sm lg:text-lg'>Year : {year}</motion.p>
                    <motion.p whileInView={{ opacity: 1, x: 0, scale: 1 }} initial={{ opacity: 0, x: -100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.85 }} className='font-medium text-sm lg:text-lg'>Location : {place}</motion.p>

                </motion.div>
            </motion.div>

        </motion.div>)

}

const EducationPostText = () => {
    const educationMaskedText = 'Studying for 17 years, mastering equations, memorizing definitions, and solving countless problems—yet none of them directly taught me how to navigate life. Knowing the derivation of a mathematical formula or the theory behind a concept doesn’t guarantee success. Things change, people change, and circumstances shift in ways no textbook could ever predict. Scoring the highest marks in class won’t make you a billionaire, nor will it define your worth. Many subjects I studied were just for exams, and in the grand scheme of things, they had little relevance beyond the classroom. But what did matter was learning how to think, adapt, and grow. The real lessons weren’t always in books—they were in experiences, in failures, and in the ability to keep moving forward, no matter what.'
    const EducationMaskedText = () => {
        return <motion.p className='lg:text-xl md:text-md text-sm  first-letter:text-2xl font-medium dark:!bg-[#ec4e39]  dark:!text-black'>{educationMaskedText}</motion.p>
    }
    return <motion.div >
        <MaskedText child={<EducationMaskedText />} maskSize={250} className="absolute" />
        <motion.p className='lg:text-xl md:text-md text-sm first-letter:text-2xl font-medium' whileInView={{ opacity: 1, y: 0, scale: 1 }} initial={{ opacity: 0, y: 100, scale: 0.3 }} transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }} viewport={{ amount: 0.35, once: true }}>
            Each new subject I encountered over the 17 years  fueled my curiosity and strengthened my enthusiasm for learning. Along the way, I developed essential skills like time management, collaboration, and team building. Encouraging and inspiring others became a cornerstone of my journey, as I realized the power of collective growth and shared learning. Simplifying concepts through personal understanding made the process both enjoyable and impactful, driving my passion for continuous exploration. This foundation has equipped me with strong problem-solving and critical thinking skills, enabling me to approach challenges with a structured and analytical mindset. Navigating diverse academic challenges has fostered my adaptability and resilience, allowing me to thrive in dynamic environments. Throughout my studies, I've honed my communication and presentation skills, enabling me to effectively convey complex ideas to diverse audiences.
        </motion.p>
    </motion.div>
}

const Pretimeline = () => {
    return <motion.svg height={75}>
        <motion.line initial={{ y2: 0 }} whileInView={{ y2: 75 }} viewport={{ amount: 0.7 }} transition={{ type: "tween", duration: 1.75, ease: "easeInOut" }} x1={100} x2={100} y1={1} y2={75} className="stroke-indigo-500 h-fit w-fit" />
    </motion.svg>
}