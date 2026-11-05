import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'ISMT College Announces New AI Certification Program',
      category: 'Academic',
      date: 'Nov 1, 2026',
      excerpt: 'We are excited to introduce a specialized certification in Artificial Intelligence and Machine Learning for all computing students.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Annual Tech-Fest 2026: Registration Now Open',
      category: 'Event',
      date: 'Oct 25, 2026',
      excerpt: 'Join us for the most anticipated technical event of the year featuring hackathons, gaming, and robotics.',
      img: 'https://images.unsplash.com/photo-1504384308090-3e27866f377c?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'ISMT Graduates Secure Positions at Top MNCs',
      category: 'Success',
      date: 'Oct 10, 2026',
      excerpt: 'Our latest batch of graduates have been placed in leading global companies including Google, Microsoft, and Amazon.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'New Partnership with Global Computing Institute',
      category: 'Partnership',
      date: 'Sep 20, 2026',
      excerpt: 'Expanding our global footprint, ISMT partners with GCI to provide students with exchange opportunities.',
      img: 'https://images.unsplash.com/photo-1523050854058-86af669174e1?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Workshop on Cloud Computing and Azure Deployment',
      category: 'Workshop',
      date: 'Sep 05, 2026',
      excerpt: 'Hands-on session on deploying enterprise applications using Azure Virtual Machines and Nginx.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0//auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Community Outreach: Digital Literacy Drive',
      category: 'CSR',
      date: 'Aug 15, 2026',
      excerpt: 'ISMT students visit local schools to teach basic computer skills and internet safety to young children.',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <div className="pt-10">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Events</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Stay updated with the latest happenings, academic achievements, and upcoming events at ISMT College.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary transition-colors group/link"
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
