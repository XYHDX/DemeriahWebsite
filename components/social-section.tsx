"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"

const socialImages = [
  "/images/lofan/lofan2.jpg",
  "/images/lorenzo-piloto2.png",
  "/images/lorenzo-piloto3.png",
  "/images/lofan/lofan8.jpg",
  "/images/lorenzo-piloto5.png",
  "/images/lorenzo-piloto1.png",
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, followers: "2.5M", href: "#" },
  { name: "TikTok", icon: null, followers: "1.8M", href: "#" },
  { name: "YouTube", icon: Youtube, followers: "890K", href: "#" },
]

export default function SocialSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="social" 
      ref={sectionRef}
      className="relative bg-lorenzo-dark py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-lorenzo-accent text-sm font-semibold tracking-wider mb-4 block"
          >
            STAY CONNECTED
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white"
          >
            FOLLOW
            <br />
            <span className="text-lorenzo-accent font-brier">ON SOCIALS</span>
          </motion.h2>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              className="group flex items-center gap-3 bg-white/5 hover:bg-lorenzo-accent border border-white/10 hover:border-lorenzo-accent px-6 py-4 rounded-full transition-all duration-300"
            >
              <span className="text-white group-hover:text-lorenzo-dark font-bold text-sm">
                {social.name}
              </span>
              <span className="text-white/50 group-hover:text-lorenzo-dark/70 text-sm">
                {social.followers}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Image Collage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
        >
          {socialImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              animate={isInView ? {
                opacity: 1,
                rotate: (i - 2.5) * 8,
                scale: 1 - Math.abs(i - 2.5) * 0.03,
                x: (i - 2.5) * 70,
                y: Math.abs(i - 2.5) * 20,
              } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5 + i * 0.1,
                type: "spring",
                stiffness: 60,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                zIndex: 20,
                y: -30,
              }}
              className="absolute w-48 md:w-64 h-64 md:h-80 bg-white/10 rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10"
              style={{ zIndex: 10 - Math.abs(i - 2.5) }}
            >
              <Image 
                src={image || "/placeholder.svg"} 
                alt={`Social post ${i + 1}`} 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lorenzo-dark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
