// import { Interface } from "readline";
// import abz_courseData from "../components/data/abz_coursec.json";
// import Link from "next/link";
// interface Courses{
//   id: number,
//   title: string,
//   slug: string,
//   descriptions: string,
//   price: number,
//   instructor: string,
//   isfeautered: boolean,
// }
// type Course = /*unresolved*/ any
// const FeauteredProjects =  function FeauteredProjects() {
//  abz_courseData.courses.filter((course:Course) => course.isfeautered)
//   return (
//    <div className="py-12 bg-gray-900 ">
//     <div>
//       <div className="text-center">
//         <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featered Projects</h2>
//         <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">Learn and Earn Money </p>
//       </div>
//     </div>
//     <div className="mt-10">
//    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">;

//    </div>
//     </div>
//     <div
//     className="mt-20 text-center">
//       <Link href={"/coursec"}
//       className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-black-100 transition duration-200">
//         View All Projects </Link>
//     </div>
//    </div>
//   )
// }

// export default FeauteredProjects



"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function FeauteredProjects() {
  return (
    <section>
      <center>
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
         Login Or Sign  Up Form
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 center">
         Login or Sign Up Form Where You Can Login And Sign up.
         </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>See Now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            On Google
          </span>
        </button>
        <br />
        <br />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
          OLX clone
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 center">
        OLX clone Using Next.js To Improve My Coding And Become Next.js Developer
         </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>See Now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            On Google
          </span>
        </button>
        <br />
        <br />
          </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
      Todo App Using Type Script
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 center">
        Todo App Using Type Script or Javascript
         </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>See Now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            On Google
          </span>
        </button>
        <br />
        <br />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
     Calculater Using TypeScript Javascript
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 center">
       I am  Using TypeScript or Javascript   to make a Calculater. 
         </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>See Now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            On Google
          </span>
        </button>
        <br />
        <br />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
       Code Stodio Using Html Or Css.
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 center">
       I Have Use HTML CSS to make a Code Stodio
         </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>See Now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            On Google
          </span>
        </button>
        <br />
        <br />
      </BackgroundGradient>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
     Atm Using TS OR JS
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 center">
       I Have  Use TypeScript or Javascript   to make a ATM. 
         </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>See Now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            On Google
          </span>
        </button>
        <br />
        <br />
      </BackgroundGradient>
    </div>
    </center>
    </section>
  );
}

export default FeauteredProjects