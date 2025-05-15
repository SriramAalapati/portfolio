import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
import dialer from '../assets/dialer.png';
import github from '../assets/GitHub.png';
import codechef from '../assets/codechef.png';
import leetcode from '../assets/leetcode.png';

import '../styles/skills.css';
import { SKillsMasked } from "./Skills";
export default function Contact(){
    const ref = useRef(null)
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.8"],

})
const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
const animationStyles = { scale: scaleProgress, opacity: opacityProgress }
return <>
    <motion.div className="scroll-mt-12 section-container min-h-[calc(100vh-3rem)] border-2 " id="contact">
        <motion.h2 ref={ref} style={animationStyles}  className='text-xl lg:text-3xl font-bold underline text-center mb-5'>Drop a Message</motion.h2>
        <ContactDetail contact={whatsappContact}/>
        <ContactDetail contact={phoneContact}/>
        <ContactDetail contact={mailContact}/>
        <ContactDetail contact={linkedinContact}/>
        <h2 className="font-medium text-md ml-2">Other Coding platforms</h2>
        <ContactDetail contact={githubContact}/>
        <ContactDetail contact={codechefContact}/>
        <ContactDetail contact={leetcodeContact}/>
        <div className="lg:mt-20 text-center text-md font-medium">
            <h2>Designed and Developed by <span className="text-indigo-600 "><a href="#">Sriram Aalapati</a></span>.</h2>
        </div>
   </motion.div>
   </>
}

const whatsappContact = {
    icon:whatsapp,
    name:"Whatsapp",
    href:"https://wa.me/9121085596?text=Hi%20Sriram%2C%20I%20recently%20viewed%20your%20landing%20page%20and%20I%20would%20like%20to%20connect%20with%20you.",
    maskedtext :'90% chance of giving reply with in an Hour'
}
const mailContact = {
    icon:gmail,
    name:"Gmail",
    href:"mailto:sriramaalapati4@gmail.com?subject=Impression%20of%20Landing%20page.&body=Hi%20Sriram%2C%0AI%20viewed%20your%20profile%20and%20like%20to%20contact%20you.",
    maskedtext :'100% chance of giving reply with in one Day'
}
const linkedinContact = {
    icon:linkedin,
    name:"Linkedin",
    href:"https://www.linkedin.com/in/sriramaalapati/",
    maskedtext :'Let’s Pretend I’m More Professional '
}
const phoneContact = {
    icon:dialer,
    name:"Phone",
    href:"tel:9121085596",
    maskedtext :'100% chances of not responding or ignoring'
}

const githubContact = {
    icon:github,
    name:"GitHub",
    href:"https://github.com/SriramAalapati",
    maskedtext :'Where I talk to myself in commit messages.'
}

const codechefContact = {
    icon:codechef,
    name:"Codechef",
    href:"https://www.codechef.com/users/sriramaalapati",
    maskedtext :'Cooking up logic and buring test cases.'
}
const leetcodeContact = {
    icon:leetcode,
    name:"Leetcode",
    href:"https://leetcode.com/u/SriramAalapati/",
    maskedtext :'No comments.'
}

const ContactDetail = ({contact})=>{
    return <div className="flex my-8 ml-2  lg:my-4 gap-2 ">
        <div>
            <img loading="lazy" src={contact.icon} alt={`${contact.name} icon`} className="w-12"/>
        </div>
        <div className="contact_main relative w-full">
            <div className="contact_mask w-full  dark:bg-[#eb5939] bg-indigo-600 text-white text-sm md:text-md lg:text-lg">
                 <a href={contact.href} className="leading-12 lg:text-xl text-md" target="_blank">{contact.maskedtext}</a>

            </div>
            
            <a href={contact.href} className="leading-12 text-xl" target="_blank">{contact.name}</a>
            
        </div>
    </div>
}