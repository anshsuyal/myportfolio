import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { type ReactNode, useCallback, useRef, useState } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  href?: string
  target?: string
  rel?: string
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const { left, top, width, height } = el.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const dx = e.clientX - centerX
    const dy = e.clientY - centerY
    
    const strength = 0.25
    mouseX.set(dx * strength)
    mouseY.set(dy * strength)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  const handleMouseEnter = () => setIsHovered(true)

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-block cursor-pointer transition-transform duration-200 active:scale-95 ${className}`}
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute -inset-[1px] rounded-[inherit] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          rotate: isHovered ? [0, 360] : 0
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Ripple / Glow Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 bg-[#6366f1]/5 blur-xl rounded-full -z-10"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block group">
        {content}
      </a>
    )
  }

  return (
    <button 
      type={type} 
      disabled={disabled} 
      onClick={onClick}
      className="inline-block group focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1] rounded-xl"
    >
      {content}
    </button>
  )
}
