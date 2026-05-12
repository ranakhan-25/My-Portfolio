"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      alert("Something went wrong!");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="relative py-28 px-4 md:px-10 bg-white dark:bg-[#020617] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase tracking-[6px] text-violet-500 font-semibold mb-4"
          >
            Get In Touch
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-medium mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:your@email.com"
                      className="text-xl font-semibold hover:text-violet-500 transition-colors"
                    >
                      ranakhandev2025@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <a
                      href="tel:+8801234567890"
                      className="text-xl font-semibold hover:text-cyan-500 transition-colors"
                    >
                      +880 1910427346
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="text-xl font-semibold">
                      Mymenshing, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Find me on</h4>
              <div className="flex gap-6">
                {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl hover:bg-white/20 transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white/50 dark:bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-white/90 dark:bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-white/90 dark:bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full bg-white/90 dark:bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows={6}
                required
                className="w-full bg-white/90 dark:bg-white/10 border border-white/20 rounded-3xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting || submitted}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white font-semibold text-lg shadow-xl shadow-violet-500/30 disabled:opacity-70 transition-all"
              >
                {submitted
                  ? "✅ Message Sent Successfully!"
                  : isSubmitting
                    ? "Sending Message..."
                    : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
