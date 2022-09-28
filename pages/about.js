import {  SiLinkedin, SiTwitter, SiFacebook } from "react-icons/si";
import Image from 'next/image'
import BlueCodeinNumbers from "./layout/numbers";
import OurApproach from "./layout/our-approach";
import OurMission from "./layout/our-mission";
import Contactus from "./contact-us";
import { getSortedPostsData } from "../DB/posts";
import Head from 'next/head'

const AboutUs = ({posts}) => {
    return(
        <main>
            {/* The head section */}
                <Head>
                    <title>About Us - We build tech teams and transform industries by creating scalable and meaningful software products</title>
                    <meta name="description" content="We build tech teams and transform industries by creating scalable and meaningful software products" />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://cdn.tailwindcss.com"></script>
                    
                </Head>



            <div className="py-20">
            {/* Top banner */}
            <div className= "bg-opacity-10 bg-gradient-to-b from-indigo-500 to-purple-800 h-auto w-full p-10 flex flex-col space-y-8 justify-center items-center">
                <h1 className="font-sans tracking-widest text-5xl text-white font-semibold ">
                About Us
                </h1>
                <p className="font-sans tracking-widest text-sm text-white font-semibold text-center">
                We build tech teams and transform industries by creating scalable and meaningful software products
                </p>
                <hr className='bg-white border w-32 mx-4 md:mx-24' />                
            </div>

            {/* Our approach */}
            <OurApproach />


            {/* Our Mission */}
            <OurMission />

            {/* Bluecode in numbers */}
            <BlueCodeinNumbers />

            {/* contact us and blog */}
            <Contactus posts={posts} />
            </div>
        </main>
        
    )
}

export async function getStaticProps() {
    try {
        const posts = getSortedPostsData();
        return {
            props: {
                posts
            }
        };
    } catch (error) {
        return {
            props: {
            posts:false
            }
        };
    }
        
};

export default AboutUs;