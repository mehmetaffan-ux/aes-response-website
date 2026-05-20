"use client";

import dynamic from "next/dynamic";
import { Component, Suspense, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { AnimatedHeroVessel } from "@/components/animated-hero-vessel";

const STSScene = dynamic(
  () => import("@/components/three/STSScene").then((mod) => mod.STSScene),
  {
    ssr: false,
    loading: () => <AnimatedHeroVessel />,
  },
);

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
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    setWebglReady(canUseWebGL());
  }, []);

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
