
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Search, Play, Eye, Clock3 } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { GALLERY } from "@/constants";

function cls(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const VIDEO_SHOWCASE = [
  {
    id: 1,
    title: "Live Fire Drill Highlights",
    description: "A quick look at practical extinguisher demos and emergency response training on site.",
    views: "3.2K views",
    duration: "5:30 mins",
    image: GALLERY[0]?.image,
    src: "/videos/gallery/whatsapp-video-1.mp4",
  },
  {
    id: 2,
    title: "Installation Project Walkthrough",
    description: "See how our team handles hydrant line execution, panel fitting, and safety checks.",
    views: "2.4K views",
    duration: "7:10 mins",
    image: GALLERY[2]?.image,
    src: "/videos/gallery/whatsapp-video-2.mp4",
  },
  {
    id: 3,
    title: "Team Training Moments",
    description: "Hands-on sessions focused on compliance, readiness, and confident equipment handling.",
    views: "2.9K views",
    duration: "6:45 mins",
    image: GALLERY[4]?.image,
    src: "/videos/gallery/whatsapp-video-3.mp4",
  },
];

const TYPE_ORDER = ["All", "Morning Parade", "Classroom", "Events", "Project"] as const;

const CATEGORY_CARD_COPY: Record<string, { headline: string; description: string }> = {
  "Morning Parade": {
    headline: "Morning Parade & Discipline Training",
    description:
      "Experience the spirit of discipline, teamwork, and professional readiness through structured parade sessions, physical drills, and coordinated field practice designed to build confidence and leadership qualities.",
  },

  Classroom: {
    headline: "Professional Safety Classroom Training",
    description:
      "Explore industry-focused classroom sessions where students gain practical knowledge in fire safety, emergency response, industrial safety management, and hands-on technical learning guided by experienced trainers.",
  },

  Events: {
    headline: "Cultural Events & Live Performances",
    description:
      "Celebrate vibrant cultural activities, traditional performances, public awareness events, and live demonstrations that create an engaging environment while promoting confidence, creativity, and teamwork.",
  },

  Project: {
    headline: "Fire Safety Projects & Site Execution",
    description:
      "Discover real-time project execution, fire safety equipment installation, inspection work, and compliance-focused site operations carried out with professional standards and technical expertise.",
  },
};

export default function GalleryPage({ initialType }: { initialType?: string }) {
  const [activeType, setActiveType] = React.useState<string>(initialType || "All");
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = React.useState<number | null>(null);
  const videoRefs = React.useRef<Record<number, HTMLVideoElement | null>>({});

  const types = React.useMemo(() => {
    const available = new Set(GALLERY.map((g) => g.type));
    return TYPE_ORDER.filter((type) => type === "All" || available.has(type));
  }, []);

  const items = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return GALLERY.filter((g) => {
      const okType = activeType === "All" ? true : g.type === activeType;
      const okQuery = q ? g.type.toLowerCase().includes(q) : true;
      return okType && okQuery;
    });
  }, [activeType, query]);

  const selected = React.useMemo(() => {
    if (selectedId === null) return null;
    return GALLERY.find((g) => g.id === selectedId) ?? null;
  }, [selectedId]);

  const getCategoryCopy = (type: string) =>
    CATEGORY_CARD_COPY[type] ?? {
      headline: type,
      description: "A glimpse from this gallery category.",
    };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    if (!initialType) {
      setActiveType("All");
      return;
    }
    setActiveType(initialType);
  }, [initialType]);

  React.useEffect(() => {
    VIDEO_SHOWCASE.forEach((video) => {
      const element = videoRefs.current[video.id];
      if (!element) return;

      if (video.id === playingVideoId) {
        element.currentTime = 0;
        void element.play().catch(() => {});
      } else {
        element.pause();
        element.currentTime = 0;
      }
    });
  }, [playingVideoId]);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionTitle
            title="Real Projects, Real Safety"
            subtitle="Browse through our high-quality installation and safety training sessions."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="mt-8 md:mt-12 flex flex-col gap-4"
        >
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {types.map((t) => {
                const active = t === activeType;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={cls(
                      "px-4 py-2 rounded-full text-xs md:text-sm font-black transition-all border",
                      active
                        ? "bg-blue-900 text-white border-blue-900 shadow-lg"
                        : "bg-white text-blue-900 border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                    )}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-[360px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search category..."
                className="w-full rounded-2xl border border-gray-200 bg-white px-11 py-3 text-sm font-bold text-blue-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-200"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              ) : null}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item) => {
                const categoryCopy = getCategoryCopy(item.type);

                return (
                  <motion.button
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onClick={() => setSelectedId(item.id)}
                    className="group relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.10)] focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-3">
                        <div className="min-w-0 text-left">
                          <span className="inline-flex bg-red-600 text-white px-3 py-1 rounded-full text-[11px] md:text-xs font-black w-fit">
                            {item.type}
                          </span>
                          <p className="mt-2 text-white font-black text-sm md:text-base leading-tight">
                            {categoryCopy.headline}
                          </p>
                        </div>
                        <div className="shrink-0 h-10 w-10 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="text-white font-black text-sm">+</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-14 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1330] via-[#17224A] to-[#09101F] px-5 py-10 md:px-8 md:py-12 lg:px-10"
        >
          <div className="absolute -top-20 left-1/3 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative">
            <SectionTitle
              title="Safety In Action"
              subtitle="Watch featured highlights from our training sessions, site execution, and practical safety drills."
              light
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {VIDEO_SHOWCASE.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="group relative aspect-[16/10] overflow-hidden">
                    {playingVideoId === video.id ? (
                      <video
                        ref={(element) => {
                          videoRefs.current[video.id] = element;
                        }}
                        src={video.src}
                        poster={video.image}
                        className="h-full w-full object-cover bg-black"
                        controls
                        playsInline
                        preload="metadata"
                        onEnded={() => setPlayingVideoId(null)}
                      />
                    ) : (
                      <img
                        src={video.image}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    <div
                      className={cls(
                        "absolute inset-0 pointer-events-none bg-gradient-to-t to-transparent",
                        playingVideoId === video.id
                          ? "from-[#08101F]/35 via-[#08101F]/5"
                          : "from-[#08101F]/85 via-[#08101F]/20"
                      )}
                    />
                    {playingVideoId !== video.id ? (
                      <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${video.title}`}
                        onClick={() => setPlayingVideoId(video.id)}
                      >
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-blue-900 shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-1 h-8 w-8 fill-current" />
                        </span>
                      </button>
                    ) : null}
                  </div>

                  <div className="px-5 py-5 md:px-6 md:py-6">
                    <h3 className="text-white font-black text-xl leading-tight">
                      {video.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-blue-100/80 leading-relaxed font-medium">
                      {video.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4 text-blue-100/85">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Eye className="h-4 w-4" />
                        <span>{video.views}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Clock3 className="h-4 w-4" />
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
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
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 z-10 rounded-2xl bg-white/90 hover:bg-white p-2 shadow-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-blue-900" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 bg-black">
                  <img
                    src={selected.image}
                    alt={selected.type}
                    className="w-full h-full object-contain max-h-[70vh] lg:max-h-[80vh]"
                  />
                </div>
                <div className="lg:col-span-2 p-6 md:p-8">
                  <p className="text-xs font-black tracking-widest uppercase text-red-600">
                    Gallery
                  </p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-black text-blue-900">
                    {getCategoryCopy(selected.type).headline}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                    {getCategoryCopy(selected.type).description}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setSelectedId(null);
                        setActiveType(selected.type);
                      }}
                      className="w-full rounded-xl bg-blue-900 text-white px-5 py-3 font-black hover:bg-blue-800 transition-colors"
                    >
                      View more like this
                    </button>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="w-full rounded-xl bg-white text-blue-900 px-5 py-3 font-black border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Back to gallery
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
