"use client";

import { useState, useEffect } from "react";

export default function Topbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`topbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? "h-0 overflow-hidden opacity-0 pointer-events-none" : "h-9"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
        <p className="text-xs hidden sm:block opacity-75">
          Serving Albuquerque &amp; Rio Rancho, NM since 1996
        </p>
        <div className="flex items-center gap-5 ml-auto">
          <a
            href="tel:5058961348"
            className="text-xs font-semibold text-white hover:opacity-80 transition-opacity"
          >
            (505) 896-1348
          </a>
          <span className="text-white/30 hidden sm:block">|</span>
          <a
            href="mailto:crael@iip.services"
            className="text-xs text-white/75 hover:text-white transition-colors hidden sm:block"
          >
            crael@iip.services
          </a>
        </div>
      </div>
    </div>
  );
}
