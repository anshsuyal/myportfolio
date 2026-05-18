import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  delay?: number
}

export function Typewriter({ words, delay = 3000 }: TypewriterProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, delay)
    return () => clearInterval(timer)
  }, [words, delay])

  return (
    <div className="flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="accent-gradient bg-clip-text text-transparent font-black text-[#6366f1]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 h-[1em] w-[2px] bg-[#6366f1]"
      />
    </div>
  )
}
