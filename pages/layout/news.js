import Link from 'next/link'
import Image from 'next/image'

const News = () => {
    return (
        <div className="py-28 ">
            <div className='flex justify-between items-center w-full px-1 md:px-16'>
            <span className='caseText text-white font-semibold tracking-wider text-md md:text-2xl'>
                Latest Company News
                <hr className='w-1/3 border border-blue-600 caseLine' />
            </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 py-10 md:p-16 lg:p-28">
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/blog1.avif"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/blog2.avif"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/blog3.avif"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>               
            </div>
            <div className='flex justify-center items-center'>
            <span className='caseText text-indigo-500 font-semibold tracking-widest text-2xl '>
                <Link href='/blog'>
                <a>More News</a>
                </Link>
                <hr className='border border-white w-1/3 caseLine' />
            </span>
            </div>
        </div>
    )
}

export default News;