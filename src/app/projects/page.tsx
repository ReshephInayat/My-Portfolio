"use client"
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


const FeturedProject = ({ type, title, summary, img, link, github }: any) => {
  return (
    <article className="flex relative  item-center justify-between rounded-3xl border border-solid border-dark shadow-2xl bg-light p-12 rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <a
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image
          src={img}
          alt="image"
          width={400}
          height={400}
          className="w-full h-auto  hover:scale-105 transition-all duration-700"
        />
      </a>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-red font-medium text-xl">{type}</span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </a>
        <p className="py-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <a href={github} target="_blank" className="w-10 ">
            <GithubIcon className={"hover:scale-110 transform duration-300"} />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6  text-lg font-semibold"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

function page() {
  return (
    <>
      <Head>
        <title>Resheph Inayat | Projects Page</title>
        <meta name="" content="" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center h-full z-0 pl-32 pr-32 pb-32 p-6 pt-16">
        <AnimatedText
          text="Imagine Trumps Knowledge!"
          className="text-center text-8xl mb-16"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="grid gird-col-12 gap-10">
            <div className="col-span-12">
              <FeturedProject
                title="Ecommers Website"
                summary="PIAIC Project Ecommers Website DineMart For Hands on Experience for react js and next js"
                github=" https://github.com/ReshephInayat/PIAIC_Project_Hackathon-2"
                link="https://rasaf-dinemart.vercel.app/"
                type="Featured Project"
                img="/5.png"
              />
            </div>
            <div className="col-span-12">
              <FeturedProject
                title="Golden Sports Events"
                summary="Golden Sports Events, your premier destination for organizing unforgettable sports events for schools and clubs. From thrilling tournaments to exciting competitions, we specialize in curating dynamic experiences that inspire teamwork, skill development, and sportsmanship. "
                github="https://github.com/ReshephInayat/Golden-Sports-Events-gse"
                link="https://goldensportsevents.com/"
                type="Featured Project"
                img="/gse.png"
              />
            </div>
            <div className="col-span-12">
              <FeturedProject
                title="React Docs App"
                summary="Docs Mini App Using React | Next Js | Typescript | Tailwind Css | Framer Motion"
                github="https://github.com/ReshephInayat/React-Docs-App"
                link="/https://rasaf-docs-app.vercel.app/"
                type="Featured Project"
                img="/docs.png"
              />
            </div>
            <div className="col-span-12">
              <FeturedProject
                title="Blog Site "
                summary="PIAIC Project Blog Site ( Fetching Data Of Blogs by API (Fetch method) ) For Hands on Experience for react js and next js"
                github="https://github.com/ReshephInayat/PIAIC-Project-BlogSite"
                link="https://rasaf-blogsite.vercel.app/"
                type="Featured Project"
                img="/image2.png"
              />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default page