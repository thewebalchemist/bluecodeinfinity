import { IoCheckmarkSharp, IoRocketSharp, IoCopy, IoDesktop, IoSyncSharp } from "react-icons/io5";

const Features = () => {
    return(
        <div>
        <div className='bg-black bg-texture flex flex-col py-10 px-5 md:py-20 md:px-28 items-start space-y-10'>
        <div className=''>
                <h2 className='font-extrabold text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-700 tracking-wide'>
                Who We Work With
                </h2>
        </div>
            {/* black background */}
            <div className='grid lg:grid-cols-2 gap-10 py-10 items-center  '>
    
                <div className='grid space-y-4'>

                <div className="flex flex-col gap-5 justify-start space-y-4 border border-gray-700 rounded-2xl p-2 md:p-5">
                    <div className='flex justify-start space-x-2 items-center '>
                    <span className='p-3 rounded-full text-green-600 bg-green-300/20  '>
                            <IoCheckmarkSharp />
                        </span>
                        <p className="text-gray-200 text-sm md:text-md">
                        Startup founders and SME owners with great
                         ideas and want a great online presence for the services they offer.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-start space-y-4 border border-gray-700 rounded-2xl p-2 md:p-5">
                    <div className='flex justify-start space-x-2 items-center '>
                    <span className='p-3 rounded-full text-green-600 bg-green-300/20  '>
                            <IoCheckmarkSharp />
                        </span>
                        <p className="text-gray-200 text-sm md:text-md">
                        People who are prepared to make serious time and money investments. 
                        Making things great takes time and money.
                         If this is you, we are happy to join you on this journey.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-start space-y-4 border border-gray-700 rounded-2xl p-2 md:p-5">
                    <div className='flex justify-start space-x-2 items-center '>
                    <span className='p-3 rounded-full text-green-600 bg-green-300/20  '>
                            <IoCheckmarkSharp />
                        </span>
                        <p className="text-gray-200 text-sm md:text-md">
                        You are an existing site owner that wants to build and grow your website. 
                        If you want to add new features or do a website overhaul, you have come to the right place.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-start space-y-4 border border-gray-700 rounded-2xl p-2 md:p-5">
                    <div className='flex justify-start space-x-2 items-center '>
                    <span className='p-3 rounded-full text-green-600 bg-green-300/20  '>
                            <IoCheckmarkSharp />
                        </span>
                        <p className="text-gray-200 text-sm md:text-md">
                        Entrepreneurs that have an existing audience that 
                        they serve and that trusts them. 
                        You don't have to know what kind of online content you will provide them. We can do that together.


                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-start space-y-4 border border-gray-700 rounded-2xl p-2 md:p-5">
                    <div className='flex justify-start space-x-2 items-center '>
                        <span className='p-3 rounded-full text-green-600 bg-green-300/20  '>
                            <IoCheckmarkSharp />
                        </span>
                        <p className="text-gray-200 text-sm md:text-md">
                        People who are highly committed. If you're dedicated to making this work - We are happy to work with you on your project.
                        </p>
                    </div>
                </div>
                </div>
                <div className='grid '>
                        <img className="" 
                            src="https://media4.giphy.com/media/a1ozTru4HLWcf1eoJQ/giphy.gif"
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

export default Features;