import Link from 'next/link'
import Image from 'next/image'
import { IoArrowForwardOutline } from "react-icons/io5";

const Hero = () => {
    return(
        <div className="md:m md:p-14">

        {/* hero */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-2 p-5 lg:p-10">
            <div className="grid lg:col-span-2 space-y-10"> 
                <div className='text-gray-200 space-y-10'>
                    <h3 className='font-bold text-white text-5xl md:text-7xl'>
                    If You Can Imagine It, We Will <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400'>Design</span> and <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400'>Develop</span> It
                    </h3>
                    <p className='md:text-2xl text-sm tracking-widest'>
                    All in one <span className="">design-driven</span> development agency
                    </p>
                </div>
                
                <div className='flex flex-wrap justify-start items-center gap-6'>
                    <Link href="/work-samples">
                    <a>
                        <button className='flex rounded-full items-center py-3 px-8 bg-gradient-to-r from-pink-400 to-pink-600 text-white text-xl hover:bg-gradient-to-l hover:from-pink-400 hover:to-pink-600 font-semibold'>
                        <span>See Us In Action</span><span><IoArrowForwardOutline /></span> 
                        </button>
                    </a>
                    </Link>
                    </div>
                    </div>

            <div className='lg'>
            <img className="" 
                src="/images/hero.svg"
                alt=""
                width= {500} height= {500}
                layout='intrinsic'
                objectFit="cover"
            />
            </div>
        </div>
        </div>
    )
}

export default Hero;