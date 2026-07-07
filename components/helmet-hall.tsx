"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const helmets = [
  { id: 1, name: "Season", year: "2025", image: "/images/helmets/helmet-collection1.png" },
  { id: 2, name: "Dark Glitter", year: "2025", image: "/images/helmets/helmet-collection2.png" },
  { id: 3, name: "Discoball", year: "2025", image: "/images/helmets/helmet-collection3.png" },
  { id: 4, name: "Season", year: "2024", image: "/images/helmets/helmet-collection4.png" },
  { id: 5, name: "Japan", year: "2024", image: "/images/helmets/helmet-collection5.png" },
  { id: 6, name: "GIF", year: "2024", image: "/images/helmets/helmet-collection6.png" },
  { id: 7, name: "Racing", year: "2025", image: "/images/helmets/helmet-collection7.png" },
  { id: 8, name: "Dark Edition", year: "2025", image: "/images/helmets/helmet-collection8.png" },
  { id: 9, name: "Chrome", year: "2025", image: "/images/helmets/helmet-collection9.png" },
  { id: 10, name: "Japanese", year: "2024", image: "/images/helmets/helmet-collection10.png" },
  { id: 11, name: "Pixel", year: "2024", image: "/images/helmets/helmet-collection11.png" },
  { id: 12, name: "Porcelain", year: "2024", image: "/images/helmets/helmet-collection12.png" },
]

export default function HelmetHall() {
  const [hoveredHelmet, setHoveredHelmet] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="helmets" 
      ref={sectionRef}
      className="relative min-h-screen bg-lorenzo-dark text-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lorenzo-accent text-sm font-semibold tracking-wider mb-4 block">
              COLLECTION
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              HELMET
              <br />
              <span className="text-lorenzo-accent font-brier">HALL OF FAME</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-md text-base md:text-lg"
          >
            From iconic designs to innovative one-offs, Lorenzo has always been passionate about creating memorable helmets.
          </motion.p>
        </div>

        {/* Helmet Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {helmets.map((helmet, index) => (
            <motion.div
              key={helmet.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="group relative"
              onMouseEnter={() => setHoveredHelmet(helmet.id)}
              onMouseLeave={() => setHoveredHelmet(null)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-lorenzo-accent/50 transition-all duration-500">
                {/* Helmet Image */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <Image
                    src={helmet.image || "/placeholder.svg"}
                    alt={helmet.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-lorenzo-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm">
                    {helmet.name}
                  </p>
                  <p className="text-lorenzo-accent text-xs font-medium">
                    {helmet.year}
                  </p>
                </div>

                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-lorenzo-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-transparent border-2 border-white/20 hover:border-lorenzo-accent text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-lorenzo-accent hover:text-lorenzo-dark"
          >
            VIEW ALL HELMETS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
