"use client"
import React from 'react'
import { motion, useScroll } from 'framer-motion'
function LiIcon({reference}:any) {

    const { scrollYProgress } = useScroll({
        
        target: reference,
        offset: ["center end","center center"]
    })

    return (
        <figure className='absolute left-0 stroke-dark '>
            <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100' >
                <circle className='stroke-red stroke-1 fill-none' cx="75" cy="50" r="20"/>
                <motion.circle className=' stroke-[5px] fill-light dark:fill-dark' cx="75" cy="50" r="20"
                style={{pathLength: scrollYProgress}}
                />
                <circle className=' stroke-1 fill-red' cx="75" cy="50" r="10"
                
                />
                
            </svg>

            
      </figure>
  )
}

export default LiIcon