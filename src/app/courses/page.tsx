import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, GraduationCap } from 'lucide-react';
import { COURSES } from '@/constants';

export default function CoursesPage() {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Programmes</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Explore our industry-recognized degrees designed to provide you with a competitive edge in the global job market.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1517694712202-14faceb62973?auto=format&fit=crop&q=80&w=400`}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {course.level}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <GraduationCap className="w-4 h-4 text-secondary" />
                      <span>Academic Degree</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Modules</p>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((f) => (
                        <span key={f} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors group/btn"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Inquiry CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-4">Not sure which course to choose?</h2>
          <p className="text-slate-600 mb-8">Our academic advisors are here to help you find the perfect program for your career goals.</p>
          <Link
            href="/contact"
            className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary-dark transition-all inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
