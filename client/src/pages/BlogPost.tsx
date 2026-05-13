import React from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { BLOG_POSTS } from "@/constants";

export default function BlogPostPage({
  slug,
  onBack,
}: {
  slug: string;
  onBack: () => void;
}) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl xl:max-w-6xl">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-900 font-black text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="mt-8">
            <SectionTitle
              title="Article not found"
              subtitle="Please go back and select another article."
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl xl:max-w-6xl">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-blue-900 font-black text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="mt-8">
          <div className="flex items-center text-xs md:text-sm text-gray-400 mb-3 font-bold">
            <Calendar className="w-4 h-4 mr-2 shrink-0" /> {post.date}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-blue-900 leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-10 rounded-2xl md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
          />
        </div>

        <div className="mt-10 space-y-10">
          {post.sections.map((section, idx) => (
            <article key={idx} className="prose prose-gray max-w-none">
              <h2 className="text-xl md:text-2xl font-black text-blue-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-sm sm:text-base leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="text-gray-700 text-sm sm:text-base">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
