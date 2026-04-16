"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const TOTAL_FRAMES = 81;

const CARDS = [
  {
    id: "sa-card-1",
    cls: "sa-card sa-card-1",
    show: 0.12,
    hide: 0.98,
    num: "01",
    title: "Retirement Planning",
    body: "Navigate 401(k)s, IRAs, and pension strategies with precision — building income that lasts through retirement.",
    statValue: "30+",
    statLabel: "years of retirement planning experience",
    href: "/retirement-planning",
  },
  {
    id: "sa-card-2",
    cls: "sa-card sa-card-2",
    show: 0.38,
    hide: 0.98,
    num: "02",
    title: "Annuities",
    body: "Structured income products that deliver guaranteed, predictable cash flow — certainty in an uncertain market.",
    statValue: "350+",
    statLabel: "clients protected with annuity strategies",
    href: "/annuity",
  },
  {
    id: "sa-card-3",
    cls: "sa-card sa-card-3",
    show: 0.65,
    hide: 0.98,
    num: "03",
    title: "Life Insurance",
    body: "Comprehensive coverage options tailored to protect your beneficiaries and preserve the legacy you've built.",
    statValue: "100+",
    statLabel: "educational events held yearly",
    href: "/life-insurance",
  },
];

const PIP_TARGETS = [0.27, 0.55, 0.82];

export default function ScrollAtom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFracRef = useRef(-1);
  const rafPendingRef = useRef(false);
  const animReadyRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      if (animReadyRef.current) drawFrame(lastFracRef.current < 0 ? 0 : lastFracRef.current);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function drawFrame(fracIdx: number) {
      if (!ctx || !canvas) return;
      if (Math.abs(fracIdx - lastFracRef.current) < 0.015) return;
      lastFracRef.current = fracIdx;

      const lo = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(fracIdx)));
      const hi = Math.min(TOTAL_FRAMES - 1, lo + 1);
      const blend = fracIdx - lo;

      const imgLo = imagesRef.current[lo];
      if (!imgLo?.complete || !imgLo.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = imgLo.naturalWidth;
      const ih = imgLo.naturalHeight;
      const mobile = window.innerWidth < 768;
      const scale = mobile
        ? Math.min(cw / iw, ch / ih) * 1.05
        : Math.max(cw / iw, ch / ih);
      const w = iw * scale;
      const h = ih * scale;
      const dx = (cw - w) / 2;
      const dy = (ch - h) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalAlpha = 1;
      ctx.drawImage(imgLo, dx, dy, w, h);

      if (blend > 0.015 && hi !== lo) {
        const imgHi = imagesRef.current[hi];
        if (imgHi?.complete && imgHi.naturalWidth) {
          ctx.globalAlpha = blend;
          ctx.drawImage(imgHi, dx, dy, w, h);
          ctx.globalAlpha = 1;
        }
      }
    }

    // Load all frames
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          animReadyRef.current = true;
          drawFrame(0);
        }
      };
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
      images.push(img);
    }

    function getProgress() {
      if (!container) return 0;
      const rect = container.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      return Math.max(0, Math.min(1, -rect.top / total));
    }

    function onScroll() {
      if (!animReadyRef.current || rafPendingRef.current) return;
      rafPendingRef.current = true;
      requestAnimationFrame(() => {
        rafPendingRef.current = false;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const progress = getProgress();
        drawFrame(progress * (TOTAL_FRAMES - 1));

        // Update annotation cards
        CARDS.forEach(({ id, show, hide }) => {
          const el = document.getElementById(id);
          if (el) el.classList.toggle("sa-visible", progress >= show && progress < hide);
        });

        // Update pips
        PIP_TARGETS.forEach((t, i) => {
          const pip = document.getElementById(`sa-pip-${i + 1}`);
          if (pip) pip.classList.toggle("sa-pip-active", progress >= t - 0.12 && progress < t + 0.22);
        });
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="sa-container">
      <div className="sa-sticky">
        <div className="sa-label">The IIP Method</div>
        <canvas ref={canvasRef} className="sa-canvas" />

        {CARDS.map(({ id, cls, num, title, body, statValue, statLabel, href }) => (
          <div key={id} id={id} className={cls}>
            <div className="sa-card-num">{num}</div>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="sa-card-stat">
              <strong>{statValue}</strong>
              {statLabel}
            </div>
            <Link href={href} className="sa-card-link">Learn more →</Link>
          </div>
        ))}

        <div className="sa-pips">
          <div id="sa-pip-1" className="sa-pip" />
          <div id="sa-pip-2" className="sa-pip" />
          <div id="sa-pip-3" className="sa-pip" />
        </div>
      </div>
    </div>
  );
}
