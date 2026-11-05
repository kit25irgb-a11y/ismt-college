"use client";

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Front-end demonstration: always succeed for this project
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-10">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Have questions about our courses, admissions, or campus life? Our team is here to help you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We're available Monday to Friday, 9 AM to 5 PM. Please reach out via any of the channels below.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: 'Our Campus', value: SITE_CONFIG.contact.address },
                    { icon: Phone, label: 'Phone Number', value: SITE_CONFIG.contact.phone },
                    { icon: Mail, label: 'Official Email', value: SITE_CONFIG.contact.email },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-secondary transition-colors">
                      <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-primary font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 relative group border border-slate-300">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f45956534?auto=format&fit=crop&q=80"
                  alt="Map"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center text-white font-bold text-lg">
                  Interactive Map Placeholder
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="Course Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary focus:outline-none transition-all h-32 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  disabled={status !== 'idle' && status !== 'error'}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all",
                    status === 'sending' ? "bg-slate-400 cursor-not-allowed" : "bg-primary text-white hover:bg-primary-dark hover:scale-[1.02]"
                  )}
                >
                  {status === 'sending' ? 'Sending...' : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 text-green-700 border border-green-200 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Your message has been sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
