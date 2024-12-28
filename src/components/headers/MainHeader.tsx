'use client'
import { cn } from "@/lib/utils"

import { useState, useEffect } from "react"
import Logo from "@/components/elements/logo/Logo"


const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const scrollThreshold = 300;
          setIsSticky(window.scrollY > scrollThreshold);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={cn("w-full", isSticky && "!fixed top-0 z-1000 transition-all bg-white h-[80px]")}>
      <div className="container">
        <div className="header_nav h-[100px] flex items-center">
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default MainHeader