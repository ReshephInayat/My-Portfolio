"use client";
import React from "react";
import { motion } from "framer-motion";

const qoute = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: 1,
    delay: 0.5,
    staggerChildren: 0.08,
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 1,
    transition: 1,
    duration: 1,
  },
};

function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden text-center ">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-6xl text-left dark:text-light  ${className}`}
        initial={{ opacity: 0 }}
        animate={{opacity:1}}
              exit={{ opacity: 0 }}
        transition={{ delay: 2 }}
        
      >
        {text.split(" ").map((word: any, index: any) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{opacity:1}}
            exit={{ opacity: 0 }}
            transition={{delay:2}}
            
            // initial="initial"
            // animate="animate"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
