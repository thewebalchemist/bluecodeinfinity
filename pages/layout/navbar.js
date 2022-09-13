import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { IoListSharp, IoCloseSharp, IoChevronDown, IoSunnyOutline, IoMoonSharp, IoChevronUp } from "react-icons/io5";
import { SiReact, SiFigma, SiTailwindcss, SiWordpress, SiNextdotjs, SiPhp, SiLaravel, SiJava, SiFlutter, SiAdobe, SiCanva, SiAdobecreativecloud } from "react-icons/si"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleModes = () => {
        setToggle(!toggle)
    }
    const [toggleSubmenu1, setToggleSubmenu1] = useState(false);
    const handleSubmenu1 = () => {
        setToggleSubmenu1(!toggleSubmenu1)
    }
    const [toggleSubmenu2, setToggleSubmenu2] = useState(false);
    const handleSubmenu2 = () => {
        setToggleSubmenu2(!toggleSubmenu2)
    }
    const [toggleSubmenu3, setToggleSubmenu3] = useState(false);
    const handleSubmenu3 = () => {
        setToggleSubmenu3(!toggleSubmenu3)
    }
    const [activeSubmenu, setActiveSubmenu] = useState("toggle");
    


    return(
        <main className=''>

            {/* on smaller devices */}
            <div className='lg:hidden relative'>
            <div className='flex justify-between items-center px-1 w-full h-20 bg-gray-800/90 mx-0 fixed top-0 z-40'>
            <div className='subMenu'>
                
                <div className='flex justify-start items-center'>
                    <Link href="/">
                        <a href="">
                        <Image  className="transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="blue code infinity logo"
                            src = "/images/bluecodelogo.svg"
                            width={200} height= {100}
                            layout=""
                            objectFit=""
                        />
                        </a>
                    </Link>
                </div>
                    
                </div>
                <div className='flex items-center subMenu'>
                <span onClick={handleModes} className='border border-gray-500 p-2 rounded-full text-2xl text-white font-bold cursor-pointer transition ease-in-out duration-300 '>
                    <span className={`${toggle ? 'hidden' : ''}  transition ease-in-out duration-75`}><IoListSharp /></span>
                    <span className={`${toggle ? '' : 'hidden'} transition ease-in-out duration-75`}><IoCloseSharp /></span>             
                    </span>
                </div>
            </div>
            <div  className={`${toggle ? '' : 'hidden'} transition ease delay-300 fixed h-full z-40 bg-gray-800/90 mt-20 w-full px-5 py-10 overflow-y-scroll left-0 top-0 right-0`}>
                <div>
                    <ul className='space-y-10 mb-20'>
                        <li className=''>
                            <div className='text-white'>
                            <div onClick={handleSubmenu1} className={`${toggleSubmenu1 ? '' : 'text-blue-400'} subMenu text-lg cursor-pointer`}>
                            <div className='flex justify-between items-center gap-1 '>Company
                            <span  className={`${toggleSubmenu1 ? '' : 'hidden'} text-xl`} ><IoChevronDown /></span>
                            <span className={`${toggleSubmenu1 ? 'hidden' : ''} text-xl`}><IoChevronUp /></span>
                            </div>
                            </div>
                            <div className={`${toggleSubmenu1 ? 'hidden' : ''}`}>

                            <div className='hover:shadow-2xl py-2 subMenu'>
                                <Link  href="/about">
                                <a className='hover:text-blue-400'>
                                    <span className='block text-md font-bold tracking-wide py-2'>
                                    About us
                                    </span>
                                    <span className='block text-sm'>
                                    We build tech teams and transform industries by creating scalable and meaningful software products
                                    </span>
                                </a>
                                </Link>                       
                            </div>
                            <hr className='w-full bg-blue-600' />
                            <div className='hover:shadow-2xl py-2 subMenu'>
                                <Link  href="/casestudies">
                                <a className='hover:text-blue-400'>
                                    <span className='block text-md font-bold tracking-wide py-2'>
                                    Our Case Studies
                                    </span>
                                    <span className='block text-sm'>
                                    Key strengths that our customers value the most
                                    </span>
                                </a>                                
                                </Link>                        
                            </div>
                                <hr className='w-full bg-blue-600' />
                            </div>
                            </div>
                        </li>
                        <li className=''>
                            <div className='text-white'>
                            <div onClick={handleSubmenu2} className={`${toggleSubmenu2 ? '' : 'text-blue-400'} subMenu text-lg cursor-pointer`}>
                            <div className='flex justify-between items-center gap-1 '>How We Work
                            <span  className={`${toggleSubmenu2 ? '' : 'hidden'} text-xl`} ><IoChevronDown /></span>
                            <span className={`${toggleSubmenu2 ? 'hidden' : ''} text-xl`}><IoChevronUp /></span>
                            </div>
                            </div>
                            <div className={`${toggleSubmenu2 ? 'hidden' : ''}`}>

                            <div className='hover:shadow-2xl py-2 subMenu'>
                                <Link  href="/our-services">
                                <a className='hover:text-blue-400'>
                                    <span className='block text-md font-bold tracking-wide py-2'>
                                    Services
                                    </span>
                                    <span className='block text-sm'>
                                    We offer outstanding software engineering expertise coupled with seasoned product management and user interface / experience designers.
                                    </span>
                                </a>
                                </Link>                       
                            </div>
                            <hr className='w-full bg-blue-600' />
                            <div className='hover:shadow-2xl py-2 subMenu'>
                                <Link  href="/who-we-are">
                                <a className='hover:text-blue-400'>
                                    <span className='block text-md font-bold tracking-wide py-2'>
                                    Who we are
                                    </span>
                                    <span className='block text-sm'>
                                    We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                    </span>
                                </a>                                
                                </Link>                        
                            </div>
                                <hr className='w-full bg-blue-600' />

                            </div>
                            </div>
                        </li>
                        <li>
                        <button className='text-white w-full border border-indigo-700 rounded bg-indigo-700 py-3 hover:bg-transparent hover:border-white'>
                    <Link href="/contact-us"><a>Get Project Estimate</a></Link>
                    </button>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            {/* on larger devices */}
            <div className='hidden lg:flex justify-between items-center bg-gray-800/80 px-6 fixed inset-x-0 h-20 w-full top-0 z-50'>
                {/* company logo */}
                <div>
                    <div className='flex justify-start items-center'>
                    <Link href="/">
                        <a href="">
                        <Image  className="transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="blue code infinity logo"
                            src = "/images/bluecodelogo.svg"
                            width={250} height= {100}
                            layout=""
                            objectFit=""
                        />
                        </a>
                    </Link>
                    </div>
                    
                </div>
                {/* navbar menu */}
                <div className='flex justify-end items-center'>
                    <ul className='flex justify-between space-x-6 text-white'>

                    {/* Company menu */}
                    <li>
                        <div className='dropdownNav text-gray-300'>
                            <Link className='' href="/">
                            <a className='flex justify-center items-center gap-1 hover:text-blue-400 text-sm'>Company
                            <span className='text-lg chevronDown'><IoChevronDown /></span>
                            <span className='text-lg chevronUp'><IoChevronUp /></span>
                            </a>
                            </Link>
                        <div className='companyDropdown absolute grid-cols-2 gap-10 bg-gray-800 mx-10 p-20 rounded-lg h-auto left-0 right-0 overflow-hidden'>

                        <div className='navGrid border border-gray-400 rounded p-3'>
                            <Link  href="/about">
                            <a className='hover:text-blue-400'>
                                <span className='block text-xl font-bold tracking-wide py-2'>
                                About us
                                </span>
                                <span className='block text-sm'>
                                We build tech teams and transform industries by creating scalable and meaningful software products
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid border border-gray-400 rounded p-3'>
                            <Link  href="/casestudies">
                            <a className='hover:text-blue-400'>
                                <span className='block text-xl font-bold tracking-wide py-2'>
                                Our Case Studies
                                </span>
                                <span className='block text-sm'>
                                Learn about the value we bring to businesses
                                </span>
                            </a>
                            </Link>                        
                        </div>
                        </div> 
                        </div>             
                    </li>



                    {/* How-we-work menu */}
                    <li>
                    <div className='dropdownNav text-gray-300'>
                            <Link className='' href="/">
                            <a className='flex justify-center items-center gap-1 hover:text-blue-400 text-sm'>How we work
                            <span className='text-lg chevronDown'><IoChevronDown /></span>
                            <span className='text-lg chevronUp'><IoChevronUp /></span>
                            </a>
                            </Link>
                        <div className='companyDropdown absolute grid-cols-2 gap-10 bg-gray-800 mx-10 p-20 rounded-lg h-auto left-0 right-0 overflow-hidden'>

                        <div className='navGrid border  border-gray-400 rounded p-3'>
                            <Link  href="/our-services">
                            <a className='hover:text-blue-400'>
                                <span className='block text-xl font-bold tracking-wide py-2'>
                                Services
                                </span>
                                <span className='block text-sm'>
                                We offer outstanding software engineering expertise coupled with seasoned product management and user interface / experience designers.
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid border border-gray-400 rounded p-3'>
                            <Link  href="/who-we-are">
                            <a className='hover:text-blue-400'>
                                <span className='block text-xl font-bold tracking-wide py-2'>
                                Who we are
                                </span>
                                <span className='block text-sm'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>
                        </div> 
                        </div> 
                    </li>


                    {/* Expertise menu */}
                    <li>
                    <div className='dropdownNav text-gray-300'>
                            <Link className='' href="/">
                            <a className='flex justify-center items-center gap-1 hover:text-blue-400 text-sm'>Technologies
                            <span className='text-lg chevronDown'><IoChevronDown /></span>
                            <span className='text-lg chevronUp'><IoChevronUp /></span>
                            </a>
                            </Link>

                        <div className='companyDropdown absolute grid-cols-6 gap-10 bg-gray-800 mx-10 p-20 rounded-lg h-auto left-0 right-0 overflow-hidden'>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/wordpress">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiWordpress /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Wordpess
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        
                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/reactjs">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiReact /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Reactjs
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        
                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/tailwindcss">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiTailwindcss /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            TailwindCSS
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        
                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/nextjs">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiNextdotjs /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Nextjs
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/figma">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiFigma /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Figma
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/php">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiPhp /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            PHP
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/laravel">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiLaravel /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Laravel
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/java">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiJava /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Java
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/flutter">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiFlutter /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Flutter
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/adobe">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiAdobe /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Adobe
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/canva">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiCanva /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Canva
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>

                        <div className='navGrid p-2 border rounded'>
                            <Link  href="/technologies/corel-draw">
                            <a className=''>
                            <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='techIcon bg-transparent text-indigo-700 text-6xl'>
                            <SiAdobecreativecloud /> 
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            Corel Draw
                            </span>
                        </div>
                            </a>
                            </Link>                        
                        </div>                      


                        </div> 
                        </div> 
                    </li>


                    </ul>
                </div>
                <div className='flex justify-between space-x-6 items-center'>
                <Link href="/contact-us"><a>
                    <span className='text-white border border-indigo-700 rounded bg-indigo-700 py-2 px-6  hover:bg-transparent hover:border-pink-300'>
                    Get Project Estimate
                    </span>
                    </a></Link>
                </div>
        </div>
        </main>
    )
}

export default Navbar;



