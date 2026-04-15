"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackSrc?: string;
  fallbackAlt?: string;
  overlayOpacity?: number;
  /**
   * Playback speed multiplier. 1 = normal, 0.15 = very slow motion.
   * Lower = slower. Browser minimum is ~0.07.
   */
  playbackRate?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function VideoBackground({
  videoSrc = "/videos/hero-bg.mp4",
  fallbackSrc = "/images/hero-fallback.jpg",
  fallbackAlt = "Hero background",
  overlayOpacity = 60,
  playbackRate = 1,
  children,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    // Apply slow-motion — set on canplay so it sticks after src load
    const applyRate = () => {
      video.playbackRate = playbackRate;
    };

    video.addEventListener("canplay", applyRate);
    // Also set immediately in case already loaded
    if (video.readyState >= 3) applyRate();

    return () => video.removeEventListener("canplay", applyRate);
  }, [playbackRate]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fallback image — fades out once video is ready */}
      <Image
        suppressHydrationWarning
        src={fallbackSrc}
        alt={fallbackAlt}
        fill
        priority
        className={`object-cover object-center transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />

      {/* Video — WebM for Chrome/Firefox, MP4 for Safari */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={videoSrc.replace(/\.mp4$/, ".webm")} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark overlay — bg-black + opacity avoids rgba inline style that Dark Reader modifies */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
        aria-hidden="true"
      />

      {/* Bottom fade to white — CSS class, not inline style */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 video-fade-bottom"
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
