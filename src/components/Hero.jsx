import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bot, Car, Palette } from 'lucide-react';

const Badge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/30 to-neutral-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28 md:pt-32 lg:pt-40">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <Badge icon={Bot} label="Transformers" />
          <Badge icon={Car} label="Cars" />
          <Badge icon={Palette} label="Creative Pixel Art" />
        </div>

        <h1 className="text-balance font-extrabold tracking-tight">
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Mozilla Club Pixel Art Showdown
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm text-neutral-200 sm:text-base md:text-lg">
          Craft retro-inspired pixel art featuring Transformers, cars, or your most creative ideas. Showcase your talent on your favorite pixel art platform, download your piece, and submit it here.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#submit"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Submit Your Art
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#details"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Event Details
          </a>
        </div>
      </div>

      {/* Subtle pixel grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: '16px 16px',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
}
