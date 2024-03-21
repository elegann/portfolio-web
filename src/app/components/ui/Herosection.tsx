import Link from "next/link"
import { Spotlight } from "./Spotlight"
import { Button, MovingBorder } from "../ui/moving-border";
function Herosection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center releative mx-auto py-10 md:py-0 ">
           <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 releative z-10 w-full text-center">
          <h1
          className={"mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"}>
            This Is Abu Bakar
            </h1>
          <p 
          className="Text">
            Abu Bakar bin Zohaib is a dynamic web developer <br /> known for crafting innovative digital experiences. <br /> With expertise in front-end and back-end  <br />development, he creates sleek websites and  <br />complex web applications. </p>
            <br />
          <div className="mt4">
          {/* <Link href={"/coursec"}
          className="link">
          <Button
          borderRadius="1.75rem"
          className={"bg-black dark:bg-black text-white dark:text-white border-neautral-200 dark:border-slate-800"}>
            Hire Me
          </Button>
          </Link> */}
          <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
Hire Me
</button>
          </div>
        </div>
 
      </div>
  )
}

export default Herosection