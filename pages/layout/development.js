import Link from 'next/link'
import Image from 'next/image'
const DevelopmentApproach = () => {
    return(

        <div className="bg-black flex flex-col py-10 px-5 md:py-20 md:px-20 space-y-10">
            <div className="flex">
                <h2 className="text-white font-bold tracking-widest text-2xl md:text-7xl capitalize">
                    Our Development Approach
                </h2>
            </div>
            <div className=' grid lg:grid-cols-2 gap-10'>
            <div className='grid col-span-1'>            
            <div className="grid md:grid-cols-2 gap-10">
                
            <div className="grid">
                <div className="flex flex-col justify-start items-start space-y-3 border border-gray-700 p-4">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                        deadline <br/> compliance
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Quickly react to new market changes and demands with relevant software thanks to our custom framework
                    </p>
                </div>
                </div>
                
                <div className="grid">
                <div className="flex flex-col justify-start items-start space-y-3 border border-gray-700 p-4">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Delivery  <br/> optimization
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Ensure regular and smooth releases and feature updates with enhanced development velocity
                    </p>

                </div>
                </div>
                <div className="grid">
                <div className="flex flex-col justify-start items-start space-y-3 border border-gray-700 p-4">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Staff <br/> retention
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Get motivated and long-term development teams with our efficient retention programs and techniques
                    </p>

                </div>
                </div>

                <div className="grid">
                <div className="flex-col justify-start items-start space-y-3 border border-gray-700 p-4">
                    <h2 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Customer  <br/> success management
                    </h2>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Make sure that your feedback is properly translated to our development team with a customer success manager
                    </p>

                    </div>
                </div>
            </div>
            <div className='flex py-10'>
                <Link href="/about">
                <a>
                <button className='flex  border border-blue-600 hover:text-blue-600 hover:border-white items-center py-3 px-8 text-white lg:text-xl hover:bg-gradient-to-l md:font-semibold'>
                How we approach projects
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
                layout='intrinsic'
                objectFit=""
            ></Image>
            </div>
            </div>
        </div>
    )
}
export default DevelopmentApproach;