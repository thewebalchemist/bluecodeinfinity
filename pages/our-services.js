import Link from 'next/link'
import Image from 'next/image'
import Contactus from './contact-us'
import { getSortedPostsData } from '../DB/posts'
import Head from 'next/head'


const OurServices = ({posts}) => {
    return(
        <main className='py-20'>

                        {/* The head section */}
                    <Head>
                        <title>Our Services - We offer outstanding software engineering expertise coupled with seasoned product management and user interface / experience designers</title>
                        <meta name="description" content="We offer outstanding software engineering expertise coupled with seasoned product management and user interface / experience designers" />
                        <link rel="icon" href="/favicon.ico" />
                        <script src="https://cdn.tailwindcss.com"></script>
                        
                    </Head>

            {/* Top banner */}
            <div className= "bg-opacity-10 bg-gradient-to-b  from-indigo-500 to-purple-800 h-auto w-full p-10 flex flex-col space-y-8 justify-center  items-center">
                <h1 className="font-sans tracking-widest text-5xl text-white font-semibold ">
                Our Services
                </h1>
                <p className="font-sans tracking-widest text-center text-sm text-white font-semibold ">
                We offer outstanding software engineering expertise coupled with seasoned product management and user interface / experience designers.
                </p>
                <hr className='bg-white border w-32 mx-4 md:mx-24' />
                
            </div>

             {/* our approach */}
            <div id="approach" className="p-5 md:p-10">
                <h2 className="text-center py-5 md:py-0 uppercase tracking-widest text-pink-300 text-md md:text-2xl">
                Here is how we will be of service to you
                </h2>              
                <div className="grid md:grid-cols-2 gap-10 md:gap-20 md:p-20">


                    {/* Services - UI/UX DESIGN */}
                    <div className="space-y-4 grid">


                    <div className='grid md:hidden'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/ui-ux-design.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-blue-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        UI/UX DESIGN
                        </h2>

                        </div>
                        <h2 className='text-blue-300 font-semibold text-lg'>                            
                                Where Design Interacts With Research, Strategy And Codes    
                            </h2>                    
                        <p className="text-white text-sm">
                        Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Intellectsoft’s UI and UX services. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly.
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            Let's Build a design for you today
                        </a></Link>
                        </button>
                        
                    </div>
                    <div className='hidden md:grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/ui-ux-design.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>


                    {/* WEB DEVELOPMENT & E-COMMERCE */}
                    <div className='grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/web-development.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                    <div className="space-y-4 grid">
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-pink-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        WEB DEVELOPMENT & E-COMMERCE
                        </h2>

                        </div>
                        <h2 className='text-pink-300 font-semibold text-lg'>                            
                        We Create Profound Web & E-Comm Experiences For Our Clients    
                            </h2>                    
                        <p className="text-white text-sm">
                        A professional website is a reflection of your business. You don't want it to look hazy in any way. Be it its design or its development or for that matter its content. We take all the pains of your website design process and provide you with web and e-commerce soultions that are not only visually alluring but also fabulously functional and quick in loading. We assure you our website designs and e-com solutions will increase your business' profitability by folds.
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            get a proffessional website for your business
                        </a></Link>
                        </button>
                        
                    </div>

                    {/* MOBILE APPLICATION DEVELOPMENT */}
                    <div className="space-y-4 grid">

                    <div className='md:hidden grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/mobile-application.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-blue-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        MOBILE APPLICATION DEVELOPMENT
                        </h2>

                        </div>
                        <h2 className='text-blue-300 font-semibold text-lg'>                            
                        Reach Out To Millions Of IOs And Android Users With Your App.    
                            </h2>                    
                        <p className="text-white text-sm">
                        Even after building a number of apps on both Android and iOS systems, the new ideas we come across every day and the new challenges they bring with them still manage to keep up on our toes to find the newest and most innovate solutions. Whether it’s a kids' learning app, an artistic tool, a management utility, a payment interface or something never conceived before, our expertise make the process of development that much smoother
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            Let's Develop your app today
                        </a></Link>
                        </button>
                        
                    </div>
                    <div className='hidden md:grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/mobile-application.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>

                    {/* EXTENDED TEAM */}
                    <div className='grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/team.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                    <div className="space-y-4 grid">
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-pink-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        EXTENDED TEAM
                        </h2>

                        </div>
                        <h2 className='text-pink-300 font-semibold text-lg'>                            
                        Let Us Assemble A Dream Team Of Developers And QA Specialists Just For You   
                            </h2>                    
                        <p className="text-white text-sm">
                        A way for part-time variable resources to function as full-time team members. The economic benefit of expanding resources without the fixed overhead. Having the right people on board is essential to the success of any business, from startups to multinational corporations.
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            Hire a full-time team
                        </a></Link>
                        </button>
                        
                    </div>

                    {/* QA & TESTING */}
                    <div className="space-y-4 grid">
                    <div className='grid md:hidden'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/testing.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-blue-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        QA & TESTING
                        </h2>

                        </div>
                        <h2 className='text-blue-300 font-semibold text-lg'>                            
                        QA Services & Software Testing - Manual & Automation Experts   
                            </h2>                    
                        <p className="text-white text-sm">
                        Good-quality work is an extension of good character, and we strive to achieve them both as a company and as individuals. We offer full-cycle testing and quality assurance services with manual and automated testing. Release faster, save money, improve user experience.
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            Fix your systems today
                        </a></Link>
                        </button>
                        
                    </div>
                    <div className='md:grid hidden'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/testing.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>

                    {/* STARTUP PACKAGE */}
                    <div className='grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/startup.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                    <div className="space-y-4 grid">
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-pink-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        STARTUP PACKAGE
                        </h2>

                        </div>
                        <h2 className='text-pink-300 font-semibold text-lg'>                            
                        “Creative, Innovative, Enterprise-Level Software Engineering Services For Startups”    
                            </h2>                    
                        <p className="text-white text-sm">
                        Startup companies need to quickly validate their ideas and assumptions about the market in order to find a product-market fit and acquire a sustainable income but developing the product while working hard to build a customer base and trying to find investment at the same time turns out to be a challenging job.
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            get the best for your startup
                        </a></Link>
                        </button>
                        
                    </div>

                    {/* SEO & PPC */}
                    <div className="space-y-4 grid">

                    <div className='md:hidden grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/seo.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                        <div className="flex justify-start items-center space-x-2">
                        <span className="text-blue-300 font-bold text-3xl">
                            |
                        </span>
                        <h2 className="uppercase text-gray-300 text-md md:text-2xl">
                        SEO & PPC
                        </h2>

                        </div>
                        <h2 className=' text-blue-300 font-semibold text-lg'>                            
                        If You're Looking For Serious Business Growth, SEO Is The Strategy For You    
                            </h2>                    
                        <p className="text-white text-sm">
                        Internet marketing techniques to reach the final goal: attract customers, increase brand awareness, company and product awareness, and to ensure the loyalty and trust of the target audience.
                        </p>                        
                        <button className='text-white border border-blue-700 bg-blue-700 rounded py-2 capitalize px-4 hover:bg-transparent hover:border-pink-300'>
                        <Link href="/contact-us"><a>
                            Increase traffic to your site
                        </a></Link>
                        </button>                        
                    </div>
                    <div className='hidden md:grid'>
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/seo.png"
                        width={2500} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    </div>
                </div>
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


export default OurServices;