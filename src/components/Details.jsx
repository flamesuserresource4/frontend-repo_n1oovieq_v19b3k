import React from 'react';
import { Calendar, Clock, MapPin, Link as LinkIcon } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="relative bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Event Details</h2>
            <p className="mt-4 text-neutral-300">
              Join the Mozilla Club for a pixel art event celebrating creativity with a modern retro vibe. Make pixel art themed around Transformers, cars, or anything you imagine.
            </p>
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3"><Calendar className="h-5 w-5 text-cyan-400" /> Date: This Month</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-cyan-400" /> Time: All day submission window</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-400" /> Venue: Online submission</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-lg font-semibold">How to Participate</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-neutral-300">
                <li>Create your artwork on your favorite pixel art platform.</li>
                <li>Download the final image file (PNG preferred).</li>
                <li>Submit the file using the form below.</li>
              </ol>
              <a
                href="#submit"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/15"
              >
                <LinkIcon className="h-4 w-4" /> Go to Submission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
