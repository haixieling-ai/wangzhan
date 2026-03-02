"use client";

import { MovieSlider } from "./MovieSlider";
import { useInView } from "./useInView";

const PROJECT_03_BASE = "/projects/project-03";

const livingImages = [
  `${PROJECT_03_BASE}/living-01.jpg`,
  `${PROJECT_03_BASE}/living-02.jpg`,
  `${PROJECT_03_BASE}/living-03.jpg`,
  `${PROJECT_03_BASE}/living-04.jpg`,
  `${PROJECT_03_BASE}/living-05.jpg`,
  `${PROJECT_03_BASE}/living-06.jpg`,
  `${PROJECT_03_BASE}/living-07.jpg`,
  `${PROJECT_03_BASE}/living-08.jpg`,
  `${PROJECT_03_BASE}/living-09.jpg`,
  `${PROJECT_03_BASE}/living-10.jpg`,
  `${PROJECT_03_BASE}/living-11.jpg`,
  `${PROJECT_03_BASE}/living-12.jpg`,
];

const gardenImages = [
  `${PROJECT_03_BASE}/garden-01.jpg`,
  `${PROJECT_03_BASE}/garden-02.jpg`,
  `${PROJECT_03_BASE}/garden-03.jpg`,
  `${PROJECT_03_BASE}/garden-04.jpg`,
];

function AreaBlock({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const { ref: imgRef, isInView: imgInView } = useInView();
  return (
    <div className="flex w-full flex-col items-center">
      <div
        ref={imgRef}
        className={`section-img-wrapper mx-auto w-full max-w-6xl px-3 transition-all duration-[1500ms] sm:px-6 md:px-8 ${
          imgInView ? "animate-fade-in-view-slow opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <MovieSlider
          images={images}
          alt={title}
          rounded="lg"
          objectFit="contain"
          aspect="portrait"
        />
      </div>
    </div>
  );
}

export function ResidentialCaseB() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="section-block section-compact flex w-full flex-col items-center bg-transparent"
    >
      <div
        className={`mx-auto flex w-full max-w-5xl flex-col items-center px-3 transition-all duration-[1200ms] sm:px-6 md:px-8 ${
          isInView ? "animate-fade-in-view opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <header className="section-title-block section-title-to-content w-full">
          <h2 className="section-title-main">
            <span className="section-title-number">03</span> 住宅空间设计 B
          </h2>
          <p className="section-title-en mt-1">
            | RESIDENTIAL CASE B
          </p>
        </header>
        <div className="mb-0 w-full">
          <AreaBlock title="Living Area" images={livingImages} />
        </div>

        <div className="w-full">
          <AreaBlock title="Garden Landscape" images={gardenImages} />
        </div>
      </div>
    </section>
  );
}
