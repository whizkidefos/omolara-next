import Image from "next/image";
import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";

import { fadeIn } from '../variants';

const Home = () => {
  return (
    <main className="h-full">
      {/* Text */}
      <article className="w-full h-full">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-52 pt-36 xl:text-left">
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden"
            animate="show"
            exit='hidden'
            className="h1">Transform Ideas <br /> Into {''}
          <span className="text-accent">Digital Reality</span></motion.h1>
          <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial="hidden"
            animate="show"
            exit='hidden'
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis perspiciatis esse tempora consectetur error eligendi sapiente veniam totam deleniti inventore.
          </motion.p>
          {/* Btn */}
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden"
            animate="show"
            exit='hidden'
            className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </article>

      {/* Image */}
      <figure className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0"></div>

        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial="hidden"
          animate="show"
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[700px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>

      </figure>
    </main>
  );
};

export default Home;
