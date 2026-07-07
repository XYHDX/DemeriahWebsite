"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }, 2200)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col items-center"
          >
            <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.14em]">DEMERIAH</span>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 bg-white/90 mt-4"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 text-sm md:text-base font-medium tracking-[0.25em] uppercase text-white/90"
          >
            Robotics &amp; AI Engineer
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
