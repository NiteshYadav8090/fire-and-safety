
import React from 'react';

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-8 md:mb-12 lg:mb-16 text-center px-2">
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black ${light ? 'text-white' : 'text-blue-900'} mb-4 md:mb-6 leading-tight`}>{title}</h2>
    {subtitle && <p className={`max-w-2xl mx-auto text-base md:text-lg ${light ? 'text-gray-200' : 'text-gray-600'} leading-relaxed`}>{subtitle}</p>}
    <div className={`h-1.5 w-16 md:w-24 ${light ? 'bg-[#dc2626]' : 'bg-red-600'} mx-auto mt-5 md:mt-8 rounded-full`}></div>
  </div>
);

export default SectionTitle;
