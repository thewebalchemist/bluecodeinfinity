import { getSortedCaseStudies } from "../../DB/casestudies"
import { getCaseStudyData, getAllCaseStudyIds } from "../../DB/casestudies"
import Image from 'next/image'
import Link from 'next/link'

const SingleCaseStudy = ({caseStudies, caseStudyData}) => {
    return(
        <main className="py-20">
            <div className="py-10 px-5 lg:px-52 flex flex-col justify-center space-y-10">
                <div>
                    <h1 className="text-xl font-bold md:text-3xl text-white font-semibold">
                    {caseStudyData.projectDescription}
                    </h1>
                </div>

                <div className="">
                {/* <img className="rounded-md " src = {caseStudyData.projectImage} alt="" /> */}
                <Image src = {caseStudyData.projectImage}  className="rounded-md " 
                alt=""                
                width={2400} height= {1500}
                layout="intrinsic"
                objectFit="cover" // Scale your image down to fit into the container
            />
                </div>

                <div>
                    <h1 className="text-pink-300 text-2xl font-bold md:text-4xl tracking-wider">
                        About the project
                    </h1>
                </div>

                <div className='md:p-10 text-gray-300 tracking-wider leading-loose'>
                    <div dangerouslySetInnerHTML={{ __html: caseStudyData.contentHtml }} >
                    </div> 
                </div>
            </div>

            <div>
                <div className="grid lg:grid-cols-3 gap-10 p-5 md:p-10">                          
                            {caseStudies.map(({ id, projectTags, projectDescription, projectImage }) => (
                                <Link href={`/casestudies/${id}`}>
                                    <a>
                                <div className="rounded-md ">
                                    {/* <img className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" src={projectImage} alt="" /> */}
                                    <Image src={projectImage} className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                                        alt=""
                                        
                                        width={2400} height= {1500}
                                        layout="responsive"
                                        objectFit="cover" // Scale your image down to fit into the container
                                    />
                                    <div className="p-4 text-center">
                                        <div>
                                            <span className="text-gray-400 text-smvtracking-widest">{projectTags}</span>
                                        </div>
                                        <div>
                                            <h2 className="text-gray-200 text-xl font-bold hover:underline">
                                                { projectDescription }                                    
                                            </h2>
                                        </div>
                                    
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
    
    const paths = getAllCaseStudyIds()
    return {
        paths,
        fallback: false
    }
    }

export async function getStaticProps({ params }) {
    try
    {
        const caseStudyData = await getCaseStudyData(params.id);
        
        const caseStudies = getSortedCaseStudies();
            return {
                props: {
                caseStudyData,
                caseStudies
                }
            }
    }catch (error) {
            return {
            props: {
                caseStudies: false
            }
        }
    }}

export default SingleCaseStudy;