"use client";

import { useReducedMotion } from "framer-motion";
import { useRef } from "react";

type HeroVideoProps = {
  webmSrc?: string;
  mp4Src?: string;
  posterSrc?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  onError?: () => void;
};

export function HeroVideo({
  webmSrc,
  mp4Src,
  posterSrc,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "metadata",
  onError,
}: HeroVideoProps) {
  const reduceMotion = useReducedMotion();
  const errorReportedRef = useRef(false);

  function handleError() {
    if (errorReportedRef.current) {
      return;
    }

    errorReportedRef.current = true;
    onError?.();
  }

  return (
    <div
      data-hero-video
      className="relative mx-auto aspect-[1.82] w-full max-w-[650px] overflow-hidden rounded-lg border border-cyan-200/20 bg-slate-950/78 shadow-2xl shadow-cyan-950/35 backdrop-blur-xl sm:aspect-[1.04]"
      aria-label="Cinematic emergency ship-to-ship transfer video"
    >
      {reduceMotion ? (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(111,156,188,0.14),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.6),rgba(2,6,23,0.92))]"
          style={
            posterSrc
              ? {
                  backgroundImage: `url(${posterSrc})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }
              : undefined
          }
        />
      ) : (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          poster={posterSrc}
          onError={handleError}
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" onError={handleError} /> : null}
          {mp4Src ? <source src={mp4Src} type="video/mp4" onError={handleError} /> : null}
        </video>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.4),rgba(2,6,23,0.08)_45%,rgba(2,6,23,0.54)),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.66))]" />
      <div className="pointer-events-none absolute left-3 top-3 rounded-lg border border-cyan-200/16 bg-slate-950/70 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-3">
        <p className="text-xs font-semibold uppercase text-cyan-200">
          STS transfer control
        </p>
        <p className="mt-1 text-xs text-slate-300 sm:text-sm">
          Cargo transfer video-ready
        </p>
      </div>
    </div>
  );
}
