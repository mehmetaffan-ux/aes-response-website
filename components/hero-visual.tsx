"use client";

import dynamic from "next/dynamic";
import { Component, Suspense, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

import { AnimatedHeroVessel } from "@/components/animated-hero-vessel";
import { HeroVideo } from "@/components/hero-video";

const STSScene = dynamic(
  () => import("@/components/three/STSScene").then((mod) => mod.STSScene),
  {
    ssr: false,
    loading: () => <AnimatedHeroVessel />,
  },
);

const heroVideoAssets = {
  webmSrc: "/videos/aes-emergency-sts-hero.webm",
  mp4Src: "/videos/aes-emergency-sts-hero.mp4",
  posterSrc: "/images/aes-hero-poster.jpg",
};

// Place future cinematic hero assets in public/videos and public/images using the paths above.

type MediaAvailability = {
  checked: boolean;
  webm: boolean;
  mp4: boolean;
  poster: boolean;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

async function assetExists(src: string, signal: AbortSignal) {
  try {
    const response = await fetch(src, {
      method: "HEAD",
      cache: "no-store",
      signal,
    });

    return response.ok;
  } catch {
    return false;
  }
}

function canUseWebGL() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const reduceMotion = Boolean(useReducedMotion());
  const [webglReady, setWebglReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [mediaAvailability, setMediaAvailability] = useState<MediaAvailability>({
    checked: false,
    webm: false,
    mp4: false,
    poster: false,
  });

  useEffect(() => {
    setWebglReady(canUseWebGL());
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function checkMedia() {
      const [webm, mp4, poster] = await Promise.all([
        assetExists(heroVideoAssets.webmSrc, controller.signal),
        assetExists(heroVideoAssets.mp4Src, controller.signal),
        assetExists(heroVideoAssets.posterSrc, controller.signal),
      ]);

      if (!controller.signal.aborted) {
        setMediaAvailability({
          checked: true,
          webm,
          mp4,
          poster,
        });
      }
    }

    checkMedia();

    return () => {
      controller.abort();
    };
  }, []);

  if (reduceMotion && mediaAvailability.poster) {
    return <HeroVideo posterSrc={heroVideoAssets.posterSrc} />;
  }

  if (reduceMotion) {
    return <AnimatedHeroVessel />;
  }

  if (
    mediaAvailability.checked &&
    !videoFailed &&
    (mediaAvailability.webm || mediaAvailability.mp4)
  ) {
    return (
      <HeroVideo
        webmSrc={mediaAvailability.webm ? heroVideoAssets.webmSrc : undefined}
        mp4Src={mediaAvailability.mp4 ? heroVideoAssets.mp4Src : undefined}
        posterSrc={mediaAvailability.poster ? heroVideoAssets.posterSrc : undefined}
        onError={() => setVideoFailed(true)}
      />
    );
  }

  if (!webglReady) {
    return <AnimatedHeroVessel />;
  }

  return (
    <WebGLErrorBoundary fallback={<AnimatedHeroVessel />}>
      <Suspense fallback={<AnimatedHeroVessel />}>
        <STSScene />
      </Suspense>
    </WebGLErrorBoundary>
  );
}
