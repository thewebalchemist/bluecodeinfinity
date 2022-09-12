
import Link from 'next/link'
import Image from 'next/image'

const ImageGallery = () => {
    return (
        <div className='p-2 md:px-0 py-28'>
            <div className=" py-10 flex flex-col ">
                <h2 className='text-white text-center font-bold tracking-widest text-lg md:text-7xl'>
                Recent Design Projects
                </h2>
            </div>

            <div className='grid grid-cols-2 gap-5 py-5 px-20'>
                <div className=''>
                                        <Image 
                                        className='' 
                                        src="/images/landingpages/5.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                                <div className=''>
                                        <Image 
                                        className='' 
                                        src="/images/landingpages/3.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                                <div className=''>
                                        <Image 
                                        className='' 
                                        src="/images/landingpages/2.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                                <div className=''>
                                        <Image 
                                        className='' 
                                        src="/images/landingpages/4.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        layout='intrinsic'
                                        objectFit='cover'
                                        />
                                </div>
                </div>
        
                <div className="grid md:grid-cols-3 gap-4 overflow-auto will-change py-5">
        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/graphics/3.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/9.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>

        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="row-span-3 col-span-2">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/graphics/10.png"  
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            
            
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/graphics/6.png"
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            
            
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/graphics/7.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/graphics/11.png"  
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/graphics/4.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>

        
        <div className="grid md:grid-rows-2 md:grid-flow-row gap-4">
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/10.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="md:col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/flyer/6.png" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
        </div>
            </div>
        </div>    
        
    );
}
export default ImageGallery;