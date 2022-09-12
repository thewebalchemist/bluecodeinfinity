import Link from 'next/link'
import Image from 'next/image'
const DevelopmentApproach = () => {
    return(

        <div className="bg-black flex flex-col py-10 px-5 md:py-20 md:px-20 space-y-10">
            <div className="flex">
                <h2 className="text-white font-bold tracking-widest text-md md:text-7xl capitalize">
                    Our Development Approach
                </h2>
            </div>
            <div className=' grid grid-cols-2 gap-10'>
            <div className='grid col-span-1'>            
            <div className="grid md:grid-cols-2 gap-10">

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-gray-700 p-4 rounded-2xl ">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                        deadline <br/> compliance
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Quickly react to new market changes and demands with relevant software thanks to our custom framework
                    </p>
                </div>

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-gray-700 p-4 rounded-2xl">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Delivery  <br/> optimization
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Ensure regular and smooth releases and feature updates with enhanced development velocity
                    </p>

                </div>

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-gray-700 p-4 rounded-2xl">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Staff <br/> retention
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Get motivated and long-term development teams with our efficient retention programs and techniques
                    </p>

                </div>

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-gray-700 p-4 rounded-2xl">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Customer  <br/> success management
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Make sure that your feedback is properly translated to our development team with a customer success manager
                    </p>

                </div>
            </div>
            <div className='flex py-10'>
                <Link href="/about">
                <a>
                <button className='capitalize text-sm md:text-md tracking-wide rounded-md hover:text-white border border-blue-600 p-3 md:py-3 md:px-6 hover:border-pink-300 text-pink-300'>
                    How do we approach your projects?
                </button>
                </a>
                </Link>
            </div>
            </div>
            <div>
            <Image className="" 
                src="/images/black-image.svg"
                alt=""
                width= {500} height= {500}
                layout='responsive'
                objectFit=""
            ></Image>
            </div>
            </div>
        </div>
    )
}
export default DevelopmentApproach;