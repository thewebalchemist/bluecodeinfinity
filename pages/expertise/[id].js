import { getSortedExpertise, getAllExpertiseIds, getExpertiseData } from "../../DB/expertise"
import Image from 'next/image'
import Link from 'next/link'

const SingleExpertise = ({expertise, expertiseData}) => {
    return(
        <main className="py-20">
            <div className="py-10 p-5 lg:px-52 flex flex-col justify-center space-y-10">
                <div>
                    <h1 className="text-3xl text-white font-semibold">
                    {expertiseData.expertiseTitle}
                    </h1>
                </div>

                <div className="">
                <Image src = {expertiseData.expertiseImage}  className="rounded-md " 
                alt=""
                
                width={2400} height= {1500}
                layout="intrinsic"
                objectFit="cover" // Scale your image down to fit into the container
            />
                </div>

                <div>
                    <h1 className="text-pink-300 text-xl tracking-wide">
                    {expertiseData.expertiseDescription}  
                    </h1>
                </div>

                <div className='md:p-10 text-gray-300 tracking-wider leading-loose'>
                    <div dangerouslySetInnerHTML={{ __html: expertiseData.contentHtml }} >
                    </div> 
                </div>
            </div>

            <div>
            <h2 className="text-pink-300 text-lg font-bold p-4">
                        Check out our other expertise
                        </h2> 
                <div className="grid lg:grid-cols-3 gap-10 p-5 md:p-10">   
                            {expertise.map(({ id, expertiseTitle,  expertiseImage }) => (
                                <Link href={`/expertise/${id}`}>
                                <a>
                                <div className="rounded-md ">
                                    <Image src={ expertiseImage} className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                                        alt=""
                                        
                                        width={2400} height= {1500}
                                        layout="responsive"
                                        objectFit="cover" // Scale your image down to fit into the container
                                    />
                                    <div className="p-4 text-center">
                                        <div>
                                            <h1 className="text-gray-200 text-lg font-bold hover:underline">
                                                {expertiseTitle}
                                            </h1>
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
    
    const paths = getAllExpertiseIds()
    return {
        paths,
        fallback: false
    }
    }

export async function getStaticProps({ params }) {
    try
    {
        const expertiseData = await getExpertiseData(params.id);
        
        const expertise = getSortedExpertise();
            return {
                props: {
                expertiseData,
                expertise
                }
            }
    }catch (error) {
            return {
            props: {
                expertise: false
            }
        }
    }}

export default SingleExpertise;