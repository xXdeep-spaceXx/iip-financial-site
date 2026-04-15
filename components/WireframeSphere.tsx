"use client";

import dynamic from "next/dynamic";

const WireframeSphereScene = dynamic(
  () => import("./WireframeSphereScene"),
  { ssr: false }
);

export default function WireframeSphere({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <WireframeSphereScene />
    </div>
  );
}
