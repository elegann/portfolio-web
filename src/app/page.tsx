
// // import React from 'react';
// // import FeauteredProjects from "../app/components/utils/FeauteredProjects";
// // import Herosection from "./components/ui/Herosection";
// // import WhyChooseUs from "./components/ui/WhyChooseUs";
// // import { TextRevealCard } from "../app/components/ui/Text-reveal-card"; // Assuming TextRevealCard is exported as a named export
// // import { BackgroundBeams } from './components/ui/background-beams';
// // import Image from"./components/ui/image"
// // export default function Home() {
// //   return (
// //     <main className="min-h-screen bg-blue-[0.96] antialiased bg-grid-white/[0.02]">
// //       <h1 className="text-2xl text-center"></h1>
// //       <Herosection />
// //       <FeauteredProjects />
// //       <br />
// //       <br />
// //       <center>
// //       <TextRevealCard text="Hi I am Abu Bakar" revealText="I am a Web Developer" />
// //       <BackgroundBeams />
// //       <Image />
// //       </center>
// //     </main>
// //   );
// // }
// import React from 'react';
// import FeauteredProjects from "../app/components/utils/FeauteredProjects";
// import Herosection from "./components/ui/Herosection";
// import WhyChooseUs from "./components/ui/WhyChooseUs";
// import { TextRevealCard } from "../app/components/ui/Text-reveal-card";
// import { BackgroundBeams } from './components/ui/background-beams';
// import {3d-pin} from "./components/ui/3d-pin" // Note the correct import path

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-blue-[0.96] antialiased bg-grid-white/[0.02]">
//       <h1 className="text-2xl text-center"></h1>
//       <Herosection />
//       <FeauteredProjects />
//       <br />
//       <br />
//       <center>
//         <TextRevealCard text="Hi I am Abu Bakar" revealText="I am a Web Developer" />
//         <BackgroundBeams />
//         {/* <Image /> Use the imported Image component */}
//       </center>
//     </main>
//   );
// }
import React from 'react';
import FeauteredProjects from "../app/components/utils/FeauteredProjects";
import Herosection from "./components/ui/Herosection";
import WhyChooseUs from "./components/ui/WhyChooseUs";
import { TextRevealCard } from "./components/ui/Text";
import { BackgroundBeams } from './components/ui/background-beams';
import ThreeD from "./components/ui/ThreeD"; // Corrected import statement
import { CardStack } from './components/ui/CardStack';
import { ImagesSlider } from './components/ui/images-slider';
import footer from './components/ui/abz';
import { AuroraBackground } from './components/ui/aurora-background';
export default function Home() {
  return (
    <main className="min-h-screen bg-blue-[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>
      <Herosection />
      <FeauteredProjects />
      <br />
      <br />
      <center>
        <TextRevealCard text="Hi I am Abu Bakar" revealText="I am a Web Developer" />
        <BackgroundBeams />
      <br />
      <br />
    <div>
      <ThreeD>
        <p className="para">Do Some Coding </p>
      </ThreeD>
    </div>
     <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Thank You For Visiting!
  </div>
</button>
      </center>
    </main>
  );
}
