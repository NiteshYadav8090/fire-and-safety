
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { GALLERY } from '@/constants';

const GalleryPage = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle title="Real Projects, Real Safety" subtitle="Browse through our high-quality installation and safety training sessions." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY.map(item => (
          <div key={item.id} className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer aspect-square">
            <img src={item.image} alt={item.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">{item.type}</span>
              <p className="text-white font-bold text-lg">On-site Quality Execution</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryPage;
