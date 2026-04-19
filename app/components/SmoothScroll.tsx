"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Slightly longer duration for heavier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2, // More responsive initiation
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.08, // Very smooth linear interpolation
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optimized scroll synchronization
    const handleScroll = () => {
      // Force GPU acceleration on body during scroll
      if (document.body.style.willChange !== "transform") {
          document.body.style.willChange = "transform";
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}
