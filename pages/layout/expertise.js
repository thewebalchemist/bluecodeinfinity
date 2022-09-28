import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Expertise = ()  => {

    const [activeExpertise , setActiveExpertise] = useState("healthcare");

    return(
        <div className="pt-24">

            {/* on smaller devices starts */}
            <div className='px-2 lg:hidden'>
                <h2 className="text-gray-200 text-3xl font-semibold tracking-widest">
                Our industries expertise
                </h2>
                <div className='grid grid-cols-2 gap-2 py-5'>
                    <Link href="/expertise/healthcare">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            01
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Healthcare
                        </h2>
                    </div>
                    </a>
                    </Link>

                    <Link href="/expertise/education">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            02
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Education
                        </h2>
                    </div>
                    </a>
                    </Link>
                    <Link href="/expertise/logistics">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            03
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Logistics
                        </h2>
                    </div>
                    </a>
                    </Link>
                    <Link href="/expertise/marketplace">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            04
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Marketplace
                        </h2>
                    </div>
                    </a>
                    </Link>
                    <Link href="/expertise/media">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            05
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Media
                        </h2>
                    </div>
                    </a>
                    </Link>
                    <Link href="/expertise/retail">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            06
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Retail
                        </h2>
                    </div>
                    </a>
                    </Link>
                    <Link href="/expertise/fintech">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            07
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Fintech
                        </h2>
                    </div>
                    </a>
                    </Link>
                    <Link href="/expertise/travel">
                    <a>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            08
                        </span>
                        <h2 className='text-white text-lg font-semibold'>
                            Travel
                        </h2>
                    </div>
                    </a>
                    </Link>
                </div>
            </div>
             {/* on smaller devices ends */}

              {/* on larger devices starts */}
            <div className="hidden lg:grid grid-cols-3 space-x-20">
                <div className="col-span-1 px-4 space-y-8">
                    <h1 className="text-gray-200 text-5xl font-semibold tracking-widest">
                        Our industries expertise
                    </h1>
                    <ul className="px-5 space-y-8">                        
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">01</span>
                        <span onClick={() => setActiveExpertise('healthcare')} className={`${activeExpertise === 'healthcare' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Healthcare
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">02</span>
                        <span onClick={() => setActiveExpertise('education')} className={`${activeExpertise === 'education' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Education
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">03</span>
                        <span onClick={() => setActiveExpertise('logistics')} className={`${activeExpertise === 'logistics' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Logistics
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">04</span>
                        <span onClick={() => setActiveExpertise('marketplace')} className={`${activeExpertise === 'marketplace' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Marketplace
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">05</span>
                        <span onClick={() => setActiveExpertise('media')} className={`${activeExpertise === 'media' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Media
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">06</span>
                        <span onClick={() => setActiveExpertise('retail')} className={`${activeExpertise === 'retail' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Retail
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">07</span>
                        <span onClick={() => setActiveExpertise('fintech')} className={`${activeExpertise === 'fintech' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Fintech
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">08</span>
                        <span onClick={() => setActiveExpertise('travel')} className={`${activeExpertise === 'travel' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Travel
                        </span>                        
                        </li>
                    </ul>
                </div>
                <div className={`${activeExpertise === 'healthcare' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/healthcare.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-gray-400 text-3xl">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    </div>
                <div className={`${activeExpertise === 'education' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/education.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-gray-400 text-3xl">
                    Education app development services provided by Blue Code Infinity
                     empower learning experience for students, teachers, and administrations

                    </h1>
                </div>
                <div className={`${activeExpertise === 'logistics' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/logistics.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h2 className="text-gray-400 text-3xl">
                    Logistics Software Development Services
                     that we offer cover all sides of industry processes and boost business
                    </h2>
                </div>
                <div className={`${activeExpertise === 'marketplace' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/marketplace.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h2 className="text-gray-400 text-3xl">
                    We build a B2B, B2C, or C2C marketplace 
                    considering your objectives and meeting user expectations to boost conversions.
                    </h2>
                </div>
                <div className={`${activeExpertise === 'media' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/media.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h2 className="text-gray-400 text-3xl">
                    Media and Entertainment software services and advanced tech solutions from Blue Code Infinity 
                    enhance the product's competitiveness and help deliver a drastically new user experience
                    </h2>
                </div>
                <div className={`${activeExpertise === 'retail' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/retail.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h2 className="text-gray-400 text-3xl">
                    We create software solutions that improve 
                    customer experience, expand client base and improve back-office operations.
                    </h2>
                </div>
                <div className={`${activeExpertise === 'fintech' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/fintech.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h2 className="text-gray-400 text-3xl">
                    Financial software development services that help automate processes, 
                    improve transaction security, and put the latest FinTech technologies at the service of your business
                    </h2>
                </div>
                <div className={`${activeExpertise === 'travel' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/travel.png"
                        width={900} height= {500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h2 className="text-gray-400 text-3xl">
                    We're a travel app development company
                     delivering top-notch solutions for startups and established travel companies.
                    </h2>
                </div>

            </div>
             {/* on larger devices ends */}
        </div>
    )
}
export default Expertise;