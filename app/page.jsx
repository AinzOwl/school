"use client";
import { FaGoogle, FaDiscord, FaFacebook   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import Link from "next/link";
export default function Home() {
  return (
    <div className="w-[70vw] h-full flex flex-col gap-4 justify-center items-center">
       
            <div className="w-full max-w-sm p-6 dark:bg-gray-800 bg-white rounded-md shadow-lg">
                <div className="flex justify-center mx-auto">
                    <Link href="/"><h1 className="font-bold text-5xl">School</h1></Link>
                </div>

                <form className="mt-6">
                    <div>
                    <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                    <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <Link href="/recover" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</Link>
                    </div>

                    <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                    or login with Social Media
                    </span>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center justify-center mt-6 -mx-2">
                    <Link href="#" className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-[#ea4335]/80 rounded-lg hover:bg-[#ea4335]">
                        <FaGoogle className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-[#1877f2]/80 rounded-lg hover:bg-[#1877f2]">
                        <FaFacebook className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-black/80 rounded-lg hover:bg-black">
                        <FaSquareXTwitter  className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-[#7289da]/80 rounded-lg hover:bg-[#7289da]">
                        <FaDiscord className="w-5 h-5" />
                    </Link>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link href="/signup" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
            </div>
    </div>
  );
}
