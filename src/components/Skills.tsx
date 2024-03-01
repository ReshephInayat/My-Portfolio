import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({name, x, y}:{name:any,x:any,y:any}) => {
    return (
        <motion.div
        
    // whileHover={{scale:1.08, backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],}}
    initial={{x:0, y:0}}
    whileInView={{ x:x, y:y  }}
            transition={{ duration: 1.5 }}
            viewport={{once: true}}
    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'>
{name}
        </motion.div>
    
        )
    }

function Skills() {
    return (
      <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-CircularLight dark:bg-CircularDark'>

                <motion.div
                    // whileHover={{ scale: 1.05, backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"], }}
                    transition={{duration:3,} }
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light  '>
                    Web 3.0
                </motion.div>

<Skill name="React Js" x="-20vw" y="2vw"/>
<Skill name="Tailwind Css" x="-5vw" y="-10vw" />
<Skill name="Typescript" x="20vw" y="6vw" />
<Skill name="Next Js"x="0vw" y="12vw"/>
<Skill name="HTML 5" x="-20vw" y="-15vw"/>
<Skill name="Framer-motion" x="15vw" y="-12vw"/>
<Skill name="React Js" x="0vw" y="-20vw"/>
<Skill name="Web Design" x="32vw" y="-5vw"/>
<Skill name="Css" x="-32vw" y="-5vw"/>
<Skill name="Python" x="-25vw" y="18vw"/>
<Skill name="Vercel" x="18vw" y="18vw"/>

            </div>
      </>
  )
}

export default Skills