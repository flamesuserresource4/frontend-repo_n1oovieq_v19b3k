import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10 text-neutral-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm">© {new Date().getFullYear()} Mozilla Club — Pixel Art Event</p>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="#details" className="hover:text-white">Details</a>
            <a href="#submit" className="hover:text-white">Submit</a>
            <a href="#top" className="hover:text-white">Back to top</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
