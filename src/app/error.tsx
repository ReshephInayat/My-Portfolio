"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {motion} from "framer-motion"
import HireMe from "@/components/Hireme";
import { LinkArrow } from "@/components/Icons";
import { GiMailbox } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
export default function page() {
  return (
    <div className="bg-black h-[100vh] ">
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ delay: 1 }}
      >
      

        <div
                  className="flex items-center justify-center ">

        <h1 className="text-4xl md:text-8xl font-semibold text-white mt-40 mb-4 dark:text-light ">
        Error | 404 
        </h1>
        </div> 
      <p className="text-white text-center text-2xl dark:text-light">SomeThing Went Wronge!</p>
      <div className="flex justify-center items-center pt-8">
                  <motion.a
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ delay: 4.3 }}
              className="flex items-center bg-dark text-light p-2.5
            px-6 text-lg  font-semibold hover:text-dark hover:bg-light border border-solid dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light "  href={'mailto:rasafinayat@gmail.com'}>Gmail
                      <BiMailSend className="w-8 h-8 pl-1" />
                      
            </motion.a>
      </div>
          </motion.div>
          <HireMe />
          <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 4.3 }}
                className='absolute right-8 bottom-8 inline-block w-24 pr-4'>
          <Image src={'/miscellaneous_icons_1.svg'} alt='image'width={100} height={100} className='w-full h-full'/>
            </motion.div>
        </div>
     
   
  );
}
