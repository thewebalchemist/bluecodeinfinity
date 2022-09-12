import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { getSortedPostsData , getAllPostIds, getPostData } from '../../DB/posts';
import dayjs from 'dayjs';

const SinglePost = ({ posts, postData }) => {

    

        if (!postData) return <p className='py-40 text-center text-white text-2xl '>Something is not right..</p>


    return (
        <main className="py-20 ">

                {/* The head section */}
                <Head>
                        <title>{postData.title}  | BlueCodeInfinity</title>
                        <meta name="description" content={`${postData.title}`} />
                        <link rel="icon" href="/favicon.ico" />
                        <script src="https://cdn.tailwindcss.com"></script>
                        <script src="//code.jivosite.com/widget/U2A0sPgoOC" async></script>                        
                    </Head>

                        <div class="px-4 mx-auto w-full max-w-8xl">
                            <div class="lg:flex">

                            {/* table of content on smaller devices*/}
                            <div class="lg:hidden flex-none w-auto h-auto xl:block inset-4">
                                    <div class="flex flex-col justify-center items-start h-auto sticky scrolling-touch max-h-(screen-18) pt-5 lg:pt-20 top-10 pb-6 space-y-2">
                                        <h3 className='uppercase text-gray-300 text-2xl'>
                                            Table of Contents Table of Contents
                                        </h3>
                                        <ul className='text-white space-y-2'>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                        </ul>
                                        <hr className='w-full lg:hidden' />
                                    </div>
                                </div>
                                {/* main content */}
                                <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
                                    <div class="flex w-full">
                                        {/* content */}
                                        <div className="flex-auto min-w-0 max-w-4xl lg:pt-10 lg:pb-16 space-y-8">
                                            <div>
                                                <h1 className="text-xl font-bold md:text-5xl text-white ">
                                                {postData.title}
                                                </h1>
                                            </div>                      
                                            <div className="flex justify-start space-x-5 text-gray-500 tracking-wide">
                                                <span>By {`${postData.author}`}</span>
                                                <span className="text-white font-semibold">|</span>
                                                <span>
                                                {dayjs(postData.date).format('MMMM D, YYYY')}</span>
                                            </div>
                                            <div>
                                                <div>
                                                {/* <img  className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" src = {postData.featured_image} alt="" /> */}
                                                    <Image  className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                                                    alt={postData.featured_image_alt}
                                                    src = {postData.featured_image}
                                                    width={2400} height= {1500}
                                                    layout="intrinsic"
                                                    objectFit="cover" // Scale your image down to fit into the container
                                                />
                                                </div>

                                        <div className='py-5 md:py-10 md:px-10 text-gray-300 tracking-wider leading-loose'>
                                                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} ></div> 
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>



                            {/* table of content on larger devices */}
                                <div class="hidden flex-none w-64 h-auto lg:block inset-4">
                                    <div class=" h-screen sticky scrolling-touch max-h-(screen-18) pt-20 top-10 pb-6 space-y-2">
                                        <h3 className='uppercase text-gray-300 text-2xl'>
                                            Table of Contents Table of Contents
                                        </h3>
                                        <ul className='text-white space-y-2'>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                            <li>Fintech Solutions</li>
                                        </ul>
                                    </div>
                                </div>

                        </div>
                        </div>


                        {/* <div className='col-span-1 hidden lg:block py-10 space-y-5'>
                        <div className='flex justify-between items-center w-full'>
                        <span className='caseText text-white font-semibold tracking-wider text-md md:text-2xl uppercase'>
                        <hr className='w-full border-2 border-blue-600'/>
                            Most Read
                            
                        </span>
                        </div>
                        <div className='grid gap-10'>
                            
                            {posts.map(({ id, title, featured_image, featured_image_alt }) => (
                                <div key={id} className="rounded-md ">
                                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                                        alt=""
                                        src = {featured_image}
                                        width={2400} height= {1500}
                                        layout="responsive"
                                        objectFit="cover" // Scale your image down to fit into the container
                                    />
                                    <div className="p-4 ">
                                    <Link href={`/posts/${id}`}>
                                    <a className="text-gray-200 text-xl hover:underline">
                                    {title}
                                    </a>
                                    </Link>
                                    </div>                
                                </div>
                            ))}
                        </div>                       
                    </div> */}









                <div>
                    <Link href="/">
                        <a className='text-blue-500 hover:underline text-lg tracking-wider'>
                            Back to Home
                        </a>
                    </Link>
                </div>
                <div className='md:p-10 space-y-10'>
                    <h3 className='underline text-white tracking-wide text-2xl font-semibold'>
                        Related Articles
                    </h3>
                    <div className='grid lg:grid-cols-3 gap-10'>
                    {posts.map(({ id, date, title, featured_image, featured_image_alt }) => (
                        <Link href={`/posts/${id}`}>
                        <a>
                        <div className="rounded-md ">
                            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                                alt=""
                                src = {featured_image}
                                width={2400} height= {1500}
                                layout="responsive"
                                objectFit="cover" // Scale your image down to fit into the container
                            />
                            <div className="p-4 ">
                            
                            <h2 className="text-gray-200 font-bold text-xl hover:underline">
                            {title}
                            </h2>
                            </div>                
                        </div>                        
                        </a>
                        </Link>
                    ))}

                    </div>
                </div>            
        </main>

    )
}


export async function getStaticPaths() {
    
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
    }

export async function getStaticProps({ params }) {
    try
    {
        const postData = await getPostData(params.id);
        
        const posts = getSortedPostsData();
            return {
                props: {
                postData,
                posts
                }
            }
    }catch (error) {
            return {
            props: {
                posts: false
            }
        }
    }}

export default SinglePost;