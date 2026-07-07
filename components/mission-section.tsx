"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const words = [
    { text: "REDEFINING", accent: true },
    { text: "LIMITS,", accent: false },
    { text: "FIGHTING", accent: false },
    { text: "FOR", accent: false },
    { text: "VICTORIES,", accent: true },
    { text: "BRINGING", accent: false },
    { text: "EVERYTHING", accent: false },
    { text: "IN", accent: false },
    { text: "EVERY", accent: false },
    { text: "SENSE.", accent: false },
    { text: "DEFINING", accent: false },
    { text: "A", accent: false },
    { text: "LEGACY", accent: true },
    { text: "IN", accent: false },
    { text: "MOTOCROSS", accent: false },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-lorenzo-dark text-white py-24 md:py-32 flex items-center"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Icon badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/images/icon/ico-helmet-w.png"
              alt="Lorenzo helmet icon"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </motion.div>

        {/* Main message with word-by-word animation */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[1.1] text-balance">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + index * 0.05,
                  ease: "easeOut"
                }}
                className={`inline-block mr-[0.25em] ${
                  word.accent 
                    ? "text-lorenzo-accent font-brier" 
                    : "text-white"
                }`}
              >
                {word.text}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-white/50 text-lg md:text-xl mt-12 max-w-2xl mx-auto"
        >
          On and off the track
        </motion.p>
      </div>
    </section>
  )
}
