'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

function Logo() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
       transition={{ delay: 1 }}
      className='flex items-center justify-center mt-2 dark:border-4 border-solid border-light  rounded-full'>
          <MotionLink className='w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full text-2xl font-bold' href={'/'} whileHover={{
              backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
              transition:{duration:1,repeat:Infinity}
          }}>RI
          
          </MotionLink>
    </motion.div>
  )
}

export default Logo