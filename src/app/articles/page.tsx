"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function page() {
  return (
    <div className=" h-[100vh] ">
      
          <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ delay: 1 }}
          >              
       <div
          className="flex items-center justify-center ">
        <h1 className="text-4xl md:text-8xl font-semibold text-white mt-44 mb-4 dark:text-light ">
          Coming Soon...
        </h1>
        </div> 
      <p className="text-white text-center text-2xll dark:text-light">Stay Tuned</p>
      <div className="flex justify-center pt-8">

        <Link href={'/'}>
        <button className="bg-dark text-light px-6 py-4 font-semibold dark:text-dark dark:bg-light ">← Return</button>
        </Link>
      </div>
    
              </motion.div>
        </div>
     
   
  );
}
