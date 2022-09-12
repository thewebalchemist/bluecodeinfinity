import { SiFigma, SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-gray-800 px-5 py-10 md:px-24 footer">
            <div className="grid md:grid-cols-2 gap-10 py-10 ">
                <div className="grid space-y-2">
                <hr className='w-full border border-gray-500' />
                <h1 className="text-white uppercase tracking-widest text-xl font-semibold">
                    contacts
                </h1>
                </div>
                <div className="grid flex flex-wrap flex-col space-y-3">
                    <div className="flex justify-start items-center gap-5 text-2xl text-blue-500">
                        <a href=""><SiTwitter /></a>
                        <a href=""><SiFacebook /></a>
                        <a href=""><SiLinkedin /></a>
                        <a href=""><SiInstagram /></a>
                        <a href=""><SiFigma /></a>
                        <a href=""><SiGithub /></a>
                    </div>
                    <div className="">
                        <a className="text-sm text-blue-600" href="">support@blucodeinfinity.com</a>
                    </div>
                </div>
                

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10">
                <div className="space-y-6">
                    <h1 className="text-gray-400 uppercase text-md ">
                        company
                    </h1>
                    <ul className="list-style-none space-y-4">
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500 ">
                            <a className="" href="">About us</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Why Bluecode</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Meet the team</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Blog</a>
                        </li>
                    </ul>
                </div>


                <div className="space-y-6">
                    <h1 className="text-gray-400 uppercase text-md ">
                        services
                    </h1>
                    <ul className="list-style-none space-y-4">
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500 ">
                            <a className="" href="">Application Development</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Product Design</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Dedicated Team</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">System Assesment</a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h1 className="text-gray-400 uppercase text-md ">
                        success stories
                    </h1>
                    <ul className="list-style-none space-y-4">
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500 ">
                            <a className="" href="">Case Studies</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Testimonials</a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h1 className="text-gray-400 uppercase text-md ">
                        technologies
                    </h1>
                    <div className="flex flex-row gap-5">
                    <ul className="list-style-none space-y-4">
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500 ">
                            <a className="" href="">Wordpress</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">React</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Nextjs</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">PHP</a>
                        </li>
                    </ul>

                    <ul className="list-style-none space-y-4">
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500 ">
                            <a className="" href="">Laravel</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Java</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Flutter</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">React Native</a>
                        </li>
                    </ul>
                    
                    <ul className="list-style-none space-y-4">
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500 ">
                            <a className="" href="">Figma</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Adobe</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Canva</a>
                        </li>
                        <li className="text-gray-200 text-sm tracking-wide hover:tracking-widest hover:text-blue-500">
                            <a className="" href="">Corel Draw</a>
                        </li>
                    </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;