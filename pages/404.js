import Image from "next/image"
import Link from "next/link"

const Custom404 = () => {
    return (
        <div className="py-20 lg:px-40">
            <div className="flex justify-center">
                <Image
                    alt="Image Alt"
                    src="/images/404.gif"
                    width={300} height= {300}
                    layout="intrinsic"
                    objectFit="cover" // Scale your image down to fit into the container
                />
            </div>
            <div className="text-center py-20 space-y-10">
                <p className="text-white text-6xl tracking-widest">
                    OH NO! 404!
                </p>
                <p className="text-gray-300 text-2xl">
                    We could not find the page you are looking for
                </p>
                <div className="flex justify-center space-x-10">
                    <Link href="/blog">
                    <a className="text-blue-300 border border-pink-300 px-4 py-2 rounded hover:text-pink-300 hover:border-blue-300">
                        Check out blog page
                    </a>
                    </Link>
                    
                    <Link href="/">
                    <a className="text-blue-300 border border-pink-300 px-4 py-2 rounded hover:text-pink-300 hover:border-blue-300">
                        Go home
                    </a>
                    </Link>
                </div>

            </div>
        </div>
    )}

export default Custom404;