"use client";
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImCheckboxUnchecked } from "react-icons/im";
import { CiSettings, CiHome, CiWavePulse1, CiMedicalClipboard, CiLogout  } from "react-icons/ci";


import Link from "next/link";
export default function Dashboard() {
    const info = {
        name: "ainz"
    }
    const exams = [
        {
            id: "1",
            class: "2end bac",
            branch: "science technique electronique",
            year: 2015,
            grade: 50
        },
        {
            id: "2",
            class: "2end bac",
            branch: "science technique electronique",
            year: 2016,
            grade: 30
        },
        {
            id: "3",
            class: "2end bac",
            branch: "science technique electronique",
            year: 2017,
            grade: -1
        },
        {
            id: "4",
            class: "2end bac",
            branch: "science technique electronique",
            year: 2018,
            grade: -1
        },
        {
            id: "5",
            class: "2end bac",
            branch: "science technique electronique",
            year: 2019,
            grade: 0
        },
    ]
  return (
    <div className="w-[70vw] h-full flex flex-col gap-4 justify-center items-center">
       
        <div className="w-full py-6 flex dark:bg-gray-800 bg-white rounded-md shadow-lg">
            <aside className="flex flex-col overflow-hidden items-center w-16 h-full justify-center p-6 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
                <nav className="flex flex-col flex-1 space-y-6">
                    <Link href="/" className="font-bold text-4xl text-center">
                        S
                    </Link>
                    
                    <Link href="/" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <CiHome className="size-6"/>
                    </Link>

                    <Link href="/stats" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <CiWavePulse1 className="size-6"/>
                    </Link>

                    <Link href="/marks" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <CiMedicalClipboard className="size-6"/>
                    </Link>

                    <Link href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <CiSettings className="size-6"/>
                    </Link>

                    <button className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <CiLogout className="size-6"/>
                    </button>
                </nav>
            </aside>  
            <div className="flex flex-col w-full  gap-2 pl-2 pr-4">
                <section className="container px-4 mx-auto w-full">
                            <div className="flex flex-col">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Class
                                                        </th>

                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Branch
                                                        </th>

                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Exam Year
                                                        </th>

                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                            Grade
                                                        </th>
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    { exams.map((exam) => (
                                                        <tr key={exam.id}>
                                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{exam.class}</td>
                                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{exam.branch}</td>
                                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{exam.year}</td>
                                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500  dark:bg-gray-800">
                                                                    

                                                                    {(exam.grade >= 0) && (
                                                                        <>
                                                                            <IoMdCheckboxOutline className="size-4"/>
                                                                            <h2 className="text-sm font-normal">{exam.grade}</h2>
                                                                        </>
                                                                    )}
                                                                    {(exam.grade < 0) && (
                                                                          <>
                                                                          <ImCheckboxUnchecked className="size-3"/>
                                                                          <h2 className="text-sm font-normal">Ungraded</h2>
                                                                      </>
                                                                    )}

                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                <div className="flex items-center gap-x-6">
                                                                    <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                                        {(exam.grade >= 0) && (
                                                                            'Redo'
                                                                        )}
                                                                        {(exam.grade < 0) && (
                                                                            'Exercise'
                                                                        )}
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-6 w-full">
                                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                

                                    <span>
                                        previous
                                    </span>
                                </a>

                                <div className="items-center hidden md:flex gap-x-3">
                                    <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                                </div>

                                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                    <span>
                                        Next
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                    </section>
            </div>
        </div>
    </div>
  );
}
