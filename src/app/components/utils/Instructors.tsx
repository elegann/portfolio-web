'use client'
// import { AnimatedTooltip } from "./ui/animated-tooltip"
const instructors = [
  {
      id: 1,
      name: "Abu Bakar",
      designation: "Fronted Developer",
      image: 'abzworld.png'
  },
  // {
  //     id: 2,
  //     name: "Muhammad",
  //     designation: "Backend Developer",
  //     image: 'https://working666.vercel.app/_next/image?url=%2Fmuhammad.png&w=128&q=75'
  // },
  // {
  //     id: 3,
  //     name: "Hafsa",
  //     designation: "Full Stack Developer",
  //     image: 'https://working666.vercel.app/_next/image?url=%2Fsyedahafsa.jpeg&w=128&q=75'
  // }
   ]



function Instructors() {
return (
  <div className="releative h-[40rem] overflow-hidden flex items-center justify-centre ">
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {/* <AnimatedTooltip items={instructors} /> */}
    </div>
  </div>
)
}

export default Instructors