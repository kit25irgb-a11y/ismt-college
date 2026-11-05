import Link from 'next/link';
import { CheckCircle2, FileText, ClipboardList, HelpCircle, ArrowRight } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Community</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Start your professional journey today. Our admission process is designed to be transparent, fair, and supportive.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Application Process</h2>
            <p className="text-slate-600">Follow these simple steps to secure your admission at ISMT College.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inquiry', desc: 'Submit an online inquiry or visit our campus for a consultation.', icon: HelpCircle },
              { step: '02', title: 'Application', desc: 'Fill out the official application form and submit required documents.', icon: ClipboardList },
              { step: '03', title: 'Evaluation', desc: 'Our academic committee reviews your application and credentials.', icon: CheckCircle2 },
              { step: '04', title: 'Offer', desc: 'Receive your conditional or unconditional offer letter.', icon: FileText },
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white border border-slate-200 text-center group hover:border-secondary transition-colors">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-slate-100 text-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Required Documents</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Please ensure you have scanned copies of the following documents ready for your application. All documents must be in English or translated by a certified translator.
              </p>
              <ul className="space-y-4">
                {[
                  'Academic Transcripts (High School/Bachelor)',
                  'Certificate of Graduation',
                  'Valid Passport or Identification Copy',
                  'Updated Curriculum Vitae (CV)',
                  'Statement of Purpose (SOP)',
                  'Two Reference Letters',
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 relative">
              <div className="absolute -top-4 -left-4 bg-secondary text-white px-4 py-2 rounded-lg font-bold text-sm">
                Important Note
              </div>
              <p className="text-slate-600 italic leading-relaxed text-lg">
                "We encourage applicants to submit their documents as early as possible to ensure timely processing and visa application if required. Our admissions team is available 24/7 via email for any queries."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common queries about the admission process.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: 'What are the minimum entry requirements?', a: 'Requirements vary by programme. Generally, a high school diploma for undergraduate and a relevant degree for postgraduate courses.' },
              { q: 'Is there an application fee?', a: 'Yes, a non-refundable processing fee is required upon submission of the application.' },
              { q: 'How long does it take to get an offer letter?', a: 'Usually, applications are processed within 7-14 working days.' },
              { q: 'Can I apply for a scholarship?', a: 'Yes, we offer merit-based scholarships for outstanding academic performers.' },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to take the first step?</h2>
          <Link
            href="/contact"
            className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary-dark transition-all hover:scale-105 inline-block"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
