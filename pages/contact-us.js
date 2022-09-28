import {  SiLinkedin, SiTwitter, SiFacebook } from "react-icons/si";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import dayjs from 'dayjs';
import Head from 'next/head'

const Contactus = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState('false');

    const handleSubmit = (e) => {
        e.preventDefault()

        let userData = {
            name,
            email,
            num,
            message
        }

        fetch ('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((res) => {
            if (res.status === 200) {
                alert('Your message is received, we shall contact you ASAP')
                setSubmitted(true);
                setName('');
                setEmail('');
                setNum('');
                setMessage('')
            }
            location.reload();
        })
    }


    return(
        <main>
        
      {/* The head section */}
        <Head>
            <title>Bluecode Infinity - Your premium software development patner</title>
            <meta name="description" content="We create scalable and meaningful hi-tech solution for your business" />
            <link rel="icon" href="/favicon.ico" />
            <script src="https://cdn.tailwindcss.com"></script>
            
        </Head>

        <div className="py-20 md:pt-40 z-10">
            {/* on smaller devices */}
            <div className="md:hidden m-2">
                <div className="bg-gray-300 p-5 space-y-5 rounded">
                    <h1 className="text-gray-900 text-xl md:text-3xl font-semibold tracking-widest">
                            Send Us a Message
                    </h1>
                    <form  onSubmit={ (e)=> {handleSubmit(e)}} className="space-y-8 " action="/">
                        <input className="p-3 w-full bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="text" onChange={ (e)=> {setName(e.target.value)}} placeholder="Full Name" required={true} />
                        <input className="p-3 w-full bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="email" onChange={ (e)=> {setEmail(e.target.value)}} placeholder="Email" required />
                        <input className="p-3 w-full bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="tel" onChange={ (e)=> {setNum(e.target.value)}} placeholder="Phone" required />
                        <textarea id="messagebody"className="p-3 w-full resize text-gray-800 bg-transparent border-2 border-blue-400 rounded-md hover:border-blue-800 focus:outline-none" rows="4" required  type="text" onChange={ (e)=> {setMessage(e.target.value)}} placeholder="Message"></textarea>
                        <button type="submit" className='w-full hover:bg-indigo-900 bg-blue-600 text-white font-medium py-3 px-6 rounded-full tracking-widest '>
                        Contact us
                        </button>
                    </form>
                </div>

                <div className="bg-blue-300 mt-5 p-10 flex flex-col space-y-8 rounded shadow-2xl">
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


            {/* on larger devices */}
            <div className="hidden md:flex flex-col md:px-20 md:flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-8 bg-gray-300 rounded-md shadow-2xl md:p-16">
                    <h1 className="text-gray-900 text-xl md:text-3xl font-semibold tracking-widest">
                        Send Us a Message
                    </h1>
                    <form  onSubmit={ (e)=> {handleSubmit(e)}} className="flex flex-col space-y-8 w-full" action="/">
                        <input className="p-3 bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="text" onChange={ (e)=> {setName(e.target.value)}} placeholder="Full Name" required={true} />
                        <input className="p-3 bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="email" onChange={ (e)=> {setEmail(e.target.value)}} placeholder="Email" required />
                        <input className="p-3 bg-transparent border-2 border-blue-400 text-gray-800 rounded-md hover:border-blue-800 focus:outline-none" type="tel" onChange={ (e)=> {setNum(e.target.value)}} placeholder="Phone" required />
                        <textarea id="messagebody"className=" w-full p-3 resize text-gray-800 bg-transparent border-2 border-blue-400 rounded-md hover:border-blue-800 focus:outline-none" rows="4" required  type="text" onChange={ (e)=> {setMessage(e.target.value)}} placeholder="Message"></textarea>
                        <button type="submit" className='hover:bg-indigo-900 bg-blue-600 text-white font-medium py-3 px-6 rounded-full tracking-widest '>
                        Contact us
                        </button>
                    </form>
                    
                </div>
                <div className="bg-blue-300 mt-5 md:mt-0 p-16 m-2 md:m-0 flex flex-col space-y-8 md:-ml-5  rounded-md shadow-2xl">
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
        </main>
    )
}

export default  Contactus;