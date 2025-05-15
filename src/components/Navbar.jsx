import { useEffect, useState } from "react";
import '../styles/navbar.css'
import useIntersectionObserver from './observer'
import gsap from "gsap";
function Navbar() {
    const [menuIcon, setMenuIcon] = useState(false);
    const [activeLink,setActivelink] = useState('home')
    useIntersectionObserver(setActivelink)
    function handleMenuIcon() {
        setMenuIcon(!menuIcon)
    }
    function CloseIcon() {
        return <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:cursor-pointer ring-1 mt-0.5" onClick={handleMenuIcon}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </>

    }
    function MenuIcon() {
        return <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 hover:cursor-pointer" onClick={handleMenuIcon}>
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>

        </>
    }
   

    return (
        <header className="w-full   h-12 sticky top-0   z-100 backdrop-blur-xl" id="navbar">
            <section id="navbar" className="lg:mx-auto lg:max-w-7xl ">
                <nav className="flex justify-between  items-center">
                    <div className="nav-brand">
                        <a href="/" className="text-4xl  dark:text-slate-200">
                            Sriram Aalapati
                        </a>
                    </div >
                    <div className="lg:hidden relative"> {menuIcon ? <CloseIcon /> : <MenuIcon />}
                        <MobileNav menu={menuIcon} />
                    </div>
                    <div className="lg:block hidden ">
                        <ul className="flex gap-4 text-2xl  rounded  " id="link">
                            <li><a href="#home" className={`select-none ${activeLink == 'home'? 'active-link' : ''}`} >Home</a></li>
                            <li><a href="#education" className={`select-none ${activeLink == 'education'? 'active-link' : ''}`} >Education</a></li>
                            <li><a href="#skills" className={`select-none ${activeLink == 'skills'? 'active-link' : ''}`} >Skills</a></li>
                            <li><a href="#projects" className={`select-none ${activeLink == 'projects'? 'active-link' : ''}`} >Projects</a></li>
                            <li><a href="#contact" className={`select-none ${activeLink == 'contact'? 'active-link' : ''}`} >Contact</a></li>
                        </ul>
                    </div>
                    <div className=" hidden lg:block ">
                        <Themes />
                    </div>
                </nav>
            </section>
            <hr className="my-2 w-full mx-auto shadow-lg shadow-slate-400" />
        </header>
    );
}

export default Navbar;

// THEME SETTING FUNCTION
function Themes() {
    function getSystemTheme() {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        } else {
            return 'dark';
        }
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'system') {
            if (getSystemTheme() === 'dark') {
                document.documentElement.classList.add('dark');

            }
            else {
                document.documentElement.classList.remove('dark');

            }
        }
        else {
            manageTheme();
        }
    }, [theme]);

    function manageTheme() {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    function handleThemeChange(e) {

        setTheme(e.target.value);

    }

    function LightIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 inline mr-1 -mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        );
    }
    function ComputerIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 inline mr-1 -mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>

        )
    }
    function DarkIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 inline mr-1 -mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        );
    }

    return (
        <>
            {theme !== 'system' ? theme === 'light' ? <LightIcon /> : <DarkIcon /> : <ComputerIcon />}
            <select
                name="theme"
                className="inline outline-1 mt-2 dark:text-slate-300 dark:bg-slate-600 w-36 dark:ring-2"
                defaultValue={theme}
                onChange={handleThemeChange}
            >
                <option value="system">System default</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </>
    );
}

export { Themes };



// Mobile Menu
function MobileNav({ menu }) {
    //home,about,educaiton,skills,contact\
    const [activeLink,setActivelink] = useState('home')
    useIntersectionObserver(setActivelink)
    useEffect(() => {
        if (menu) {
          // Create a timeline for GSAP animation
          const tl = gsap.timeline();
    
          // Background animation (fade in)
          tl.to('.nav-background', {
            opacity: 1,
            duration: 0.5,
          });
    
          // List items animation (fade in with delay)
          const listItems = document.querySelectorAll('.nav-item');
          listItems.forEach((item, index) => {
            tl.to(item, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              delay: 0.1 * index, // Delay each item
            });
          });
        } else {
          // Reset animations when closing
          gsap.to('.nav-background', {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to('.nav-item', {
            opacity: 0,
            y: 20,
            duration: 0.3,
          });
        }
      }, [menu]);


    return (
        <>
            <ul className={`nav-background absolute top-full right-0 bg-blue-100 text-slate-700  dark:bg-slate-600 dark:text-slate-300 w-sm  text-center rounded ${!menu ? 'hidden' : ''} outline mt-3 p-2`} >
                <li className="mb-1 mt-1 "><a href="#home" className={`nav-item  text-xl p-px select-none ${activeLink == 'home'? 'active-link' : ''}` } >Home</a></li>
                <li className="mb-1"><a href="#education" className={`nav-item text-xl p-px select-none  ${activeLink == 'education'? 'active-link' : ''}`} >Education</a></li>
                <li className="mb-1"><a href="#skills" className={`nav-item text-xl p-px select-none  ${activeLink == 'skills'? 'active-link' : ''}`}>Skills</a></li>
                <li className="mb-1"><a href="#projects" className={`nav-item text-xl p-px select-none  ${activeLink == 'projects'? 'active-link' : ''}`}>Projects</a></li>
                <li className="mb-1"><a href="#contact" className={`nav-item text-xl p-px select-none  ${activeLink == 'contact'? 'active-link' : ''}`}>Contact</a></li>
                <li><Themes/></li>
            </ul>
        </>
    )
}





