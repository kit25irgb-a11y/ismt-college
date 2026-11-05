import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-10 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About ISMT College</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            A beacon of academic excellence in Nepal, dedicated to shaping the next generation of IT and Business leaders through innovation, integrity, and industry-integrated learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">M</span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide world-class education in Information Technology and Management, fostering an environment where students can develop their potential, embrace innovation, and contribute meaningfully to the global society.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be recognized as a premier educational institution in Asia, known for producing graduates who are not only technically proficient but also ethically grounded and socially responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every aspect of our academic and professional journey.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Upholding the highest standards of honesty and ethics in all our actions.' },
              { title: 'Innovation', desc: 'Encouraging curiosity and the pursuit of new ideas to solve real-world problems.' },
              { title: 'Excellence', desc: 'Striving for the highest quality in teaching, learning, and research.' },
              { title: 'Inclusivity', desc: 'Creating a welcoming environment where diversity is celebrated and valued.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-secondary transition-colors text-center">
                <div className="text-secondary font-bold text-4xl mb-4">0{i+1}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Environment */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b076b958?auto=format&fit=crop&q=80"
                alt="Campus Life"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-2xl font-bold">10+ Years</p>
                <p className="text-sm opacity-90">Academic Excellence</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">A World-Class Learning Environment</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                At ISMT College, we believe that the environment is a key part of the learning process. Our campus is equipped with state-of-the-art laboratories, modern classrooms, and collaborative spaces.
              </p>
              <ul className="space-y-4">
                {[
                  'High-speed campus-wide Wi-Fi',
                  'Modern computer labs with latest software',
                  'Collaborative study zones',
                  'Digital library with access to global journals',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
