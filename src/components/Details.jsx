import React from 'react';
import { Calendar, Clock, MapPin, Link as LinkIcon, Users, CheckCircle2, PencilRuler } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="relative bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Event Details</h2>
            <p className="mt-4 text-neutral-300">
              Join the Mozilla Club for a collaborative pixel art challenge with a modern retro vibe. Themes include Transformers, cars, or your wildest creative ideas.
            </p>
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3"><Calendar className="h-5 w-5 text-cyan-400" /> Date: This Month</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-cyan-400" /> Time: All-day submission window</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-400" /> Venue: Online (create and submit from anywhere)</li>
            </ul>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold"><PencilRuler className="h-5 w-5 text-cyan-400"/> How to Participate with Pixilart</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-neutral-300">
                <li className="leading-relaxed">Go to <a className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200" href="https://www.pixilart.com/" target="_blank" rel="noreferrer">pixilart.com</a> and sign up or log in.</li>
                <li className="leading-relaxed">Create a new Room and invite your teammates. Teams should have <strong>2–3 members</strong>.
                  <div className="mt-2 text-xs text-neutral-400 flex items-center gap-2"><Users className="h-4 w-4"/>Collaborate live on the shared canvas.</div>
                </li>
                <li className="leading-relaxed">Start drawing on the canvas using the pixel tools. Keep the theme and size readable.</li>
                <li className="leading-relaxed">When finished, download your final artwork (PNG recommended; JPG/JPEG also allowed).</li>
                <li className="leading-relaxed">Return here and submit your team details and the file in the form below.</li>
              </ol>

              <a
                href="#submit"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-white/15"
              >
                <LinkIcon className="h-4 w-4" /> Go to Submission
              </a>

              <div className="mt-6 flex items-start gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                <p>Accepted formats: PNG, JPG, JPEG, and common image types. Name your file clearly (e.g., teamname_title.png).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
