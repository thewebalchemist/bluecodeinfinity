
import Image from "next/image";
import { IoCheckmarkSharp, IoRocketSharp, IoCopy, IoDesktop, IoSyncSharp, IoCheckmarkDone} from "react-icons/io5";

const Services = () => {
    return(
        <div>
        <div className="px-5 md:px-20 py-12">
            <div className="py-12  flex flex-col justify-center items-center ">
                <h2 className="text-white text-center font-bold tracking-widest text-lg md:text-7xl">
                    Softwares, Websites, Logos & more
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:py-10">

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20  '>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Website development 
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        App development 
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Logos & Branding 
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        SAAS 
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Design systems
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Billboards
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Social media graphics
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Social media graphics
                        </h4>
                </div>
                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Business cards
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Digital Ads
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Resumes
                        </h4>
                </div>

                <div className="col gridService flex justify-start items-center space-x-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                <span className='p-3 rounded-full text-white bg-gray-300/20'>
                            <IoCheckmarkDone />
                        </span>
                        <h4 className="text-center text-gray-300 md:text-md">
                        Email graphics
                        </h4>
                </div>
            </div>
        </div>
        {/* Add on */}
        <div className="bg-texture bg-black flex flex-col justify-center items-center py-10">
            <div className="grid grid-cols-4 gap-2">
                <div>
                <img className="" 
                            src="https://media4.giphy.com/media/RkX2zcpO79EAf82ESl/giphy.gif"
                            alt=""
                            width= {550} height= {500}
                            layout='intrinsic'
                            objectFit="cover"
                        />
                </div>
                <div className="grid col-span-2">
                    <div className="flex flex-col justify-center items-center py-10">
                    <button className='hover:bg-indigo-900 bg-orange-500 text-white tracking-widest py-2 px-4 rounded-full'>
                    Add Ons
                    </button>                    
                    
                    <div className='flex flex-col justify-center items-center space-y-2 p-5'>
                    <h2 className='text-white text-center text-lg lg:text-3xl font-bold tracking-wider leading-tight '>
                    SEO Optimization & Article Writing
                    </h2>
                    <h3 className='text-white text-center text-xs leading-loose md:px-16 font-medium md:text-sm'>
                        Lets optimize your website to get good ranking and traffic. The best ranking tools are in your favor. With elements scattered in strategic places on your site, they abundantly improve your profile in search results and put your site on Google's best practices route.
                    </h3>
                    </div>
                    </div>
            </div>
                <div>
                <img className="" 
                            src="https://media4.giphy.com/media/XhNWPTmb8zbFrmEQFT/giphy.gif"
                            alt=""
                            width= {550} height= {500}
                            layout='intrinsic'
                            objectFit="cover"
                        />
                </div>

            </div>
        </div>
        </div>
    )
}

export default Services;