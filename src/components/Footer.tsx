"use client"
import React from 'react'
import Hireme from './Hireme'
import Image from 'next/image'
import { motion } from 'framer-motion'


function Footer() {
    return (
      
      <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-xl '>
          <div className='py-8 flex items-center justify-between text-dark w-full h-full px-48 dark:text-light '>
              <span className='underline '>{ new Date().getFullYear()}&nbsp;© Resheph Inayat | All Rights Reserved</span>
          <span className='underline'>Code By: Resheph Inayat</span>
         
          </div>
          
    </footer>
  )
}

export default Footer