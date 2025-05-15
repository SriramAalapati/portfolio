import {useEffect,useLayoutEffect,useRef} from 'react'
import gsap from 'gsap'


function IntroAnimate(){
    const screenRef = useRef(null)
    useLayoutEffect(()=>{
        let animation = gsap.context(()=>{
            const t1 = gsap.timeline({onComplete:()=>screenRef.current.remove()})
            t1.from('#screen',{xPercent:'-100',duration:1.5,delay:0.25})
            .from('#text',{y:50,duration:1.5,opacity:0})
            .from("#description",{opacity:0,duration:0.5})
            .from("#maintext",{opacity:0,duration:0.5})
            .from("#tip",{opacity:0,duration:0.5})

            .to('#text',{y:-50,opacity:0,duration:1,delay:6})

            // .to(['#screen'],{xPercent:"100",duration:1,delay:0.5})
        },screenRef)
        return ()=> animation.revert()
    },[])
    return <>
        <div id='mainscreen'ref={screenRef} className='h-screen w-full bg-white dark:bg-black text-6xl fixed top-0 left-0 z-1000'>
            <div   id="screen" className=' h-full w-full bg-[#EEF0F2] text-slate-700 dark:bg-slate-700 dark:text-slate-300 flex flex-col justify-center items-center'>
                <h1 id='text'>Welcome.</h1>
                <p id='description' className='font-serif self-start mt-5 text-sm md:text-lg lg:text-2xl lg:pl-20 lg:mt-20'>Description</p>
                <p id='maintext' className='font-mono mt-5 self-start text-sm md:text-lg lg:text-2xl lg:pl-20 lg:pr-20 font-bold lg:mt-5'>This is my profile landing page, in which I describe myself and what I do. The site masterfully contrasts two opposing narratives: the formal version and the concealed honest version.</p>
                <p id='tip' className='self-center mt-5 lg:mt-10 text-sm md:text-lg lg:text-lg lg:pl-20 lg:pr-20 font-medium '>Pro Tip : Try to hover on the text to read honest version.</p>
            </div>
        </div>
    </>
}
export default IntroAnimate