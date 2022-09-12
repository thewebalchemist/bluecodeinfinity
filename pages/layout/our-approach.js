import Link from 'next/link'
import Image from 'next/image'

const OurApproach = () => {
    return(
    <div id="approach" className="md:p-10 p-5">
                    <h2 className="text-center uppercase tracking-widest text-pink-300 md:text-2xl">
                        This is how we will approach your project
                    </h2>              
                    <div className="md:grid md:grid-cols-2 md:gap-20 md:p-20 p-5 space-y-4">
    
                        {/* Research approach */}
                        <div className="space-y-4 md:grid ">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-blue-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Research
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            After talking with the customer, we begin our research. We look at particular details about the product in order to better understand the market it is going into.
                            </p>
                        </div>
                        <div className="md:grid hidden">
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/research.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
    
    
                        {/* Wireframe approach */}
                        <div className="md:grid hidden">
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/wireframe.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
                        <div className="space-y-4 grid">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-pink-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Wireframe
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            If the customer gives the project concept a “go”, the next step is to create wireframes. Wireframes are interactive schematic pages of the site or application’s screens, like a screen blueprint.
                            </p>
                        </div>
    
                        {/* get feedback approach*/}
                        <div className="space-y-4 grid">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-blue-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Get Feedback
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            We provide wireframes, get feedback from the customer, make changes, and get feedback again. These iterations are repeated until all of the project’s details are thought over well, carried out, and approved by the client.
                            </p>
                        </div>
                        <div className="md:grid hidden">
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/feedback1.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
    
                        {/* Design approach*/}
                        <div className="hidden md:grid">
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/design.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
                        <div className="space-y-4 grid">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-pink-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Design
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            With the wireframes, we can move on to designing a conceptual the application’s homepage or first few screen designs. To do so, we take into account the wireframes and moodboard which was created after doing the research.
                            </p>
                        </div>
    
                        {/* Prototype approach*/}
                        <div className="space-y-4 grid">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-blue-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Prototype
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            A prototype is an early sample of a product created to test a concept or process. A prototype is used to evaluate a new design to improve the accuracy of analysts and system users. Prototypes are a crucial part of the design process and a practice used in all design disciplines.
                            </p>
                        </div>
                        <div className="hidden md:grid">
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/prototype.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
    
                        {/* get feedback approach*/}
                        <div className="hidden md:grid">
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/feedback2.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
                        <div className="space-y-4 grid">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-pink-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Get feedback
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            We provide the hi-fi clickable prototypes include visual design (color, typography, etc.) and almost represent the final product, test the concept and get feedback from the client to make sure the concept works, approve the concept before starting the development.
                            </p>
                        </div>
    
                        {/* Development approach*/}
                        <div className="space-y-4">
                            <div className="flex justify-start items-center space-x-2">
                            <span className="text-blue-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                                Development
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            The software design is translated into source code. All the components of the software are implemented in this phase. The team communicates with business stakeholders throughout the process to ensure that the project is going in the right direction.
                            </p>
                        </div>
                        <div className='hidden md:grid'>
                        <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                            alt="Image Alt"
                            src="/images/development.svg"
                            width={2000} height= {1000}
                            layout="responsive"
                            objectFit="" // Scale your image down to fit into the container
                        />
                        </div>
    
                        {/* DEMO AND LAUNCH approach*/}
                        <div className="space-y-4 col-span-2 text-left md:text-center md:p-20">
                            <div className="flex md:justify-center items-center space-x-2">
                            <span className="text-pink-400 font-bold text-3xl">
                                |
                            </span>
                            <h2 className="uppercase text-gray-300 md:text-2xl">
                            DEMO AND LAUNCH
                            </h2>
                            </div>                        
                            <p className="text-white text-sm">
                            After all of the hard work has been done, after we’ve taken the steps of the design process and development, the final product is demonstrated and launched and our customers can revel in the celebrations! If you are looking for a team of designers project managers and developers for your project or if you have more questions about the design process, please don’t hesitate to contact us!
                            </p>
                        </div>
    
                    </div>
    </div>
    )
}

export default OurApproach;