import Link from 'next/link'
import Image from 'next/image'
import { SiReact, SiFigma, SiTailwindcss } from "react-icons/si"
import { getSortedCaseStudies } from '../DB/casestudies'
import Head from 'next/head'

export default function CaseStudies ({caseStudies}) {
    return(
        <main className='py-20'>
            {/* The head section */}
            <Head>
                    <title>Discover our case studies - Learn about the value we bring to businesses</title>
                    <meta name="description" content="Learn about the value we bring to businesses" />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://cdn.tailwindcss.com"></script>
                    <script src="//code.jivosite.com/widget/U2A0sPgoOC" async></script>
                    
                </Head>
        <div>
            <div className= "bg-opacity-10 bg-gradient-to-b  from-indigo-500 to-purple-800 h-auto w-full p-10 flex flex-col space-y-8 justify-center  items-center">
                <h1 className="font-sans tracking-widest text-5xl text-white font-semibold ">
                Discover our case studies
                </h1>
                <p className="text-white tracking-widest ">
                Learn about the value we bring to businesses
                </p>
                <hr className='bg-white border w-32 mx-4 md:mx-24' />

            </div>
            


            {/* case studies starts */}
            {caseStudies.map(({ id, projectTags, projectDescription, projectImage }) =>(
            
            <div className=' px-2 py-5 md:py-24 lg:pl-20'>
            <div className='grid lg:grid-cols-3 '>
            <div className='grid flex flex-col justify-start space-y-4 md:space-y-8 z-10 py-10 '>
                
                 {/* tags */}
                <div className='flex flex-wrap justify-start items-center text-gray-100 gap-2 text-sm md:text-md tracking-widest font-semibold'>
                <span>{projectTags}</span>
                </div>
                {/* description */}
                <h2 className='text-white font-semibold text-lg md:text-2xl leading-loose tracking-widest'>
                {projectDescription}
                </h2>

                {/* view project */}
                <div className='flex justify-start'>
                <span className='caseText text-white font-thin tracking-widest text-md uppercase'>
                <Link href={`/casestudies/${id}`}>
                    <a>View Project</a>
                </Link>            
                <hr className='border border-blue-300 w-1/3 caseLine' />
                </span>
                </div>
                

                {/* technologies used */}
                <div className=''>
                    <h1 className='text-white text-md tracking-widest font-medium'>
                        Crafted By:
                    </h1>
                    <div className='flex py-4 justify-start gap-2'>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiFigma />
                            </span>
                            <span className='text-gray-200 text-sm font-medium'>
                            Figma
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiTailwindcss />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            TailwindCSS
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiReact />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            ReactJS
                            </span>
                        </div>
                    </div>
            </div>
            </div>

            {/* case study snap pic  */}
            <div className='grid col-span-2'>
                <Image
                className='w-full'
                alt=""
                width='100%'
                height='80'
                layout='responsive'
                src={projectImage}
                />
            </div>
            </div>
            <div>
            <hr className='mt-10 mx-4 md:mx-24' />                 
            </div>
            </div>
            ))}
            {/* case studies end */}
            </div>
            </main>
        // case study section ends
    )}


export async function getStaticProps() {
    try {
        const caseStudies = getSortedCaseStudies()

        return {
            props: {
                caseStudies
            }
        };
    } catch (error) {
        return {
            props: {caseStudies:false}
        };
    }
        
};