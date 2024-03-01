"use client"
import React, { useEffect, useState } from 'react'

export default function useThemeSwitcher() {
  
  const preferred_dark_query = "(prefer-color-scheme: dark)"
const [mode, setMode] = useState<any>("")

  useEffect(() => {
    
    const mediaQuery = window.matchMedia(preferred_dark_query);
    const user_preference = window.localStorage.getItem("theme");

const handleChange = () => {
  if (user_preference) {
    let check = user_preference == "dark" ? "dark" : "light";
    setMode(check);
    if (check === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }
  else {
    let check = mediaQuery.matches ? "dark" : "light"
    setMode(check)
    if (check === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }
}
    handleChange();
mediaQuery.addEventListener("change",handleChange)
 
    return () => {
      mediaQuery.removeEventListener("change",handleChange)
     }
  }, [])
  
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    }
    else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    
  }, [mode])
  
  return [mode,setMode]


}
