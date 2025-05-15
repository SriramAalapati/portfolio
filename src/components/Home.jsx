import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import photo from '../assets/hero.png'
import '../styles/home.css';
import resume from '../assets/sriram_aalapati_web_and_python_developer.pdf'
function Home() {
    return (
        <>
            <div className="section-container flex flex-col md:flex-row  lg:border-2  scroll-mt-12  min-h-[calc(100vh-3rem)]  dark:border-white gap-1 md:gap-3 lg:gap-0" id="home">
                <HeroImage />

                <HeroText />
            </div>
        </>
    )
}
export default Home

const HeroImage = () => {
    return (
        <>
            <motion.div className=" relative self-center   flex  justify-center items-center w-1/2 md:w-5xl lg:w-lg   ">
                <img src={photo} onContextMenu={e => e.preventDefault()} draggable='false' loading="lazy" className="image select-none  lg:blur-xs hover:blur-none  h-fit aspect-square lg:min-h-72 lg:max-h-82 object-top object-cover rounded-full md:rounded-4xl ring-2 mt-1 shadow-md shadow-indigo-700 dark:shadow-md dark:shadow-white" alt="Sriram Aalapati" />
                {/* <img src={gif} loading="lazy" className="absolute  h-full    aspect-square  rounded-full md:rounded-4xl pointer-events-none mix-blend-color-burn" ></img> */}
            </motion.div>

        </>
    )
}
const HeroText = () => {
    return <>
        <div className="flex flex-col  justify-center items-center lg:w-4xl">
            <GreetingText />
            <IntroduceText />
            <MainText />
            <div className="flex flex-row mt-2 gap-1 justify-center flex-wrap">
                <AnchorButton text='View Skills' href='#skills' />
                <AnchorButton text='view my Resume' href={resume} />
            </div>
        </div>
    </>
}
const GreetingText = () => {
    const parentVariants = {
        initial: { opacity: 0.3 },
        animate: {
            opacity: 1,
            transition: {
                delay: 0,//11.5
                delayChildren: 0,//12
                staggerChildren: 0.15
            }
        }
    };
    const childVariant = {
        initial: {
            y: 0,
            x:0,
            opacity: 0.3
        },
        animate: {
            y: 0,
            x:0,
            opacity: 1
        }
    }
    const splitedText = 'Greetings'.split('');
    const tags = splitedText.map((char, i) => {
        return (<motion.span variants={childVariant} key={i} className="inline-block">{char}</motion.span>)
    })
    const GreetingMaskedTest = () => {
        return <p className="!bg-indigo-500 px-5 cursor-default  dark:!bg-[#ec4e39]  dark:!text-black">Namastey!</p>

    }

    return (
        <>
            <div className=" flex justify-start  relative min-h-fit font-serif leading-14 lg:leading-20 font-medium text-5xl lg:text-7xl   ">
                <MaskedText child={<GreetingMaskedTest />} maskSize={150} />
                <motion.p id="greetingtext"
                    variants={parentVariants}
                    initial='initial'
                    animate='animate'
                    className="">{...tags}<motion.span variants={childVariant} className="font-bold text-6xl text-indigo-600 dark:text-white lg:text-7xl">!</motion.span>
                </motion.p>
            </div>
        </>
    )
}



const IntroduceText = () => {
    const parentVariants = {
        initial: { opacity: 0.3 },
        animate: {
            opacity: 1,
            transition: {
                delay: 0,//2
                delayChildren: 1.35,//13.5
                staggerChildren: 0.5
            }
        }
    };
    const childVariant = {
        initial: {
            y: 0,
            opacity: 0.3
        },
        animate: {
            y: 0,
            opacity: 1
        }
    }
    const IntroMaskedText = () => {
        return <p className="!bg-indigo-600 text-xl px-5 cursor-default  dark:!bg-[#ec4e39]  dark:!text-black text-white">Yeah, I made this</p>
    }
    return <motion.div className="text-lg leading-10 lg:leading-12  relative flex justify-center items-center     min-h-fit">
        <MaskedText child={<IntroMaskedText />} maskSize={100} />
        <motion.p
            variants={parentVariants}
            initial='initial'
            animate='animate'
            className="">
            <motion.span variants={childVariant}>Discover </motion.span>
            <motion.span variants={childVariant} className=" text-indigo-600 font-bold dark:text-white">the person behind </motion.span>
            <motion.span variants={childVariant}>this </motion.span>
        </motion.p>
    </motion.div>

}

