import { useRef, useState, useEffect } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";

interface MiniVideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export default function MiniVideoPlayer({ src, className = "", autoPlay = false, muted = true, loop = true }: MiniVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain bg-black/5"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
      />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Controls overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <FiPause className="w-6 h-6" /> : <FiPlay className="w-6 h-6 ml-0.5" />}
        </button>
      </div>

      {/* Volume control */}
      <div className={`absolute top-2 right-2 transition-opacity duration-200 ${showControls ? "opacity-100" : "opacity-0"}`}>
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <FiVolumeX className="w-4 h-4" /> : <FiVolume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Video indicator */}
      <div className="absolute bottom-2 left-2 px-2 py-1 text-xs bg-black/50 text-white rounded">Video</div>
    </div>
  );
}
