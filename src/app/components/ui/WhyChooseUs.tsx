"use client";
import React from "react";
// import { StickyScroll } from "../sticky-scroll-reveal";
import Image from "next/image"
const webdevelopment = [
    {
      title: "Web development",
      description:
        "Web development involves the creation of dynamic and interactive websites or web applications that are accessible via the.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Web Development
        </div>
      ),
    },
    {
      title: "App Development",
      description:
      "App development crafts mobile software solutions for smartphones and tablets, harnessing languages like Java, Kotlin, or Swift. From idea to deployment, it tailors seamless experiences, leveraging native, hybrid, or cross-platform frameworks to meet diverse user needs.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
         <p>App Development</p>
        </div>
      ),
    },
    {
      title: "Graphic Designing",
      description:
        "Graphic designing shapes visual communication through creative use of typography, imagery, and layout. With tools like Adobe Photoshop and Illustrator, designers craft compelling visuals for branding, marketing, and digital content. From logos to advertisements, they blend artistry and strategy to captivate audiences and convey messages effectively.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      Graphic designing
        </div>
      ),
    },
    {
      title: "Skills",
      description:
      "Skills encompass a diverse range of abilities and competencies acquired through learning and experience. They enable individuals to perform tasks effectively and achieve desired outcomes in various domains. From technical proficiencies to soft skills like communication and problem-solving, mastering skills empowers personal and professional growth.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         Skills
        </div>
      ),
    },
  ];


function WhyChooseUs() {
  return (
    <div>
      {/* <StickyScroll content={webdevelopment}></StickyScroll> */}
    </div>
  )
}

export default WhyChooseUs