const MainText = () => {
    const parentVariants = {
        initial: {
            opacity: 0.3,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 4,
                delay: 3,
                delayChildren: 2,
                staggerChildren: 0.35
            }
        }
    };
    const childVariant = {
        initial: {
            y: 0,
            opacity: 0.3,

        },
        animate: {
            y: 0,
            opacity: 1
        }
    }
    const mask = "On a mission to figure out myself. It’s not just about getting a job or ticking boxes—it’s about finding what actually makes me happy. Still trying to understand what my soul likes (besides good food and sleep). Just navigating this whole ‘being good human’ thing every day. Learning, growing, and laughing at my own confusion. Who knew self-discovery could be this complicated?"
    const MainMaskedText = () => {
        return <p className="lg:text-2xl lg:leading-10 !bg-indigo-500 dark:!bg-[#ec4e39]  dark:!text-black select-none">{mask}</p>
    }
    return <motion.div className="lg:text-2xl relative flex font-medium md:text-md text-md">
        <MaskedText child={<MainMaskedText />} maskSize={200} />
        <motion.p variants={parentVariants} initial='initial' animate='animate' className="lg:text-2xl  lg:leading-10">
            <motion.span variants={childVariant} className="">Currently pursuing a </motion.span>
            <motion.span variants={childVariant} className="  text-indigo-600 dark:text-white font-bold">B.Tech in Data Science</motion.span>
            <motion.span variants={childVariant} className="">, driven by a curiosity for the stories data holds. There’s a </motion.span>
            <motion.span variants={childVariant} className="   text-indigo-600 dark:text-white font-bold">genuine passion </motion.span>
            <motion.span variants={childVariant} className="">for uncovering how data shapes decisions and using that insight </motion.span>
            <motion.span variants={childVariant} className=" text-indigo-600 dark:text-white font-bold">to create innovative web solutions </motion.span>
            <motion.span variants={childVariant} className="">that solve real-world problems. The journey is fueled by continuous learning and a commitment to growing the skills needed to make a meaningful impact in the tech world.</motion.span>
        </motion.p>
    </motion.div>
}

export const MaskedText = ({ child, maskSize = 100 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? maskSize : 0;
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = (e) => {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };
    useEffect(() => {

        if (isHovered) {
            document.body.classList.add('bg-stone-200', 'dark:!bg-gray-900', 'text-slate-400', 'dark:!text-gray-600');
            // document.documentElement.classList.toggle('dark')
            document.body.style.transition = "background-color 0.5s ease"
        }
        else {
            document.body.classList.remove('bg-stone-200', 'text-slate-400', 'dark:!bg-gray-900', 'dark:!text-gray-600')
        }



    }, [isHovered])
    return (
        <>
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseMove={updateMousePosition}
                className="masked min-h-fit absolute "
                animate={{
                    WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.35 }}>
                {child}
            </motion.div>
        </>
    )
}



const AnchorButton = ({ text, href }) => {
    const variants = {
        initial: {
            opacity: 0,
            scale: 0.6
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.85,


            },
        },
    }

    return <motion.a
        variants={variants}
        initial='initial'
        animate='animate'
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2, type: 'spring' } }}
        href={href} className="button text-sm lg:text-2xl p-2 h-fit mb-1 mt-2 bg-indigo-500 text-white w-fit ml-5 rounded self-center box-content  after:hidden align-super cursor-pointer hover:after:inline shadow-md shadow-indigo-700 font-bold dark:bg-slate-500 dark:outline hover:bg-indigo-600" >{text}</motion.a>

}

