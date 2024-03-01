"use client"
import React from 'react'
import { CircularText } from './Icons'
import { motion } from 'framer-motion'

function HireMe() {
  return (
      <motion.div
      initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ delay: 4.3 }}
          className='flex left-4 bottom-4 fixed items-center justify-center overflow-hidden hover:scale-110 transition-all duration-500 '>
          <div className='w-44 h-auto flex items-center justify-center relative '>
              <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
              <a target='_blank' href='mailto:rasafinayat@gmail.com' className='flex items-center text-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm bg-dark hover:text-dark hover:bg-light hover:border-2 text-light shadow-md  w-20 h-20 rounded-full font-semibold  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light'>Hire me</a>
          </div>
    </motion.div>
  )
}

export default HireMe