import { useCallback, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

type Options = { stiffness?: number; damping?: number; max?: number }

export function useTilt(options: Options = {}) {
  const { stiffness = 260, damping = 24, max = 10 } = options
  const ref = useRef<HTMLDivElement | null>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness, damping })
  const sry = useSpring(ry, { stiffness, damping })

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      ry.set(-px * max * 2)
      rx.set(py * max * 2)
    },
    [max, rx, ry],
  )

  const onLeave = useCallback(() => {
    rx.set(0)
    ry.set(0)
  }, [rx, ry])

  return { ref, onMove, onLeave, rotateX: srx, rotateY: sry }
}
