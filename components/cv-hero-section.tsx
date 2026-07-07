"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Linkedin, Github, ChevronDown, Download } from "lucide-react"

export default function CVHeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-lorenzo-dark flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lorenzo-accent/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lorenzo-accent-lime/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-lorenzo-accent-lime rounded-full animate-pulse" />
          <span className="text-sm text-white/70">Available for opportunities</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          <span className="block">YAHYA</span>
          <span className="block font-brier text-lorenzo-accent">DEMERIAH</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 font-light mb-8 tracking-wide"
        >
          IT Engineer & Robotics Specialist
        </motion.p>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed mb-12"
        >
          Results-driven IT Engineer with over 3 years of experience leading teams,
          designing robotic systems, and optimizing IT infrastructures. Passionate about
          robotics education and developing next-generation technology solutions.
        </motion.p>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-white/50">
            <MapPin className="w-4 h-4 text-lorenzo-accent" />
            <span className="text-sm">Available Worldwide</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Mail className="w-4 h-4 text-lorenzo-accent" />
            <span className="text-sm">contact@yahyademeriah.com</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://sy.linkedin.com/in/yahya-demeriah"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-lorenzo-accent hover:border-lorenzo-accent hover:text-lorenzo-dark transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/XYHDX"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-lorenzo-accent hover:border-lorenzo-accent hover:text-lorenzo-dark transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="ml-4 inline-flex items-center gap-2 bg-lorenzo-accent text-lorenzo-dark px-6 py-3 rounded-full font-semibold hover:bg-lorenzo-accent/90 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="/Yahya_Demeriah_CV.docx"
            download="Yahya_Demeriah_CV.docx"
            className="ml-2 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
