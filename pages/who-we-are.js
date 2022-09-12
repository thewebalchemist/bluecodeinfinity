import { useState } from 'react';
import Image from 'next/image'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { getSortedPostsData } from '../DB/posts';
import Contactus from './contact-us';
import Head from 'next/head'

const WhoWeAre = ({posts}) => {

    const [activeValue, setActiveValue] = useState('courage')


    return (
        <main className="py-20">
            

            {/* The head section */}
            <Head>
                    <title>Who We Are - We believe in long-term, mutually-beneficial partnerships between ourselves and our clients. In order to achieve this, we offer individual, flexible models of cooperation that include, in most cases, agile implementation methods.</title>
                    <meta name="description" content="We believe in long-term, mutually-beneficial partnerships between ourselves and our clients. In order to achieve this, we offer individual, flexible models of cooperation that include, in most cases, agile implementation methods." />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://cdn.tailwindcss.com"></script>
                    <script src="//code.jivosite.com/widget/U2A0sPgoOC" async></script>                    
                </Head>

                {/* Top banner */}
            <div className= "bg-opacity-10 bg-gradient-to-b  from-indigo-500 to-purple-800 h-auto w-full p-10 flex flex-col space-y-8 justify-center  items-center">
                <h1 className="font-sans tracking-widest text-5xl text-white font-semibold ">
                Who We Are
                </h1>
                <p className="font-sans tracking-widest text-sm text-white font-semibold text-center">
                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients. In order to achieve this, we offer individual, flexible models of cooperation that include, in most cases, agile implementation methods.
                </p>
                <hr className='bg-white border w-32 mx-4 md:mx-24' />                
            </div>

            {/* Our Vision */}
            <div className="p-5 md:p-28">
                <div className="p-10 flex flex-col justify-center text-center border border-gray-400 rounded-md space-y-4">
                    <h2 className="text-pink-300 text-3xl tracking-widest font-bold">
                        Our Vision
                    </h2>
                    <p className="text-white ">
                    Only inspired and passionate people have the ability to create something unique and new. We are people who want to change the world around us every day. And we are the Company that inspires.
                    </p>
                </div>
            </div>

            {/* Our Values */}
            <div className='hidden md:block'>
                <h1 className="text-center text-pink-300 text-3xl tracking-widest p-10 font-bold">
                    Our Values
                </h1>

                <div className='grid grid-cols-5 gap-10 px-20 py-5'>

                        {/* courage value */}
                <div onClick={() => setActiveValue('courage')} className='hoverShadow border rounded cursor-pointer'>
                            <div className='flex flex-col items-center justify-center bg-gray-200'>
                            <Image className=""
                                alt="Image Alt"
                                src="/images/courage.png"
                                width={100} height= {100}
                                layout="intrinsic"
                                objectFit="cover" // Scale your image down to fit into the container
                            />
                                <span className='text-blue-800 text-md font-bold'>
                                Courage
                                </span>
                        </div>                       
                        </div>

                        {/* courage value */}
                <div onClick={() => setActiveValue('principles')} className='hoverShadow border rounded cursor-pointer'>
                            <div className='flex flex-col items-center justify-center bg-gray-200'>
                            <Image className=""
                                alt="Image Alt"
                                src="/images/principles.png"
                                width={100} height= {100}
                                layout="intrinsic"
                                objectFit="cover" // Scale your image down to fit into the container
                            />
                            <span className='text-blue-800 text-md font-bold'>
                            Principles
                            </span>
                        </div>                       
                        </div>

                        {/* courage value */}
                <div onClick={() => setActiveValue('persistence')} className='hoverShadow border rounded cursor-pointer'>
                            <div className='flex flex-col items-center justify-center bg-gray-200'>
                            <Image className=""
                                alt="Image Alt"
                                src="/images/persistense.png"
                                width={100} height= {100}
                                layout="intrinsic"
                                objectFit="cover" // Scale your image down to fit into the container
                            />
                            <span className='text-blue-800 text-md font-bold'>
                            Persistence
                            </span>
                        </div>                       
                        </div>

                        {/* courage value */}
                <div onClick={() => setActiveValue('dignity')} className='hoverShadow border rounded cursor-pointer'>
                            <div className='flex flex-col items-center justify-center bg-gray-200'>
                            <Image className=""
                                alt="Image Alt"
                                src="/images/dignity.png"
                                width={100} height= {100}
                                layout="intrinsic"
                                objectFit="cover" // Scale your image down to fit into the container
                            />
                            <span className='text-blue-800 text-md font-bold'>
                            Dignity
                            </span>
                        </div>                       
                        </div>

                        {/* courage value */}
                <div onClick={() => setActiveValue('identity')} className='hoverShadow border rounded cursor-pointer'>
                            <div className='flex flex-col items-center justify-center bg-gray-200'>
                            <Image className=""
                                alt="Image Alt"
                                src="/images/identity.png"
                                width={100} height= {100}
                                layout="intrinsic"
                                objectFit="cover" // Scale your image down to fit into the container
                            />
                            <span className='text-blue-800 text-md font-bold'>
                            Identity
                            </span>
                        </div>                       
                        </div>


                </div>
                <div className="flex justify-center items-center md:p-20 md:space-x-10 pt-20 md:pt-0">   


                <div className={`${activeValue === 'courage' ? "" : "hidden"} p-10 flex flex-col justify-center text-center space-y-4`}>
                    <h2 className="text-pink-300 text-3xl ">
                        Courage
                    </h2>
                    <p className="text-white">
                    Only inspired and passionate people have the ability to create something unique and new. We are people who want to change the world around us every day. And we are the Company that inspires.
                    </p>
                </div>

                <div className={`${activeValue === 'principles' ? "" : "hidden"} p-10 flex flex-col justify-center text-center space-y-4`}>
                    <h2 className="text-pink-300 text-3xl ">
                        Principles
                    </h2>
                    <p className="text-white">
                    Principles and Values have always been initial parts of Bluecodes world. We’re responsible for our words and strongly believe that it’s the only way to build a Company that People trust.
                    </p>
                </div>

                <div className={`${activeValue === 'identity' ? "" : "hidden"} p-10 flex flex-col justify-center text-center space-y-4`}>
                    <h2 className="text-pink-300 text-3xl ">
                        Identity
                    </h2>
                    <p className="text-white ">
                    It’s vital for us to be ourselves. To be loyal to our Principles and Values. We’re growing and becoming more professional day by day yet doing our best to preserve the uniqueness that has always been a part of Bluecode.
                    </p>
                </div>

                <div className={`${activeValue === 'dignity' ? "" : "hidden"} p-10 flex flex-col justify-center text-center space-y-4`}>
                    <h2 className="text-pink-300 text-3xl ">
                        Dignity
                    </h2>
                    <p className="text-white ">
                    People are our main priority. Respect for every individual and their interests are cornerstones of Bluecode. That’s the reason why our motto hasn’t changed since the company’s first day …” it’s All About People”
                    </p>
                </div>

                <div className={`${activeValue === 'persistence' ? "" : "hidden"} p-10 flex flex-col justify-center text-center space-y-4`}>
                    <h2 className="text-pink-300 text-3xl ">
                        Persistence
                    </h2>
                    <p className="text-white ">
                        We know that the way to success is always a long one. And we’re ready to achieve it through blood, sweat, and tears to make the world a better place to live in.
                    </p>
                </div>
                
            </div>
            </div>
            <div className='md:hidden block'>
            <h1 className="text-center text-pink-300 text-3xl tracking-widest p-10 font-bold">
                    Our Values
                </h1>
            <Splide tag="div"
                    options={ {
                        rewind: true,
                        gap   : '1rem',
                        perPage: 1,
                        padding: 20
                        
                        
                    } }
                    aria-label="My Favorite Images"
                    >
                    <SplideSlide>
                        <div className={` p-10 flex flex-col justify-center text-center space-y-4`}>
                            <h2 className="text-pink-300 text-3xl ">
                                Identity
                            </h2>
                            <p className="text-white text-sm">
                            It’s vital for us to be ourselves. To be loyal to our Principles and Values. We’re growing and becoming more professional day by day yet doing our best to preserve the uniqueness that has always been a part of Bluecode.
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={` p-10 flex flex-col justify-center text-center space-y-4`}>
                            <h2 className="text-pink-300 text-3xl ">
                            Persistence
                            </h2>
                            <p className="text-white text-sm">
                            We know that the way to success is always a long one. And we’re ready to achieve it through blood, sweat, and tears to make the world a better place to live in.
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={` p-10 flex flex-col justify-center text-center space-y-4`}>
                            <h2 className="text-pink-300 text-3xl ">
                            Dignity
                            </h2>
                            <p className="text-white text-sm">
                            People are our main priority. Respect for every individual and their interests are cornerstones of Bluecode. That’s the reason why our motto hasn’t changed since the company’s first day …” it’s All About People”
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={` p-10 flex flex-col justify-center text-center space-y-4`}>
                            <h2 className="text-pink-300 text-3xl ">
                            Principles
                            </h2>
                            <p className="text-white text-sm">
                            Principles and Values have always been initial parts of Bluecodes world. We’re responsible for our words and strongly believe that it’s the only way to build a Company that People trust.
                            </p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className={` p-10 flex flex-col justify-center text-center space-y-4`}>
                            <h2 className="text-pink-300 text-3xl ">
                            Courage
                            </h2>
                            <p className="text-white text-sm">
                            Only inspired and passionate people have the ability to create something unique and new. We are people who want to change the world around us every day. And we are the Company that inspires.
                            </p>
                        </div>
                    </SplideSlide>
                    
            </Splide>            
            </div>
            <Contactus posts={posts} />            
        </main>
    )
}

export async function getStaticProps() {
    try {
        const posts = getSortedPostsData();
        return {
            props: {
                posts
            }
        };
    } catch (error) {
        return {
            props: {
            posts:false
            }
        };
    }
        
};

export default WhoWeAre;