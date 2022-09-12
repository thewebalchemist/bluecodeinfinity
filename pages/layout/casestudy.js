import Link from 'next/link'
import Image from 'next/image'
import { SiReact, SiFigma, SiTailwindcss, SiNodedotjs, SiWordpress, SiPhp, SiMysql  } from "react-icons/si"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const CaseStudy = () => {
    return(
        // case study section starts
        <div className='pt-20 md:pt-28'>
            <div className=" flex flex-col justify-center items-center ">
                <h2 className="text-gray-300 font-thin tracking-widest text-center text-md md:text-lg">
                    DEVELOPMENT
                </h2>
                <h1 className="text-white text-center font-bold tracking-widest text-lg md:text-3xl uppercase">
                    recent works
                </h1>
            </div>

            <Splide tag="div"
                    options={ {
                        rewind: true,
                        gap   : '1rem',
                        perPage: 1,
                        padding: 1
                    } }
                    aria-label="casestudies"
                    >
                    <SplideSlide>
                        <Link href="https://vacant.co.ke/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/vacant.svg" 
                                alt=""
                                width={1200}
                                height={800}
                                layout='responsive'
                                />
                        </div>
                            </a>
                        </Link>                        
                    </SplideSlide>
                    <SplideSlide>
                    <Link href="/">
                            <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/unfeed.svg" 
                                alt=""
                                width={1200}
                                height={800}
                                layout='responsive'
                                />
                        </div>
                            </a>
                    </Link>                        
                    </SplideSlide>
                    <SplideSlide>
                    <Link href="https://bluecodeinfinity.com/">
                        <a>
                        <div className=''>
                            <Image 
                            className='' 
                            src="/images/bluecodee.svg" 
                            alt=""
                            width={1200}
                            height={800}
                            layout='responsive'
                            />
                        </div>
                        </a>
                    </Link>                        
                    </SplideSlide>
                    <SplideSlide>
                    <Link href="">
                        <a>
                        <div className=''>
                                <Image 
                                className='' 
                                src="/images/newb.svg" 
                                alt=""
                                width={1200}
                                height={800}
                                layout='responsive'
                                />
                        </div>
                        </a>
                    </Link>                        
                    </SplideSlide>
            </Splide>

        </div>
        // case study section ends
    )
}

export default CaseStudy;