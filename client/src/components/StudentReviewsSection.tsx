import React from "react";
import { Star } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import SectionTitle from "@/components/SectionTitle";
import { STUDENT_REVIEWS } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function clampRating(rating: number) {
  return Math.max(1, Math.min(5, Math.round(rating)));
}

function InitialBadge({ name }: { name: string }) {
  const letter = (name?.trim()?.[0] ?? "S").toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-sm shrink-0">
      {letter}
    </div>
  );
}

export default function StudentReviewsSection() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const plugins = React.useMemo(() => {
    if (prefersReducedMotion) return [];
    return [
      AutoScroll({
        speed: 1.2,
        startDelay: 200,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ];
  }, [prefersReducedMotion]);

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="What Our Students Say"
          subtitle="Real feedback from learners who trained with us."
        />

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              duration: 55,
            }}
            plugins={plugins}
            className="px-0 md:px-14"
          >
            <CarouselContent
              className="-ml-4"
              viewportClassName="motion-safe:[mask-image:linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)] motion-safe:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)]"
            >
              {STUDENT_REVIEWS.map((r) => {
                const rating = clampRating(r.rating);
                return (
                  <CarouselItem
                    key={r.id}
                    className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full overflow-hidden rounded-xl border border-gray-100 bg-white p-5 md:p-7">
                      <div className="flex items-start gap-3">
                        <InitialBadge name={r.name} />
                        <div className="min-w-0">
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="font-black text-blue-900 text-sm md:text-base truncate">
                                {r.name}
                              </p>
                              <p className="text-[11px] md:text-xs font-bold text-gray-500 truncate">
                                {r.course}
                              </p>
                            </div>
                            <div className="flex items-center gap-0.5 shrink-0">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < rating
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-5">
                            “{r.text}”
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
