import {  SiLinkedin, SiTwitter, SiFacebook } from "react-icons/si";

const Contactus = () => {
    return(
        <div className="py-10 md:py-20 md:px-24 z-10">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col justify-start items-start space-y-8 bg-gray-300 rounded-md shadow-2xl p-8 md:p-16">
                    <h1 className="text-gray-900 text-xl md:text-3xl font-semibold tracking-widest">
                        Send Us a Message
                    </h1>
                    <form className="flex flex-col space-y-8" action="/">
                        <input className="py-3 pl-6 md:pr-32 bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="text" placeholder="Full Name" />
                        <input className="py-3 pl-6 md:pr-32 bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="email" placeholder="Email" />
                        <input className="py-3 pl-6 md:pr-32 bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="num" placeholder="Phone" />
                        <textarea id="messagebody"className=" w-full p-4 resize text-gray-800 bg-transparent border border-blue-400 rounded-md hover:border-blue-800 focus:outline-none" rows="4" required  type="text" placeholder="Message"></textarea>
                        <button className='hover:bg-indigo-900 bg-blue-600 text-white font-medium py-3 px-6 rounded-full tracking-widest '>
                        Contact us
                    </button>
                    </form>
  
                </div>
                <div className="bg-blue-300 mt-5 md:mt-0 p-16 flex flex-col space-y-8 md:-ml-5  rounded-md shadow-2xl">
                    <h1 className="text-gray-900 text-2xl font-semibold tracking-widest">
                        What&lsquo;s Next?
                    </h1>
                    <ul className="list-disc text-indigo-900 text-xl space-y-6 ">
                        <li className="tracking-wide leading-9">
                        An email and phone call from one of our representatives.
                        </li>
                        <li className="tracking-wide leading-9">
                        A time & cost estimation.
                        </li>
                        <li className="tracking-wide leading-9">
                        Choosing the partnership format
                        </li>
                    </ul>
                    <div className="py-6">
                        <h1 className="text-gray-800 text-lg font-semibold ">
                            Send Us an Email
                        </h1>
                        <a className="text-sm text-blue-700" href="">support@blucodeinfinity.com</a>
                    </div>
                    <div>
                        <h1>
                            Social Media
                        </h1>
                    <div className="flex justify-start items-center gap-5 text-2xl text-blue-900">
                        <a href=""><SiTwitter /></a>
                        <a href=""><SiFacebook /></a>
                        <a href=""><SiLinkedin /></a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default  Contactus;