
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';
import SectionTitle from './SectionTitle';

const BlogSection = () => (
  <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionTitle title="Fire Safety Insights" subtitle="Stay updated with the latest safety protocols and equipment guides." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="h-40 md:h-48 bg-gray-200 overflow-hidden">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 md:p-8">
              <div className="flex items-center text-xs md:text-sm text-gray-400 mb-3 md:mb-4 font-bold">
                <Calendar className="w-4 h-4 mr-2 shrink-0" /> {post.date}
              </div>
              <h3 className="text-lg md:text-2xl font-black text-blue-900 mb-3 md:mb-4 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
              <button className="text-red-600 font-black uppercase text-xs md:text-sm flex items-center hover:gap-2 transition-all">Read Article <ArrowRight className="ml-2 w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
