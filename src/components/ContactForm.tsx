"use client";

import { useState, useEffect, type FormEvent } from "react";
import { FiArrowRight, FiCheck, FiLoader, FiAlertCircle, FiX } from "react-icons/fi";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (state === "success") {
      const timer = setTimeout(() => {
        setState("idle");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      name: name.trim(),
      email: email.trim(),
      projectDetails: message.trim(),
      timestamp: new Date().toLocaleString(),
    };

    if (!formData.name || !formData.email || !formData.projectDetails) {
      setErrorMessage("Please fill in all fields before sending.");
      setState("error");
      return;
    }

    setState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.projectDetails,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setState("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
        setState("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Something went wrong. Please check your network and try again.");
      setState("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20";

  return (
    <>
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
        <p className="flex items-center gap-2 text-sm text-red-400">
          <FiAlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage || "Please fill in all fields before sending."}
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
            Sending message...
          </>
        ) : (
          <>
            Send message
            <FiArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>

    {/* Modern Glassmorphism Success Popup Toast (Auto-dismisses in 4 seconds) */}
    {state === "success" && (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-2xl border border-emerald-500/35 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 max-w-sm sm:max-w-md animate-[fade-in-up_0.3s_ease-out]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-inner">
          <FiCheck className="h-5 w-5" />
        </div>
        <div className="flex-1 pr-2">
          <h4 className="text-sm font-bold text-white tracking-wide">Message sent successfully!</h4>
          <p className="text-xs text-slate-400 mt-0.5">Thank you! Your message has been delivered to my inbox.</p>
        </div>
        <button
          onClick={() => setState("idle")}
          className="text-slate-400 hover:text-white transition p-1.5 rounded-lg hover:bg-white/10"
          aria-label="Close notification"
        >
          <FiX className="h-4 w-4" />
        </button>

        {/* 4-second progress indicator bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500/20 rounded-b-2xl overflow-hidden">
          <div className="h-full bg-emerald-500 animate-shrink" />
        </div>
      </div>
    )}
  </>
  );
}


