import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const shapes = [
  { size: 60, x: '15%', y: '20%', delay: 0, color: 'rgba(99,102,241,0.06)' },
  { size: 40, x: '80%', y: '30%', delay: 1, color: 'rgba(56,189,248,0.04)' },
  { size: 80, x: '70%', y: '70%', delay: 2, color: 'rgba(168,85,247,0.04)' },
  { size: 30, x: '25%', y: '75%', delay: 0.5, color: 'rgba(129,140,248,0.05)' },
  { size: 50, x: '90%', y: '10%', delay: 1.5, color: 'rgba(99,102,241,0.04)' },
]

export function FloatShapes() {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            background: s.color,
          }}
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 8 + s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: s.delay,
          }}
        />
      ))}
    </div>
  )
}
