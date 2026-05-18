import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[], rootMargin = '-45% 0px -45% 0px') {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { root: null, rootMargin, threshold: [0.12, 0.25, 0.4, 0.6] },
    )

    elements.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids, rootMargin])

  return active
}
