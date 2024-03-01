"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
import { MdOutlineWbSunny } from "react-icons/md";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import { FaMoon } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";

function Navbar() {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 font-medium py-8 flex  items-center justify-between">
      <motion.nav
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-5">
        <Link className="nav-effect" href={"/"}>
          Home
        </Link>
        <Link className="nav-effect" href={"/about"}>
          About
        </Link>
        <Link className="nav-effect" href={"/projects"}>
          Projects
        </Link>
        <Link className="nav-effect" href={"/articles"}>
          Articles
        </Link>
      </motion.nav>

      <motion.nav
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-center gap-6 ">
        <motion.a
          className="w-8 h-8"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 1 }}
          target="_blank"
          href={"https://www.linkedin.com/in/resheph-inayat-b733132a9/"}
        >
          <LinkedInIcon/>
        </motion.a>
        <motion.a
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 1 }}
          className="w-8 h-8"
          href={"https://github.com/ReshephInayat"}
        >
          <GithubIcon className={"dark:text-light"} />
        </motion.a>
        <button
          className="ml-3 flex item-center justify-center rounded-full p-1 dark:bg-light bg-dark "
          onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {
            mode === "dark" ? <PiSunLight className="w-7 h-7"/> :
              <FaMoon  className="w-7 h-7 p-1 text-light"/>
          }
      </button>
      </motion.nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
