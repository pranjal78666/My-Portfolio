import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const nodesRef = useRef([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = canvas.getContext('2d')
    const isMobile = window.innerWidth < 768

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize nodes - subtle network background
    const nodeCount = isMobile ? 40 : 80
    const initializeNodes = () => {
      nodesRef.current = []
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 200 - 100,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          vz: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 3 + 2,
          hue: Math.random() // For color variation
        })
      }
    }

    initializeNodes()

    // Animation function
    const animate = () => {
      // Clear canvas with semi-transparent background
      ctx.fillStyle = 'rgba(26, 26, 26, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (!prefersReducedMotion) {
        timeRef.current += 0.004 // Faster animation
      }

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Update and draw nodes with GLOW
      nodesRef.current.forEach(node => {
        if (!prefersReducedMotion) {
          // Update position
          node.x += node.vx
          node.y += node.vy
          node.z += node.vz

          // Wrap around edges
          if (node.x < 0) node.x = canvas.width
          if (node.x > canvas.width) node.x = 0
          if (node.y < 0) node.y = canvas.height
          if (node.y > canvas.height) node.y = 0
          if (node.z < -100) node.z = 100
          if (node.z > 100) node.z = -100
        }

        // Calculate depth and opacity (subtle background)
        const depth = (node.z + 100) / 200
        const nodeSize = node.radius * (1 + depth * 1)
        const opacity = 0.28 + depth * 0.35 // Reduced opacity for subtle effect (0.28-0.63)

        // Draw GLOW effect around node (subtle glow for background effect)
        const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize * 3)
        glowGradient.addColorStop(0, `rgba(0, 150, 255, ${opacity * 0.2})`)
        glowGradient.addColorStop(1, `rgba(0, 150, 255, 0)`)
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw bright node (blue/cyan color for better text contrast)
        ctx.fillStyle = `rgba(0, 150, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw THICK connections with better visibility (blue/cyan color for text contrast)
      const connectionDistance = isMobile ? 150 : 220

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i]
          const node2 = nodesRef.current[j]

          const dx = node2.x - node1.x
          const dy = node2.y - node1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.35 // Reduced opacity for subtle effect
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacity})`
            ctx.lineWidth = 1.2 // Slightly thinner lines
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'
            ctx.beginPath()
            ctx.moveTo(node1.x, node1.y)
            ctx.lineTo(node2.x, node2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  )
}
