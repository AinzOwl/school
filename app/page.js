"use client";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogOut } from "react-icons/io";
import { PiNotebookThin } from "react-icons/pi";
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
            <RxDashboard />
          </Link>
          <ul>
            <li className="text-4xl font-semibold text-neutral-900 hover:text-primary-500 duration-300 transition-all ease-in-out">
              <PiNotebookThin />
            </li>
            <li className="text-4xl font-semibold text-neutral-900 hover:text-primary-500 duration-300 transition-all ease-in-out">
              <CiPen />
            </li>
          </ul>
          <Link href="/favicon.ico" rel="icon" className="text-4xl">
            <IoMdLogOut />
          </Link>
        </nav>
        <div className="w-full min-h-full bg-white z-10 rounded-lg p-8">
          <div className="w-full flex items-center justify-end">
            <button className="bg-primary-500 text-neutral-50 hover:text-neutral-200 bg-neutral-800 hover:bg-neutral-950 duration-300 transition-all ease-in-out px-4 py-2 rounded-lg">Submit</button>
          </div>
          <h1 className="text-2xl font-semibold">Questions</h1>
          <h1 className="text-lg font-semibold">{question.question}</h1>
          <div className="w-full flex gap-2 items-center">
            <div className="w-3/5 flex flex-col gap-4">
              <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex flex-col gap-4">
                    <form className="w-full grid grid-cols-2 gap-4">
                      {question.options.map((option, index) => (
                        <div key={index} className="w-full flex w- items-center justify-between p-4 border-2 border-neutral-200 rounded-lg">
                          <span>{option}</span>
                          <input type="radio" name="question" />
                        </div>
                      ))}
                    </form>
                  </div>
              </div>
              </div>
            <div className="w-2/5 flex flex-col gap-4">
              <ProgressBar
                hidden={false}
                progress={5}
                finish={10}
                className="my-5 cool-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
