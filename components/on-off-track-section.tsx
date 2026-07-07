"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const trackCards = [
  {
    title: "ON TRACK",
    subtitle: "Racing Life",
    description: "Where passion meets performance. Every race tells a story of dedication, skill, and the pursuit of excellence.",
    image: "/images/lorenzo-piloto3.png",
    accent: "lorenzo-accent",
    link: "#gallery"
  },
  {
    title: "OFF TRACK",
    subtitle: "Beyond Racing",
    description: "Life beyond the circuit. Training, family, and the moments that shape a champion's journey.",
    image: "/images/lorenzo-pose5.png",
    accent: "lorenzo-accent-lime",
    link: "#about"
  }
]

export default function OnOffTrackSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 bg-lorenzo-dark"
    >
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {trackCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.link}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-lorenzo-accent/50 transition-all duration-500"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lorenzo-dark via-lorenzo-dark/50 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.span 
                  className={`inline-block text-sm font-medium tracking-wider mb-2 ${
                    card.accent === "lorenzo-accent" ? "text-lorenzo-accent" : "text-[#bfff00]"
                  }`}
                >
                  {card.subtitle}
                </motion.span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 font-brier">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base mb-4 max-w-sm">
                  {card.description}
                </p>
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${
                  card.accent === "lorenzo-accent" ? "text-lorenzo-accent" : "text-[#bfff00]"
                } group-hover:gap-3 transition-all duration-300`}>
                  EXPLORE
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                card.accent === "lorenzo-accent" ? "bg-lorenzo-accent" : "bg-[#bfff00]"
              }`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
