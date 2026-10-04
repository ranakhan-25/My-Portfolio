"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaTag,
  FaCommentDots,
  FaPaperPlane,
  FaCheck,
  FaCopy,
  FaExclamationCircle,
} from "react-icons/fa";

const MAX_MESSAGE = 500;

const contactInfo = [
  {
    label: "Email",
    value: "ranakhandev2025@gmail.com",
    href: "mailto:ranakhandev2025@gmail.com",
    icon: FaEnvelope,
    copy: true,
  },
  {
    label: "Phone",
    value: "+880 1910427346",
    href: "tel:+8801910427346",
    icon: FaPhoneAlt,
    copy: true,
  },
  {
    label: "Location",
    value: "Mymensingh, Bangladesh",
    icon: FaMapMarkerAlt,
  },
];

const social = [
  { icon: FaGithub, name: "GitHub", href: "https://github.com/ranakhan-25" },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rana-khan-dev",
  },
  { icon: FaTwitter, name: "Twitter", href: "https://x.com/Ranakhan2025" },
];

/* ------------------------------------------------------------------ */
/* Copy button                                                         */
/* ------------------------------------------------------------------ */
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${text}`}
      className="ml-auto shrink-0 flex h-9 w-9 items-center justify-center rounded-lg text-sm
        text-zinc-500 dark:text-zinc-400
        bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800
        hover:text-[#F97F51] dark:hover:text-[#FC427B]
        hover:border-[#F97F51]/50 dark:hover:border-[#FC427B]/50 transition-all"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "ok" : "copy"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <FaCheck className="text-[#0fa883]" /> : <FaCopy />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Input field with gradient focus border                              */
/* ------------------------------------------------------------------ */
function Field({ label, icon: Icon, textarea, value, children, ...props }) {
  const base =
    "w-full bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 " +
    "pl-12 pr-4 py-4 text-sm outline-none rounded-[calc(1rem-1px)]";

  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {label}
        {children}
      </span>
      <div
        className="group rounded-2xl p-px transition-all duration-300
          bg-zinc-200 dark:bg-zinc-800
          focus-within:bg-gradient-to-r focus-within:from-[#55E6C1] focus-within:to-[#F97F51]
          dark:focus-within:from-[#1B9CFC] dark:focus-within:to-[#FC427B]
          focus-within:shadow-[0_0_24px_-4px_rgba(249,127,81,0.45)]
          dark:focus-within:shadow-[0_0_24px_-4px_rgba(252,66,123,0.45)]"
      >
        <div className="relative">
          <Icon
            className={`absolute left-4 text-sm text-zinc-400 group-focus-within:text-[#F97F51] dark:group-focus-within:text-[#FC427B] transition-colors ${
              textarea ? "top-[1.15rem]" : "top-1/2 -translate-y-1/2"
            }`}
          />
          {textarea ? (
            <textarea
              value={value}
              {...props}
              className={`${base} resize-none`}
            />
          ) : (
            <input value={value} {...props} className={base} />
          )}
        </div>
      </div>
    </label>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const isSubmitting = status === "sending";
  const submitted = status === "success";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        setErrorMsg("Failed to send message! Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMsg("Something went wrong! Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-white via-gray-50 to-white
        dark:from-black dark:via-[#0a0a0a] dark:to-black
        text-zinc-900 dark:text-white
        font-[family-name:var(--font-inconsolata)]"
    >
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F97F51]/15 dark:bg-[#FC427B]/10 blur-[150px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-sm font-semibold text-[#F97F51] dark:text-[#FC427B] mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)]"
          >
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B] bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-zinc-600 dark:text-zinc-400"
          >
            Have a project in mind or just want to say hi? Send me a message and
            I&apos;ll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest
                text-[#0fa883] dark:text-[#1B9CFC]
                bg-[#55E6C1]/15 dark:bg-[#1B9CFC]/10
                border border-[#55E6C1]/40 dark:border-[#1B9CFC]/30"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#55E6C1] dark:bg-[#1B9CFC] opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#55E6C1] dark:bg-[#1B9CFC]" />
              </span>
              Available for work
            </div>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl
                      bg-white/80 dark:bg-white/5 backdrop-blur-md
                      border border-zinc-200 dark:border-zinc-800
                      hover:border-[#55E6C1]/60 dark:hover:border-[#1B9CFC]/60
                      hover:shadow-xl transition-colors duration-300"
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg text-white shadow-lg
                        bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]
                        group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    >
                      <Icon />
                    </div>
                    <Wrapper
                      {...(item.href ? { href: item.href } : {})}
                      className="min-w-0"
                    >
                      <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm md:text-base font-semibold text-zinc-900 dark:text-white group-hover:text-[#F97F51] dark:group-hover:text-[#FC427B] transition-colors">
                        {item.value}
                      </p>
                    </Wrapper>
                    {item.copy && <CopyButton text={item.value} />}
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs uppercase tracking-[4px] font-semibold text-zinc-500 mb-4">
                Find me on
              </h4>
              <div className="flex gap-4">
                {social.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      whileHover={{ y: -6, rotate: 8, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl
                        text-[#F97F51] dark:text-[#FC427B]
                        bg-white/80 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800
                        hover:text-white hover:border-transparent
                        hover:bg-gradient-to-br hover:from-[#55E6C1] hover:to-[#F97F51]
                        dark:hover:from-[#1B9CFC] dark:hover:to-[#FC427B]
                        shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative"
          >
            {/* Animated gradient border */}
            <div className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[100%] dark:hidden"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0 60%, #55E6C1 78%, #F97F51 92%, transparent 100%)",
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[100%] hidden dark:block"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0 60%, #1B9CFC 78%, #FC427B 92%, transparent 100%)",
                }}
              />

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6 rounded-[calc(1.5rem-1.5px)] p-6 sm:p-10
                  bg-white dark:bg-[#050505]"
              >
                <div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">
                    Send me a message
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    All fields are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field
                    label="Name"
                    icon={FaUser}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <Field
                    label="Email"
                    icon={FaEnvelope}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <Field
                  label="Subject"
                  icon={FaTag}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />

                <Field
                  label="Message"
                  icon={FaCommentDots}
                  textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={6}
                  maxLength={MAX_MESSAGE}
                  required
                >
                  <span className="normal-case tracking-normal font-medium">
                    {formData.message.length}/{MAX_MESSAGE}
                  </span>
                </Field>

                {/* Error message */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -8 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 bg-red-500/10 border border-red-500/30">
                        <FaExclamationCircle className="shrink-0" />
                        {errorMsg}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting || submitted}
                  className="group relative w-full overflow-hidden rounded-2xl py-4 text-base font-semibold text-white shadow-xl
                    bg-gradient-to-r from-[#55E6C1] to-[#F97F51]
                    dark:from-[#1B9CFC] dark:to-[#FC427B]
                    disabled:opacity-80 disabled:cursor-not-allowed transition-all"
                >
                  {/* Shine */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

                  <span className="relative flex items-center justify-center gap-3">
                    {submitted ? (
                      <>
                        <FaCheck /> Message Sent Successfully!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success overlay */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-[calc(1.5rem-1.5px)] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-sm"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 14,
                        }}
                        className="flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white shadow-2xl
                          bg-gradient-to-br from-[#55E6C1] to-[#F97F51] dark:from-[#1B9CFC] dark:to-[#FC427B]"
                      >
                        <FaCheck />
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold font-[family-name:var(--font-poppins)]"
                      >
                        Thank you!
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-zinc-500 dark:text-zinc-400"
                      >
                        Your message has been sent. I&apos;ll reply soon.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
