import { getSortedTech, getAllTechIds, getTechData } from "../../DB/technologies"
import Image from 'next/image'
import Link from 'next/link'
import Technologies from "../layout/technologies"
import Head from 'next/head'

const SingleTech = ({tech, techData}) => {
    return(
        <main className="py-20 ">

                {/* The head section */}
                    <Head>
                        <title>{techData.techTitle} - {techData.techDescription}</title>
                        <meta name="description" content={`${techData.techDescription}`} />
                        <link rel="icon" href="/favicon.ico" />
                        <script src="https://cdn.tailwindcss.com"></script>
                        <script src="//code.jivosite.com/widget/U2A0sPgoOC" async></script>                        
                    </Head>

            <div className="flex flex-col justify-center space-y-10">
                <div className="bg-slider flex flex-col justify-center items-center space-y-4 p-5 md:p-40">
                    <img className="h-16" src={techData.techImage} alt="" />
                    <h1 className="text-center text-3xl text-white font-semibold tracking-widest">
                    {techData.techTitle}
                    </h1>
                    <p className="text-center text-pink-300 text-sm md:text-xl  tracking-widest">
                    {techData.techDescription}  
                    </p>
                </div>
                

                <div className='p-5 md:p-10 lg:px-52 text-gray-300 tracking-wider leading-loose'>
                    <div dangerouslySetInnerHTML={{ __html: techData.contentHtml }} >
                    </div> 
                </div>
            </div>

            <Technologies tech={tech} />

        </main>
    )
}
export async function getStaticPaths() {
    
    const paths = getAllTechIds()
    return {
        paths,
        fallback: false
    }
    }

export async function getStaticProps({ params }) {
    try
    {
        const techData = await getTechData(params.id);
        
        const tech = getSortedTech();
            return {
                props: {
                techData,
                tech
                }
            }
    }catch (error) {
            return {
            props: {
                tech: false
            }
        }
    }}

export default SingleTech;