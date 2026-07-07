"use client"

import { useRef } from "react"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const products = [
  { name: "Racing Cap", price: "$45", image: "/images/cap-lorenzo.png" },
  { name: "Team Shirt", price: "$89", image: "/images/lorenzo-pose4.png" },
  { name: "Official Helmet", price: "$299", image: "/images/helmets/helmet-oficial.png" },
]

export default function StoreSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="store" 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-lorenzo-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-lorenzo-accent text-sm font-semibold tracking-wider mb-4 block">
                OFFICIAL STORE
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
                LORENZO
                <br />
                <span className="text-lorenzo-accent font-brier">RACING</span>
              </h2>
            </div>

            <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
              A collection built for performance and speed, combining classic motorsport aesthetics with modern craftsmanship.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-lorenzo-accent text-lorenzo-dark px-8 py-4 rounded-full font-bold text-sm hover:bg-lorenzo-accent/90 transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              VISIT THE STORE
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Product Preview */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-lorenzo-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <Image 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lorenzo-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-semibold">{product.name}</p>
                    <p className="text-lorenzo-accent text-xs">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/lorenzo-piloto.png"
              alt="Lorenzo Racing Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lorenzo-dark/60 via-transparent to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-lorenzo-accent text-lorenzo-dark px-4 py-2 rounded-full">
              <span className="text-sm font-bold">NEW COLLECTION</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
