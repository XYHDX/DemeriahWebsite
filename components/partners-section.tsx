"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Vercel", logo: "/images/partners/vercel-logo.png" },
  { name: "Next.js", logo: "/images/partners/next-logo.png" },
  { name: "Turbo", logo: "/images/partners/turbo-logo.png" },
  { name: "v0", logo: "/images/partners/v0green-logo.png" },
  { name: "AI SDK", logo: "/images/partners/aisdk-logo.png" },
]

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="partners" 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white"
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
            PROUD TO WORK WITH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-lorenzo-dark"
          >
            PARTNERS &
            <br />
            <span className="text-lorenzo-accent font-brier">CAMPAIGNS</span>
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-[3/2] bg-lorenzo-dark/5 rounded-2xl flex items-center justify-center p-6 border border-lorenzo-dark/10 hover:border-lorenzo-accent/50 hover:bg-lorenzo-accent/5 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lorenzo-dark/50 mt-12 max-w-2xl mx-auto"
        >
          Lorenzo is proud to collaborate with partners who share his passion for performance across a range of industries.
        </motion.p>
      </div>
    </section>
  )
}
