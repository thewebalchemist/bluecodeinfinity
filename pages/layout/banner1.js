import Link from 'next/link'
import { IoCheckmarkSharp, IoRocketSharp, IoCopy, IoDesktop, IoSyncSharp } from "react-icons/io5";

const Banner1 = () => {
    return(
    <div className='pt-24'>
    
                {/* indigo b */}
                <div className='bg-blue-900 '>
                    <div className='grid grid-cols-3 gap-0'>
                        <div className=' grid col-span-2 space-y-10 py-28 px-20'>
                            <h2 className='font-extrabold text-5xl md:text-6xl text-white tracking-wide'>
                            So, shall we work together?
                            </h2>
                            <p className='flex justify-start items-center text-white md:text-2xl'>
                            It's time to show your ideas to the world in a professional way and achieve extraordinary results. Grab it all with 50% OFF on a limited promotion that's happening now.
                            </p>
                            <ul className='space-y-2'>
                                <li className='flex justify-start items-center text-white md:text-2xl'>
                                    <span><IoCheckmarkSharp /></span> Templates
                                </li>
                                <li className='flex justify-start items-center text-white md:text-2xl'>
                                    <span><IoCheckmarkSharp /></span> Unlimited saves
                                </li>
                                <li className='flex justify-start items-center text-white md:text-2xl'>
                                    <span><IoCheckmarkSharp /></span> Unlimited downloads
                                </li>
                                <li className='flex justify-start items-center text-white md:text-2xl'>
                                    <span><IoCheckmarkSharp /></span> Free updates with new resources
                                </li>
                                <li className='flex justify-start items-center text-white md:text-2xl'>
                                    <span><IoCheckmarkSharp /></span> For personal and client projects
                                </li>
                            </ul>
                        </div>
                        <div className='blue-image'>
                                        
                        </div>
                    </div>
                    </div>
    </div>
    )
}

export default Banner1;