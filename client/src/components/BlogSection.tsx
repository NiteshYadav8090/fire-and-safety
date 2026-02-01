
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';
import SectionTitle from './SectionTitle';

const BlogSection = () => (
  <section className="py-32 bg-gray-50">
    <div className="container mx-auto px-4">
      <SectionTitle title="Fire Safety Insights" subtitle="Stay updated with the latest safety protocols and equipment guides." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 bg-gray-200 overflow-hidden">
               <img src={`https://images.unsplash.com/photo-1599708141690-d81b3021975e?auto=format&fit=crop&q=80&w=600&sig=${post.id}`} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-400 mb-4 font-bold">
                <Calendar className="w-4 h-4 mr-2" /> {post.date}
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
              <button className="text-red-600 font-black uppercase text-sm flex items-center hover:gap-2 transition-all">Read Article <ArrowRight className="ml-2 w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
