
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa"
import Image from 'next/image'


const Testimonials = () => {
    return (
        <div className='py-10 lg:py-28'>
        <div className='flex justify-between items-center w-full px-4 pb-6 md:p-16'>
        <div>
            <span className='text-white font-semibold tracking-wider text-2xl md:text-2xl'>
            Some people just chose to be different
            </span>
        </div>
        </div>

        
        <Splide tag="div"
                    options={ {
                        rewind: true,
                        type: 'loop',
                        gap: '20rem',
                        autoplay: false,
                        pauseOnHover : false,
                        resetProgress: false,
                        perPage: 1,
                        padding: 1
                        
                        
                    } }
                    aria-label="testimonials"
                    >
                    <SplideSlide>
                    <div className="grid md:grid-cols-3 gap-1 md:gap-5 p-2 md:p-20">
                <div className="flex justify-center items-center space-x-5">
                    <div className=" flex flex-row space-x-4 md:space-x-0 md:flex-col space-y-2 md:justify-center justify-between  items-center">
                    <div>
                    <span className="text-white text-3xl font-bold ">
                    5
                    </span>
                    </div>                    
                    <div className='flex justify-center items-center gap-2 md:flex-wrap py-4 font-bold'>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStarHalfAlt /></span>
                        </div>
                    </div>
                    <div className="border-none md:border-2 border-white h-32 ">
                    </div>
                </div>
                <div className="flex col-span-2 flex-col space-y-4">
                    <div className=''>
                        <span className="text-white text-2xl">
                            <FaQuoteLeft />
                        </span>
                    </div>
                    <div>
                        <p className="text-white tracking-widest leading-tigter text-xs md:text-2xl">
                        They are professional and enthusiastic and always willing to provide insight and suggestions for improving accessibility and functionality of a site or project. Could recommend them highly enough!
                        </p>
                    </div>
                    <div>
                        <span className="text-gray-400 text-sm md:text-md tracking-widest">
                            Mike Hernandez, Founder Influenso
                        </span>
                    </div>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="grid md:grid-cols-3 gap-5 p-2 md:p-20">
                <div className="flex justify-center items-center space-x-5">
                    <div className=" flex flex-row space-x-4 md:space-x-0 md:flex-col space-y-2 md:justify-center justify-between  items-center">
                    <div>
                    <span className="text-white text-3xl font-bold ">
                    5
                    </span>
                    </div>                    
                    <div className='flex justify-center items-center gap-2 md:flex-wrap py-4 font-bold'>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                        </div>
                    </div>
                    <div className="border-none md:border-2 border-white h-32 ">
                    </div>
                </div>
                <div className="flex col-span-2 flex-col space-y-4">
                    <div className=''>
                        <span className="text-white text-2xl">
                            <FaQuoteLeft />
                        </span>
                    </div>
                    <div>
                        <p className="text-white tracking-widest leading-tigter text-xs md:text-2xl">
                        It's often far too easy for companies to take the low road and just chase the dollar. The team here has always held themselves to a higher standard in their work, in their actions, and their corporate ethos. Starting another great chapter in an amazing story. Thanks!
                        </p>
                    </div>
                    <div>
                        <span className="text-gray-400 text-sm md:text-md tracking-widest">
                            Jennifer Lyn, Owner Sheeld.net
                        </span>
                    </div>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="grid md:grid-cols-3 gap-5 p-2 md:p-20">
                <div className="flex justify-center items-center space-x-5">
                    <div className=" flex flex-row space-x-4 md:space-x-0 md:flex-col space-y-2 md:justify-center justify-between  items-center">
                    <div>
                    <span className="text-white text-3xl font-bold ">
                    4.9
                    </span>
                    </div>                    
                    <div className='flex justify-center items-center gap-2 md:flex-wrap py-4 font-bold'>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStarHalfAlt /></span>
                        </div>
                    </div>
                    <div className="border-none md:border-2 border-white h-32 ">
                    </div>
                </div>
                <div className="flex col-span-2 flex-col space-y-4">
                    <div className=''>
                        <span className="text-white text-2xl">
                            <FaQuoteLeft />
                        </span>
                    </div>
                    <div>
                        <p className="text-white tracking-widest leading-tigter text-xs md:text-2xl">
                        The value we get from them and their quality work set them apart from others.
                        </p>
                    </div>
                    <div>
                        <span className="text-gray-400 text-sm md:text-md tracking-widest">
                            Alex Leao, Founder OneWayy
                        </span>
                    </div>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="grid md:grid-cols-3 gap-5 p-2 md:p-20">
                <div className="flex justify-center items-center space-x-5">
                    <div className=" flex flex-row space-x-4 md:space-x-0 md:flex-col space-y-2 md:justify-center justify-between  items-center">
                    <div>
                    <span className="text-white text-3xl font-bold ">
                    5
                    </span>
                    </div>                    
                    <div className='flex justify-center items-center gap-2 md:flex-wrap py-4 font-bold'>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                        </div>
                    </div>
                    <div className="border-none md:border-2 border-white h-32 ">
                    </div>
                </div>
                <div className="flex col-span-2 flex-col space-y-4">
                    <div className=''>
                        <span className="text-white text-2xl">
                            <FaQuoteLeft />
                        </span>
                    </div>
                    <div>
                        <p className="text-white tracking-widest leading-tigter text-xs md:text-2xl">
                        They were very innovative and left nothing to be desired. Fantastic work that put me on the path of more clients
                        </p>
                    </div>
                    <div>
                        <span className="text-gray-400 text-sm md:text-md tracking-widest">
                            Imali Zainab, Founder BeautyPlug
                        </span>
                    </div>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="grid md:grid-cols-3 gap-5 p-2 md:p-20">
                <div className="flex justify-center items-center space-x-5">
                    <div className=" flex flex-row space-x-4 md:space-x-0 md:flex-col space-y-2 md:justify-center justify-between  items-center">
                    <div>
                    <span className="text-white text-3xl font-bold ">
                    4.9
                    </span>
                    </div>                    
                    <div className='flex justify-center items-center gap-2 md:flex-wrap py-4 font-bold'>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStarHalfAlt /></span>
                        </div>
                    </div>
                    <div className="border-none md:border-2 border-white h-32 ">
                    </div>
                </div>
                <div className="flex col-span-2 flex-col space-y-4">
                    <div className=''>
                        <span className="text-white text-2xl">
                            <FaQuoteLeft />
                        </span>
                    </div>
                    <div>
                        <p className="text-white tracking-widest leading-tigter text-xs md:text-2xl">
                        Another tool for me to use in my marketing work, which by the way is bringing me encouraging results. Thank you very much BlueCode.
                        </p>
                    </div>
                    <div>
                        <span className="text-gray-400 text-sm md:text-md tracking-widest">
                            Martin Churchill, PayGo
                        </span>
                    </div>
                </div>
            </div>
                    </SplideSlide>
                    
            </Splide>

        {/* Trusted By teams' */}
        {/* <div className='bg-black py-5 md:py-10 w-full items-center'>
            <div className='grid grid-cols-3 lg:grid-cols-5 space-y-5 gap-0 items-center'>
            <div className="flex justify-center items-center">
            <Image 
                className='' 
                src="/images/monster.png"
                alt=""
                width={200}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
            <div className="flex justify-center items-center">
            <Image 
                className='' 
                src="/images/unilever.png"
                alt=""
                width={200}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
            <div className="flex justify-center items-center">
            <Image 
                className='' 
                src="/images/saas.png"
                alt=""
                width={200}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
            <div className="flex justify-center items-center">
            <Image 
                className='' 
                src="/images/poshmarklogo-2.svg"
                alt=""
                width={200}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
            <div className="flex justify-center items-center">
            <Image 
                className='' 
                src="/images/bt.png"
                alt=""
                width={200}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>

            </div>
        </div> */}
        </div>
    )
}

export default Testimonials;