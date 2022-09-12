import Image from 'next/image'
import Link from 'next/link'

const OurMission = () => {
    return(
        <div className="py-10 px-2">
        <h2 className="text-white text-center text-md md:text-2xl">
        Our mission is to deliver success to our clients, team members, and partner:
        </h2>
        <div className="grid md:grid-cols-2 gap-10 p-8">
            <div className="rounded-md border border-gray-300 relative">
                <div className=' p-10 space-y-4 z-50 text-left'>
                <h2 className="text-gray-300 text-2xl ">Clients</h2>
                <p className="text-white text-sm">
                In providing scalable tech solutions for businesses, we always go the extra mile. Before starting a collaboration, we first learn what success is for our clients. We take a proactive position when creating products and services by providing both business-oriented and technological expertise
                </p>
                </div>

                <div className='absolute opacity-30 bottom-0 right-0 '>
                <img src="/images/circle4.png" alt="" />
                </div>
                

                {/* <Image className="right-0 bottom-0"
                            alt="Image Alt"
                            src="/images/circle4.png"
                            width={1000} height= {100}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                /> */}
            </div>
            <div className="rounded-md border border-gray-300 relative">

                <div className=' text-left p-10 space-y-4'>
                    <h2 className=" text-gray-300 text-2xl ">People</h2>
                    <p className="text-white text-sm ">
                    People are our greatest asset. We believe in every team member and recognize every individual is unique. We ensure a perfect win-win collaboration based on trust and respect
                    </p>
                </div>


                <div className='absolute opacity-30 bottom-0 left-0'>
                <img src="/images/circle1.png" alt="" />
                </div>
            </div>


            <div className="rounded-md border border-gray-300 relative">
                <div className=' text-left p-10 space-y-4'>
                    <h2 className="text-gray-300 text-2xl ">Patners</h2>
                    <p className="text-white text-sm ">
                    We share and care, ensuring seamless and comfortable cooperation with our partners in all aspects of our collaboration
                    </p>
                </div>

                <div className='absolute opacity-30 top-0 right-0'>
                <img src="/images/circle3.png" alt="" />
                </div>
            </div>


            <div className="rounded-md border border-gray-300 relative">
                <div className=' text-left p-10 space-y-4'>
                    <h2 className="text-gray-300 text-2xl ">The World</h2>
                    <p className="text-white text-sm ">
                    We care about our country and the world around us and contribute to global sustainable development by promoting the ideas of equality and respect, perfect business ethics, and eco-awareness
                    </p>
                </div>

                <div className='absolute opacity-30 top-0 left-0'>
                <img src="/images/circle2.png" alt="" />
                </div>
            </div>
        </div>
    </div>        
    )
}

export default OurMission;