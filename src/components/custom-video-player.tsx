"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Settings, SkipBack, SkipForward } from 'lucide-react'

interface CustomVideoPlayerProps {
  src: string
  poster?: string
  title?: string
  className?: string
}

export function CustomVideoPlayer({ src, poster, title, className = "" }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [playbackRate, setPlaybackRate] = useState(1)

  // Auto-hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const resetTimeout = () => {
      clearTimeout(timeout)
      setShowControls(true)
      timeout = setTimeout(() => {
        if (isPlaying) setShowControls(false)
      }, 3000)
    }

    const handleMouseMove = () => resetTimeout()
    const handleMouseLeave = () => {
      clearTimeout(timeout)
      if (isPlaying) setShowControls(false)
    }

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove)
      containerRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      clearTimeout(timeout)
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove)
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [isPlaying])

  // Video event handlers
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
      setIsLoading(false)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)

  // Control functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0]
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume
        setIsMuted(false)
      } else {
        videoRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  const changePlaybackRate = () => {
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2]
    const currentIndex = rates.indexOf(playbackRate)
    const nextRate = rates[(currentIndex + 1) % rates.length]
    
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate
      setPlaybackRate(nextRate)
    }
  }

  // Format time helper
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div 
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPlay={handlePlay}
        onPause={handlePause}
        onClick={togglePlay}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* Play Button Overlay (when paused) */}
      {!isPlaying && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            onClick={togglePlay}
            size="lg"
            className="rounded-full h-16 w-16 bg-white/90 hover:bg-white text-black hover:text-black"
          >
            <Play className="h-6 w-6 ml-1" />
          </Button>
        </div>
      )}

      {/* Video Info Overlay */}
     {/* {title && !isPlaying && (
        <div className="absolute top-4 left-4 right-4">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
            <h3 className="text-white font-semibold">{title}</h3>
            </div>
        </div>
        )} */}


      {/* Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-white/70 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            {/* Skip Buttons */}
            <Button
              onClick={() => skip(-10)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => skip(10)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <SkipForward className="h-4 w-4" />
            </Button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <Button
                onClick={toggleMute}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <div className="w-20">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.1}
                  onValueChange={handleVolumeChange}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Playback Speed */}
            <Button
              onClick={changePlaybackRate}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 text-xs"
            >
              {playbackRate}x
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Settings className="h-4 w-4" />
            </Button>

            {/* Fullscreen */}
            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
