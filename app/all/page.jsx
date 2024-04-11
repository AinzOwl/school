"use client";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile, CgSearch, CgFolder, CgLogOut  } from "react-icons/cg";
import { CiPen } from "react-icons/ci";


import Link from "next/link";
import ProgressBar from "@/components/Progress";
export default function Home() {
  var questions = [
    {
      "question": "What is the capital of Nigeria?",
      "options": ["Lagos", "Abuja", "Kano", "Ibadan"],
    },
    {
      "question": "What is the name of the first president of Nigeria?",
      "options": ["Nnamdi Azikiwe", "Obafemi Awolowo", "Tafawa Balewa", "Olusegun Obasanjo"],
    }
  ];
  const style = { "--value": 70 }

  var  question = questions[1];
  return (
    <div className="w-[70vw] h-full flex flex-col gap-4 justify-center items-center">
      <div className="w-full h-4/5 flex items-center justify-end">
        <nav className="w-28 flex flex-col gap-8 justify-between p-4 z-0 -mr-5 pr-9 border-4 border-white items-center bg-neutral-300/90 h-full rounded-xl">
          <Link href="/" className="text-4xl font-semibold text-neutral-900 hover:text-primary-500 duration-300 transition-all ease-in-out">
            <CgFolder />
          </Link>
          <ul>
            <li className="text-3xl font-semibold text-neutral-900 hover:text-primary-500 duration-300 transition-all ease-in-out">
              <CgSearch />
            </li>
            <li className="text-3xl font-semibold text-neutral-900 hover:text-primary-500 duration-300 transition-all ease-in-out">
              <CgProfile />
            </li>
          </ul>
          <Link href="#" className="text-3xl">
            <CgLogOut />
          </Link>
        </nav>
        <div className="w-full min-h-full bg-white z-10 rounded-lg p-8">
         
        </div>
      </div>
    </div>
  );
}
