import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({type,time,place,info }: any) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;</h3>
                <span className='capitalize font-medium text-dark/75 '>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>{info}</p>
            </motion.div>
        </li>
    )
}
function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end","center start"]
    })
  return (
      <div className=''>
          <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light '>
              Education
          </h2>
          <div ref={ref} className='w-[75%] mx-auto relative'>
              <motion.div
              style={{scaleY:scrollYProgress}}
                  className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
          <ul className="w-full flex flex-col items-start justify-between m1-4 dark:text-light">
<Details
type="Intermidiate In Computer Sciences"
place="Punjab Group Of Colleges Lahore, Pk"
time="2024-Present"
info="Completed my degree of Intermidiate in Computer Sciences With Maths | Physcis, i'll be honest that i dont like mathematics but i Love Coding ❤️
and I am ready! for my Bechelor In Computer Sciences "/>
                  <Details
type="Certified Cloud Applied Generative AI Engineer"
time="2024-Present"
place="PIAIC Lahore, Pk"
info="Experienced Front End Developer | Expertise in React.js, Next.js, TypeScript, Tailwind CSS, and UI Component Libraries (e.g., Shadcn UI, Framer Motion) | Intermediate Python Proficiency | Currently Learning Backend Development."/>
 <Details
type="Intermidiate In Computer Sciences"
place="Punjab Group Of Colleges Lahore, Pk"
time="2024-Present"
info="Completed my degree of Intermidiate in Computer Sciences With Maths | Physcis, i'll be honest that i dont like mathematics but i Love Coding ❤️
and I am ready! for my Bechelor In Computer Sciences "/>
                                    <Details
type="Certified Cloud Applied Generative AI Engineer"
time="2024-Present"
place="PIAIC Lahore, Pk"
info="Experienced Front End Developer | Expertise in React.js, Next.js, TypeScript, Tailwind CSS, and UI Component Libraries (e.g., Shadcn UI, Framer Motion) | Intermediate Python Proficiency | Currently Learning Backend Development."/>
              </ul>
          </div>
    </div>
  )
}

export default Education