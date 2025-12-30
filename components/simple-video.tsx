interface SimpleVideoProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export function SimpleVideo({
  src,
  poster,
  className = "",
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
}: SimpleVideoProps) {
  return (
    <video
      src={src}
      poster={poster}
      className={`w-full h-auto rounded-lg shadow-2xl ${className}`}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
    />
  )
}

