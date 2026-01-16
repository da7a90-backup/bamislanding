'use client'

import { useRef, ReactNode, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedGridBackground from './AnimatedGridBackground'

interface ScrollContainerProps {
  children: ReactNode[]
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSections = children.length

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only prevent default if we're within bounds
      if ((e.deltaY > 0 && currentSection < totalSections - 1) ||
          (e.deltaY < 0 && currentSection > 0) ||
          isTransitioning) {
        e.preventDefault()
      }

      if (isTransitioning) return

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        // Scroll down
        setIsTransitioning(true)
        setCurrentSection(prev => prev + 1)
        setTimeout(() => setIsTransitioning(false), 1200)
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setIsTransitioning(true)
        setCurrentSection(prev => prev - 1)
        setTimeout(() => setIsTransitioning(false), 1200)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [currentSection, isTransitioning, totalSections])

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Interactive mesh background - visible across ALL sections */}
      <AnimatedGridBackground />

      {/* Section container */}
      <div className="relative w-full h-full" style={{ zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {children[currentSection]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
