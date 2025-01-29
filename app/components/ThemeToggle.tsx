"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(typeof window !== "undefined" ? localStorage.getItem('theme') === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches: true);

    useEffect(() => {
        const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null
        if(savedTheme) {
            setIsDarkMode(savedTheme == "dark")
        } else {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDarkMode);
        }
    }, []);

    useEffect (() => {
        document.body.classList.toggle("dark", isDarkMode);
        if(typeof window !== "undefined")
            localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    }

  return (
    <button 
        onClick={toggleTheme}
        className='fixed top-[52px] left-6 md:top-16 md:left-auto md:right-[42px]
        w-9 h-[18px] bg-[#1a1a1a] dark:bg-[#efefef] rounded-lg z-50 flex items-center
        justify-end dark:justify-start px-1 '>
            {isDarkMode ? <Image src="/sun_icon.svg" alt='Sun Icon' width={14} height={14} /> : <Image src="/moon_icon.svg" alt='Moon Icon' width={19} height={14} />}
        </button>
  )
}

export default ThemeToggle