import React, { useRef, useState } from 'react';
import { UploadCloud, Image as ImageIcon, Users, Phone, Tag, IdCard } from 'lucide-react';

export default function SubmitForm() {
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const inputRef = useRef(null);

  const [form, setForm] = useState({
    teamName: '',
    enroll1: '',
    enroll2: '',
    phone: '',
    title: '',
  });

  const handleFile = (file) => {
    if (!file) return;
    // Allow common image formats
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      setErrors((e) => ({ ...e, file: 'Please upload an image file (PNG, JPG, JPEG, etc.)' }));
      return;
    }
    setErrors((e) => ({ ...e, file: undefined }));
    setFileName(file.name);
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const onChangeFile = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.teamName.trim()) errs.teamName = 'Team name is required';
    if (!form.enroll1.trim()) errs.enroll1 = 'Enrollment number 1 is required';
    // enroll2 optional
    if (!form.phone.trim()) errs.phone = 'Captain\'s mobile number is required';
    else if (!/^\+?[0-9\-\s]{7,15}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number';
    if (!form.title.trim()) errs.title = 'Artwork title is required';
    if (!fileName) errs.file = 'Please upload your artwork image file';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('Submitted! Your pixel art details have been captured locally.');
  };

  return (
    <section id="submit" className="relative bg-neutral-950 py-16 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Submit Your Pixel Art</h2>
        <p className="mt-3 text-center text-neutral-300">Upload the downloaded image from Pixilart and provide your team details.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm text-neutral-300"><Users className="h-4 w-4 text-cyan-400"/> Team name</span>
              <div className={`flex items-center gap-3 rounded-lg border bg-white/5 px-4 py-3 text-sm focus-within:ring-2 ${errors.teamName ? 'border-red-400/50 ring-red-400/50' : 'border-white/10 focus-within:ring-cyan-400'}`}>
                <input required name="teamName" value={form.teamName} onChange={onChange} placeholder="e.g., Pixel Rangers" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
              </div>
              {errors.teamName && <p className="mt-1 text-xs text-red-400">{errors.teamName}</p>}
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm text-neutral-300"><Tag className="h-4 w-4 text-cyan-400"/> Artwork title</span>
              <div className={`flex items-center gap-3 rounded-lg border bg-white/5 px-4 py-3 text-sm focus-within:ring-2 ${errors.title ? 'border-red-400/50 ring-red-400/50' : 'border-white/10 focus-within:ring-cyan-400'}`}>
                <input required name="title" value={form.title} onChange={onChange} placeholder="e.g., Neon Drift" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
              </div>
              {errors.title && <p className="mt-1 text-xs text-red-400">{errors.title}</p>}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block sm:col-span-1">
              <span className="mb-2 flex items-center gap-2 text-sm text-neutral-300"><IdCard className="h-4 w-4 text-cyan-400"/> Enrollment no. 1</span>
              <div className={`flex items-center gap-3 rounded-lg border bg-white/5 px-4 py-3 text-sm focus-within:ring-2 ${errors.enroll1 ? 'border-red-400/50 ring-red-400/50' : 'border-white/10 focus-within:ring-cyan-400'}`}>
                <input required name="enroll1" value={form.enroll1} onChange={onChange} placeholder="e.g., 22BCS0123" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
              </div>
              {errors.enroll1 && <p className="mt-1 text-xs text-red-400">{errors.enroll1}</p>}
            </label>

            <label className="block sm:col-span-1">
              <span className="mb-2 flex items-center gap-2 text-sm text-neutral-300"><IdCard className="h-4 w-4 text-cyan-400"/> Enrollment no. 2 (optional)</span>
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus-within:ring-2 focus-within:ring-cyan-400">
                <input name="enroll2" value={form.enroll2} onChange={onChange} placeholder="e.g., 22BCS0456" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
              </div>
            </label>

            <label className="block sm:col-span-1">
              <span className="mb-2 flex items-center gap-2 text-sm text-neutral-300"><Phone className="h-4 w-4 text-cyan-400"/> Captain mobile</span>
              <div className={`flex items-center gap-3 rounded-lg border bg-white/5 px-4 py-3 text-sm focus-within:ring-2 ${errors.phone ? 'border-red-400/50 ring-red-400/50' : 'border-white/10 focus-within:ring-cyan-400'}`}>
                <input required name="phone" value={form.phone} onChange={onChange} placeholder="e.g., +91 98765 43210" className="w-full bg-transparent outline-none placeholder:text-neutral-400" />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
            </label>
          </div>

          <div
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition hover:bg-white/10 ${errors.file ? 'border-red-400/60 bg-red-400/5' : 'border-white/15 bg-white/5'}`}
            onClick={() => inputRef.current?.click()}
          >
            <UploadCloud className="h-8 w-8 text-cyan-400" />
            <div className="text-sm text-neutral-300">
              {fileName ? (
                <span className="font-medium text-white">{fileName}</span>
              ) : (
                <>
                  <span className="font-semibold text-white">Drag & drop</span> your image here, or <span className="font-semibold text-white">browse</span>
                </>
              )}
            </div>
            <p className="text-xs text-neutral-400">Accepted: PNG, JPG, JPEG and other common image formats</p>
            <input ref={inputRef} onChange={onChangeFile} type="file" accept="image/*" className="hidden" />
            {preview && (
              <img src={preview} alt="preview" className="mt-4 max-h-64 w-auto rounded-lg border border-white/10 object-contain" />
            )}
            {errors.file && <p className="mt-3 text-xs text-red-400">{errors.file}</p>}
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
