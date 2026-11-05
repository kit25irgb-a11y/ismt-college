import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';
import { STATS } from '@/constants';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1523050854058-86af669174e1?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Excellence in Education</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Shape Your Future at <span className="text-secondary">ISMT College</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Join Nepal's leading institution for IT and Management. We blend theoretical knowledge with practical industry skills to prepare you for the global workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-center hover:bg-secondary-dark transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/courses"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => {
              const Icon = {
                Users: Users,
                GraduationCap: GraduationCap,
                BookOpen: BookOpen,
                Briefcase: Briefcase,
              }[stat.icon as keyof typeof STATS[0] || 'Users'] as any;

              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose ISMT College?</h2>
            <p className="text-slate-600">We provide a learning environment that fosters innovation, critical thinking, and professional growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Aligned Curriculum',
                description: 'Our courses are designed in collaboration with industry experts to ensure students learn the most relevant technologies.',
                icon: BookOpen,
              },
              {
                title: 'Expert Faculty',
                description: 'Learn from experienced professors and industry practitioners who bring real-world insights into the classroom.',
                icon: Users,
              },
              {
                title: 'Career Support',
                description: 'From resume building to placement interviews, we support our students every step of the way towards their first job.',
                icon: Briefcase,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-10 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
            Applications for the upcoming semester are now open. Secure your spot in one of Nepal's most prestigious IT colleges.
          </p>
          <Link
            href="/admissions"
            className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary-dark transition-all hover:scale-105 inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
