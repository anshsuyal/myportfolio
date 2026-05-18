import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const reduced = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(reduced ? to : from)

  useEffect(() => {
    if (reduced) return
    if (!isInView) return

    const startTime = performance.now()
    const range = to - from

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(1, elapsed / (duration * 1000))
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(from + range * eased)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, from, to, duration, reduced])

  if (reduced) {
    return (
      <span ref={ref} className="tabular-nums">
        {prefix}{to}{suffix}
      </span>
    )
  }

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </motion.span>
  )
}
