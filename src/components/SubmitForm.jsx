import React, { useRef, useState } from 'react';
import { UploadCloud, Image as ImageIcon, User } from 'lucide-react';

export default function SubmitForm() {
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState('');
  const [status, setStatus] = useState('');
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const onChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitted! Your pixel art has been recorded.');
  };

  return (
    <section id="submit" className="relative bg-neutral-950 py-16 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Submit Your Pixel Art</h2>
        <p className="mt-3 text-center text-neutral-300">Upload the downloaded image file from your pixel art platform.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus-within:ring-2 focus-within:ring-cyan-400">
              <User className="h-4 w-4 text-cyan-400" />
              <input required name="name" placeholder="Your name" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
            </label>
            <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus-within:ring-2 focus-within:ring-cyan-400">
              <ImageIcon className="h-4 w-4 text-cyan-400" />
              <input required name="title" placeholder="Artwork title" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
            </label>
          </div>

          <div
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/15 bg-white/5 px-6 py-10 text-center transition hover:bg-white/10"
            onClick={() => inputRef.current?.click()}
          >
            <UploadCloud className="h-8 w-8 text-cyan-400" />
            <div className="text-sm text-neutral-300">
              {fileName ? (
                <span className="font-medium text-white">{fileName}</span>
              ) : (
                <>
                  <span className="font-semibold text-white">Drag & drop</span> your PNG here, or <span className="font-semibold text-white">browse</span>
                </>
              )}
            </div>
            <input ref={inputRef} onChange={onChange} type="file" accept="image/png,image/jpeg" className="hidden" />
            {preview && (
              <img src={preview} alt="preview" className="mt-4 max-h-64 w-auto rounded-lg border border-white/10 object-contain" />
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Submit
            </button>
          </div>

          {status && (
            <p className="text-center text-sm font-medium text-emerald-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
