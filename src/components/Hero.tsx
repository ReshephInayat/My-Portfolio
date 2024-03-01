"use client"
import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion" 
import Link from "next/link";
import { LinkArrow } from "./Icons";
import Hireme from "./Hireme";

function Hero() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
      className=" flex items-center text-dark w-full h-full z-0 pl-32 pr-32 pb-32 p-6">
      <div className="flex items-center justify-between w-full">
        <div className="pt-0">
          <Image
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250vw"

            className="w-full h-full shadow-dark  "
            src={"/developer-pic-1.png"}
            alt="Image"
            width={800}
            height={800}
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className=""
          />
          <motion.p
          className="my-4 text-base font-medium dark:text-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 3.5 }}>
            
          
            As a skilled front-end developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React Js | Next Js and web development.
          </motion.p>
          <div className="flex items-center self-start mt-2">
            <motion.a
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ delay: 4.3 }}
              className="flex items-center bg-dark text-light p-2.5
            px-6 text-lg  font-semibold hover:text-dark hover:bg-light border border-solid dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light " download={true} href={'/Profile.pdf'}>Resume
            <LinkArrow className="w-8 h-8 pl-1"/>
            </motion.a>
            <motion.a
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ delay: 4.3 }}target="_bank" href='tel:03369869922' className="ml-4 underline font-semibold text-xl hover:no-underline dark:text-light">Contact</motion.a>
          </div>
        </div>
      </div>
      <Hireme />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 4.3 }}
                className='absolute right-8 bottom-8 inline-block w-24 pr-4'>
          <Image src={'/miscellaneous_icons_1.svg'} alt='image'width={100} height={100} className='w-full h-full'/>
            </motion.div>
    </motion.div>

  );
}
export default Hero;
