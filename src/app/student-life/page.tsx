import Link from 'next/link';
import { Camera, Heart, Users, BookOpen, Coffee, Music, Image as ImageIcon } from 'lucide-react';

export default function StudentLifePage() {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Life at ISMT</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Education goes beyond the classroom. Experience a vibrant campus culture filled with creativity, friendship, and growth.
          </p>
        </div>
      </section>

      {/* Campus Experience */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">More Than Just a Degree</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                At ISMT, we foster a holistic environment where students are encouraged to explore their passions, engage in social activities, and build lifelong networks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Student Council', desc: 'Leading the student body and organizing campus events.', icon: Users },
                  { title: 'Tech Clubs', desc: 'Exploring the latest in AI, Blockchain, and Web3.', icon: BookOpen },
                  { title: 'Sports & Wellness', desc: 'Staying active with inter-college tournaments.', icon: Heart },
                  { title: 'Cultural Fests', desc: 'Celebrating diversity through art and music.', icon: Music },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1529070538774-18776d76936c?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg h-64 w-full object-cover" alt="Student activity" />
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3ef34f6?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg h-64 w-full object-cover mt-8" alt="Student study" />
              <img src="https://images.unsplash.com/photo-1523580494863-6f303122aC29?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg h-64 w-full object-cover -mt-8" alt="Student group" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="rounded-3xl shadow-lg h-64 w-full object-cover" alt="Campus environment" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Campus Facilities</h2>
            <p className="text-slate-600">Modern infrastructure designed to support every aspect of student life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Library',
                desc: 'Access to thousands of e-books, research papers, and a quiet environment for study.',
                img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80'
              },
              {
                title: 'Innovation Hub',
                desc: 'A creative space for students to prototype ideas and collaborate on projects.',
                img: 'https://images.unsplash.com/photo-1531482615713-2a6a8e7f3b57?auto=format&fit=crop&q=80'
              },
              {
                title: 'Student Lounge',
                desc: 'A place to relax, socialize, and recharge between intensive lectures.',
                img: 'https://images.unsplash.com/photo-1556761175-b413142e2138?auto=format&fit=crop&q=80'
              },
            ].map((facility, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={facility.img} alt={facility.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Campus Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="aspect-square bg-slate-200 rounded-2xl overflow-hidden group relative cursor-pointer">
                <img src={`https://picsum.photos/seed/ismt${i}/400/400`} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
