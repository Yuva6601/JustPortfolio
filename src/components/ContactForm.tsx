"use client";

import { useState, type FormEvent } from "react";
import { FiArrowRight, FiCheck, FiLoader } from "react-icons/fi";
import { contactInfo } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setState("error");
      return;
    }

    setState("submitting");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setState("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 600);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
            Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
            required
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
          Project details
        </span>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project"
          className={inputClass}
          required
        />
      </label>

      {state === "error" && (
        <p className="text-sm text-red-400">Please fill in all fields before sending.</p>
      )}

      {state === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <FiCheck className="h-4 w-4" />
          Message ready! Your email client should open shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? (
          <>
            <FiLoader className="h-4 w-4 animate-spin" />
            Opening email...
          </>
        ) : (
          <>
            Send message
            <FiArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
