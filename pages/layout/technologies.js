import { getSortedTech } from "../../DB/technologies"
import Image from 'next/image'
import Link from 'next/link'

const Technologies = ({tech}) => {
    return(        
        <div>
        <h2 className="text-white text-2xl capitalize px-10">
                    Latest Technologies we use
                    </h2> 
            <div className="grid grid-cols-2 lg:grid-cols-7 gap-10 p-5 md:p-10"> 

                        {tech && tech.map(({ id, techTitle,  techImage }) => (
                            <Link key={id} href={`/technologies/${id}`}>
                            <a>
                            <div className="rounded-md relative border border-gray-500 p-4">
                                <Image src={techImage} className="rounded-md opacity-20 hover:opacity-40"
                                    alt=""                                    
                                    width={500} height= {500}
                                    layout="responsive"
                                    objectFit="cover" // Scale your image down to fit into the container
                                />
                                <div className="bottom-0 p-2 left-0 absolute">
                                    <div className=" text-center">
                                        <h1 className="text-white text-md tracking-widest hover:underline">
                                            {techTitle}
                                        </h1>
                                    </div>
                                    </div>                
                            </div>
                            </a>
                            </Link>
                        ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    try {
        const tech = getSortedTech()
        return {
            props: {
                tech
            }
        };
    } catch (error) {
        return {
            props: {tech:false}
        };
    }
        
};


export default Technologies;