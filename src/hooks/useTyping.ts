import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useTyping(texts: readonly string[], typingMs = 55, pauseMs = 1600) {
  const reduced = useReducedMotion()
  const list = useMemo(() => [...texts], [texts])
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!list.length) {
      const id = window.setTimeout(() => setDisplay(''), 0)
      return () => window.clearTimeout(id)
    }
    if (reduced) {
      const first = list[0] ?? ''
      const id = window.setTimeout(() => setDisplay(first), 0)
      return () => window.clearTimeout(id)
    }

    const full = list[index % list.length] ?? ''
    let i = 0
    let dir: 'in' | 'out' = 'in'
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      if (dir === 'in') {
        i += 1
        setDisplay(full.slice(0, i))
        if (i >= full.length) {
          timeout = setTimeout(() => {
            dir = 'out'
            tick()
          }, pauseMs)
          return
        }
        timeout = setTimeout(tick, typingMs)
      } else {
        i -= 1
        setDisplay(full.slice(0, Math.max(0, i)))
        if (i <= 0) {
          setIndex((v) => (v + 1) % list.length)
          dir = 'in'
          timeout = setTimeout(tick, 400)
          return
        }
        timeout = setTimeout(tick, typingMs / 2)
      }
    }

    tick()
    return () => clearTimeout(timeout)
  }, [index, list, pauseMs, reduced, typingMs])

  return display
}
