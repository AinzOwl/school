"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[70vw] h-full flex flex-col gap-4 justify-center items-center">
       
            <div className="w-full max-w-sm p-6 dark:bg-gray-800 bg-white rounded-md shadow-lg">
                <div className="flex justify-center mx-auto">
                    <Link href="/"><h1 className="font-bold text-5xl">School</h1></Link>
                </div>

                <form className="mt-6">
                   
                    <div className="mt-4">
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    </div>

                    <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Reset
                    </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link href="/signup" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
            </div>
    </div>
  );
}
