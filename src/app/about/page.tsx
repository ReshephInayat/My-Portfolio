'use client'
import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import { useMotionValue, useSpring, useInView, motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref ,{once:true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && typeof ref.current !== 'undefined') {
                (ref.current as HTMLElement).textContent = latest.toFixed(0);
            }
            
            })
    
    }, [springValue, value]) 
    return <span ref={ref}></span>
 
    }

function about() {
  return (
      <>
          <Head>
              <title>Resheph Inayat | About Page</title>
              <meta  name='' content=''/>
          </Head>
          <main className='flex w-full flex-col items-center justify-center h-full z-0 pl-32 pr-32 pb-32 p-6'>
              <AnimatedText text='Passion Fuel Purpose' className='text-center text-8xl mb-8'/>
              <div className='grid w-full grid-cols-8 gap-16'>
                  <div className='col-span-3 flex flex-col items-start justify-start'>
                      <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                          className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                  About me
                      </motion.h2>
                      <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                          className='font-medium my-1 dark:text-light'>Hi, I&apos;m Resheph Inayat, a Front-End Web Developer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 1 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients visions to life.</motion.p>
                      <motion.p
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ delay: 0.7 }}
                          className='font-medium my-1 dark:text-light'>I believe that design is about more than just making things look pretty it&apos;s about solving problems and 
creating intuitive, enjoyable experiences for users. </motion.p>
                      <motion.p
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ delay: 0.97 }}
                          className='font-medium my-1 dark:text-light'>Whether I&apos;m working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
</motion.p>
                  </div>
                  <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ delay: 1  }}
                      className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  dark:border-light bg-light p-2 dark:bg-dark'>
                      <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ delay: 2 }}
                          className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' /> 
                      <Image
                          
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          src={'/developer-pic-1.png'} alt='Image' width={800} height={800} className='w-full h-auto ' />
                  </motion.div>
                  <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 3 }}
                   exit={{ opacity: 0 }}
                    //   transition={{ delay: 0.5 }}
                      className='col-span-2 flex flex-col items-end justify-between p-8 gap-10'>
                      <div className=' flex flex-col item-end justify-center'>
                          <span className='inline-block text-7xl font-bold dark:text-light'><AnimatedNumbers value={50}/>+</span>
                          <h2  className='text-xl font-medium text-dark/75 capitalize dark:text-light/75'>Satisfied Clients       </h2>
                      </div>
                      <div className='flex flex-col item-end justify-center'>
                          <span className='inline-block text-7xl font-bold dark:text-light'><AnimatedNumbers value={20}/>+</span>
                          <h2  className='text-xl font-medium text-dark/75 capitalize dark:text-light/75'>Projects Completed</h2>
                      </div>
                      <div className='flex flex-col item-end justify-center'>
                          <span className='inline-block text-7xl font-bold dark:text-light'><AnimatedNumbers value={2}/>+</span>
                          <h2  className='text-xl font-medium text-dark/75 capitalize dark:text-light/75'>Years of Experience</h2>
                      </div>
                  </motion.div>
          </div>
              <Skills />
              <Experience />
              <Education/>
          </main>

      </>
  )
}

export default about