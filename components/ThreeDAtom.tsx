"use client";

import dynamic from "next/dynamic";

// AtomScene uses WebGL — must be client-only, no SSR
const AtomScene = dynamic(() => import("./AtomScene"), {
  ssr: false,
  loading: () => (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex items-center justify-center"
    >
      <div className="w-8 h-8 rounded-full border-2 border-black/10 border-t-black/40 animate-spin" />
    </div>
  ),
});

interface ThreeDAtomProps {
  size?: number;
  className?: string;
  /** Unused — color is now driven by the GLB material itself */
  color?: string;
}

export default function ThreeDAtom({
  size = 360,
  className = "",
}: ThreeDAtomProps) {
  return (
    <div
      className={`select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <AtomScene size={size} />
    </div>
  );
}
