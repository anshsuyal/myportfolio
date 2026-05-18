import { motion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className = '', hover = false, glow = false, ...rest }: GlassCardProps) {
  return (
    <motion.div
      className={`bg-white border border-[#e5e7eb] rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] ${hover ? 'transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]' : ''} ${glow ? 'shadow-[0_0_40px_rgba(99,102,241,0.1)]' : ''} ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
