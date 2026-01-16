'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BubbleCardProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export default function BubbleCard({ children, className = '', gradient = 'from-white/80 to-white/40' }: BubbleCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Main card with glassmorphism */}
      <div
        className={`relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br ${gradient} border border-white/30 shadow-2xl h-full`}
        style={{
          transform: 'translateZ(20px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bubble reflection */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl"
          style={{
            transform: 'translateZ(1px)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full">
          {children}
        </div>

        {/* Bottom shadow for depth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/5 to-transparent rounded-b-3xl pointer-events-none"
          style={{
            transform: 'translateZ(-1px)'
          }}
        />
      </div>

      {/* Floating shadow */}
      <div
        className="absolute inset-0 bg-black/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        style={{
          transform: 'translateZ(-10px) translateY(20px)',
          zIndex: -1
        }}
      />
    </motion.div>
  )
}
