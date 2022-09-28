import Testimonials from "./layout/testimonials"
import { getSortedPostsData } from "../DB/posts"
import Contactus from './contact-us'
import Head from 'next/head'

const TestimonialsPage = ({posts}) => {
    return(
        <main>
            
            {/* The head section */}
            <Head>
                    <title>Testimonials</title>
                    <meta name="description" content="Testimonials" />
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://cdn.tailwindcss.com"></script>                  
                </Head>

        <div className="">
            <Testimonials />
 
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

export default TestimonialsPage;