import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { GALLERY } from "@/constants";

const CATEGORY_COPY: Record<string, { subtitle: string; eyebrow: string }> = {
  "Morning Parade": {
    eyebrow: "Discipline & Readiness",
    subtitle: "Training-ground visuals focused on morning formation, coordination, and readiness drills.",
  },
  Classroom: {
    eyebrow: "Knowledge Sessions",
    subtitle: "Practical classroom sessions covering awareness, procedures, and compliance-focused learning.",
  },
  Events: {
    eyebrow: "Live Events",
    subtitle: "Moments from fire safety events, demonstrations, and public awareness activities.",
  },
  Project: {
    eyebrow: "Execution Gallery",
    subtitle: "On-site project images highlighting system execution, installation quality, and finishing.",
  },
};

const CATEGORY_CARD_TITLE: Record<string, string> = {
  "Morning Parade": "Morning Parade & Readiness Drill",
  Classroom: "Hands-On Classroom Training",
  Events: "Event & Traditional Performance",
  Project: "Project Execution & Site Work",
};

export default function GalleryCategoryPage({
  category,
  setActivePage,
}: {
  category: string;
  setActivePage: (p: string) => void;
}) {
  const [selectedId, setSelectedId] = React.useState<number | null>(null);

  const items = React.useMemo(
    () => GALLERY.filter((item) => item.type === category),
    [category]
  );

  const selected = React.useMemo(() => {
    if (selectedId === null) return null;
    return items.find((item) => item.id === selectedId) ?? null;
  }, [items, selectedId]);

  const categoryTabs = React.useMemo(
    () => Array.from(new Set(GALLERY.map((item) => item.type))),
    []
  );

  const copy = CATEGORY_COPY[category] ?? {
    eyebrow: "Category Gallery",
    subtitle: "Explore images grouped by this gallery category.",
  };
  const cardTitle = CATEGORY_CARD_TITLE[category] ?? `${category} Image`;

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-[linear-gradient(135deg,#081a3a_0%,#0d234c_55%,#12336d_100%)] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-14 shadow-[0_25px_70px_rgba(8,26,58,0.2)]">
          <div className="absolute -top-10 right-10 h-40 w-40 rounded-full bg-red-600/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <button
              onClick={() => {
                setActivePage("gallery");
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Back To Gallery
            </button>

            <div className="mt-6 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">
                {copy.eyebrow}
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05]">
                {category} Gallery
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/75 leading-relaxed">
                {copy.subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {categoryTabs.map((tab) => {
                const active = tab === category;
                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setActivePage(`gallery-category/${encodeURIComponent(tab)}`);
                      window.scrollTo(0, 0);
                    }}
                    className={`rounded-full px-4 py-2 text-xs md:text-sm font-black transition-all border ${
                      active
                        ? "bg-red-600 text-white border-red-600 shadow-lg"
                        : "bg-white/10 text-white border-white/15 hover:bg-white/15"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          <SectionTitle
            title={`${category} Highlights`}
            subtitle={`${items.length} image${items.length === 1 ? "" : "s"} available in this category.`}
          />

          {items.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {items.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                  onClick={() => setSelectedId(item.id)}
                  className="group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.09)] text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.type}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-[11px] font-black text-white">
                        <ImageIcon className="h-3.5 w-3.5" />
                        {item.type}
                      </span>
                      <p className="mt-3 text-lg font-black text-white">
                        {cardTitle}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
              <p className="text-xl font-black text-blue-900">No images found</p>
              <p className="mt-2 text-gray-500">
                This category does not have gallery images yet.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 rounded-[2rem] border border-gray-100 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                Explore More
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-black text-blue-900">
                Browse another gallery section
              </h3>
            </div>
            <button
              onClick={() => {
                setActivePage("gallery");
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-900 px-6 py-3.5 text-sm font-black text-white transition-colors hover:bg-red-600"
            >
              View Full Gallery
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 z-10 rounded-2xl bg-white/90 p-2 shadow-lg transition-colors hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-blue-900" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="bg-black lg:col-span-3">
                  <img
                    src={selected.image}
                    alt={selected.type}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>
                <div className="p-6 md:p-8 lg:col-span-2">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    {selected.type}
                  </p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-black text-blue-900">
                    {cardTitle}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-gray-600">
                    This image belongs to the {category} category and is shown on the dedicated gallery page for this section.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
