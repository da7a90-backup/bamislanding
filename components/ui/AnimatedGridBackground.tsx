'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Mouse position with smooth lerping
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    // Set canvas to full viewport width and document height
    const resize = () => {
      const width = window.innerWidth
      const height = Math.max(window.innerHeight, document.documentElement.scrollHeight)

      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY + window.scrollY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Grid settings
    const gridSize = 40
    let animationFrameId: number
    let lastFrameTime = 0

    // Animation loop with delta time
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime
      lastFrameTime = currentTime

      // Smooth lerp mouse position (60 FPS independent)
      const lerpFactor = Math.min(deltaTime * 0.008, 1)
      mouseX += (targetMouseX - mouseX) * lerpFactor
      mouseY += (targetMouseY - mouseY) * lerpFactor

      // Clear canvas with slight off-white for better visibility
      ctx.fillStyle = '#fafafa'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid with smooth mouse warping
      ctx.strokeStyle = 'rgba(150, 150, 150, 0.4)'
      ctx.lineWidth = 1

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          // Calculate distance from mouse
          const dx = x - mouseX
          const dy = y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Smooth repulsion effect with falloff
          const maxDistance = 150
          let offsetX = 0
          let offsetY = 0

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) ** 2
            const angle = Math.atan2(dy, dx)
            offsetX = Math.cos(angle) * force * 40
            offsetY = Math.sin(angle) * force * 40
          }

          const finalX = x + offsetX
          const finalY = y + offsetY

          // Highlight warped areas
          if (distance < maxDistance) {
            const intensity = (1 - distance / maxDistance) * 0.6
            ctx.strokeStyle = `rgba(50, 50, 50, ${0.4 + intensity})`
            ctx.lineWidth = 1 + intensity * 2
          } else {
            ctx.strokeStyle = 'rgba(150, 150, 150, 0.4)'
            ctx.lineWidth = 1
          }

          // Draw vertical line segment
          if (y < canvas.height) {
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            ctx.lineTo(finalX, finalY + gridSize)
            ctx.stroke()
          }

          // Draw horizontal line segment
          if (x < canvas.width) {
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            ctx.lineTo(finalX + gridSize, finalY)
            ctx.stroke()
          }

          // Draw intersection points for warped areas
          if (distance < maxDistance) {
            const intensity = (1 - distance / maxDistance)
            ctx.fillStyle = `rgba(50, 50, 50, ${intensity * 0.9})`
            ctx.beginPath()
            ctx.arc(finalX, finalY, 2 + intensity * 3, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    // Update canvas height on scroll (for dynamic content)
    const handleScroll = () => {
      if (canvas.height !== document.documentElement.scrollHeight) {
        resize()
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        zIndex: -1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh'
      }}
    >
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0"
      />
    </div>
  )
}
