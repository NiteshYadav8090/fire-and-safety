
import React from 'react';

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center px-4">
    <h2 className={`text-3xl md:text-4xl font-black ${light ? 'text-white' : 'text-blue-900'} mb-6 leading-tight`}>{title}</h2>
    {subtitle && <p className={`max-w-3xl mx-auto text-lg ${light ? 'text-gray-200' : 'text-gray-600'} leading-relaxed`}>{subtitle}</p>}
    <div className={`h-1.5 w-24 ${light ? 'bg-white' : 'bg-red-600'} mx-auto mt-8 rounded-full`}></div>
  </div>
);

export default SectionTitle;
