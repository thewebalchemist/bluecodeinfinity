import Link from 'next/link'
import Image from 'next/image'

const TextSection = () => {
    return (
        <section className='py-10'>
            {/* ratings */}
        <div className='bg-black py-2 grid grid-cols-3 gap-10'>
            <div className="flex justify-center items-center">
            <Image 
                className='' 
                src="/images/crunchbase.png"
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
                src="/images/trustpilot.png"
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
                src="/images/google.png"
                alt=""
                width={200}
                height={100}
                layout='intrinsic'
                objectFit='cover'
                />
            </div>
        </div>
        <div className='bgImage flex justify-center items-center text-center py-20 px-2 lg:px-40'>
            <div className='flex flex-col justify-center'>
                <div>
                <h2 className='text-white font-thin text-5xl md:text-8xl '>
                We Design. We Build. We Improve.
                </h2> 
                </div>
                <div className=''>
                <p className='text-white text-sm tracking-wider leading-7 md:leading-9'>
                We believe, our clients deserve to be remarkable in their business. The studio develops the products people appreciate all around the world.
                </p>
            </div>              
            </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-10 p-2 md:p-10 '>
            {/* For You */}
            <div className='grid items-center justify-center'>
                <h3 className='text-white text-3xl py-3 text-center'>
                    for you
                </h3>
                <img className='rounded-2xl'
                    alt="for your brand"
                    src="/images/for-you.gif"
                    width={500} height= {500}
                    layout="responsive"
                    objectFit="cover" // Scale your image down to fit into the container
                />

            </div>
             {/* For You */}
            <div className='grid items-center justify-center'>
                <h3 className='text-white text-3xl py-3 text-center'>
                    for your brand
                </h3>
                <img className='rounded-2xl'
                    alt="for your brand"
                    src="/images/for-your-business.gif"
                    width={500} height= {500}
                    layout="responsive"
                    objectFit="cover" // Scale your image down to fit into the container
                />

            </div>

        </div>
        </section>
    )
}

export default TextSection;