import Link from 'next/link'
import Image from 'next/image'
import Banner1 from './layout/banner1'
import { getSortedPostsData } from '../DB/posts'
import dayjs from 'dayjs';
import Head from 'next/head'

export default function News  ({posts}) {
    
    if (!posts) return <p className='py-40 text-center text-white text-2xl '>Something is not right..</p>
    return (
        <main>
                {/* The head section */}
                    <Head>
                    <title>Our Blog - Learn about the value we bring to businesses</title>
                    <meta name="description" content="We build tech teams and transform industries by creating scalable and meaningful software products" />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://cdn.tailwindcss.com"></script>                  
                </Head>


        <div className="pb-28 py-20">
            <div className= "bg-opacity-10 bg-gradient-to-b  from-indigo-500 to-purple-800 h-auto w-full p-10 flex flex-col space-y-8 justify-center  items-center">
                <h1 className="font-sans tracking-widest text-5xl text-white font-semibold ">
                Our Blog
                </h1>
                <hr className='bg-white border w-32 mx-4 md:mx-24' />

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 lg:p-28">
                {posts.map(({ id, date, title, author, featured_image, featured_image_alt }) => (
                <Link href={`/posts/${id}`}>
                    <a>
                <div className="grid rounded-md">
                    {/* <img  className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" src={featured_image} alt="" /> */}
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        src = {featured_image} alt = {featured_image_alt}
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 space-y-4">
                    
                    <h1 className="text-gray-100 text-xl hover:underline">
                    {title}                    
                    </h1>
                    <div className='flex justify-between text-gray-400'>
                        <span>{dayjs(date).format('MMMM D, YYYY')}</span>
                        <span className='font-bold text-blue-400'>|</span>
                        <span>By {author}</span>
                    </div>
                    </div>                
                </div>
                </a>
                </Link>
            ))}
            </div>



            {/* banner starts */}
            <Banner1 />
            {/* banner ends*/}
        </div>
        </main>
    )}



export async function getStaticProps() {
    try {
        const posts = getSortedPostsData()

        return {
            props: {
                posts
            }
        };
    } catch (error) {
        return {
            props: {posts:false}
        };
    }
        
};
