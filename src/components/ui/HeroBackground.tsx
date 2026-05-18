export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mesh Grid */}
      <div className="absolute inset-0 mesh-grid opacity-60" />
      
      {/* Animated Blobs - lighter for light mode */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6366f1]/5 blur-[120px] rounded-full animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/5 blur-[120px] rounded-full animate-blob [animation-delay:2s]" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#6366f1]/3 blur-[100px] rounded-full animate-blob [animation-delay:4s]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise" />
      
      {/* Light Streaks */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#6366f1]/10 to-transparent" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#a855f7]/10 to-transparent" />
    </div>
  )
}
