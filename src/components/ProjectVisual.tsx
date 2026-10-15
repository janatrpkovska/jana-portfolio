import Image from "next/image";
import { projectIcons } from "./icons";
import type { ProjectVisual as ProjectVisualType } from "@/data/site";

export function ProjectVisual({ visual, name }: { visual: ProjectVisualType; name: string }) {
  const Icon = projectIcons[visual.icon];

  if (visual.type === "screenshots" && visual.images?.length) {
    const [first, ...rest] = visual.images;
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl border border-line bg-card shadow-card">
          <Image
            src={first}
            alt={`${name} — main screenshot`}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top"
            priority={false}
          />
        </div>
        {rest.slice(0, 4).map((src) => (
          <div key={src} className="relative aspect-[16/11] overflow-hidden rounded-lg border border-line bg-card shadow-card">
            <Image src={src} alt={`${name} — screenshot`} fill sizes="320px" className="object-cover object-top" />
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "gallery" && visual.gallery?.length) {
    const [main, ...rest] = visual.gallery;
    return (
      <div className="grid grid-cols-2 gap-3">
        <div
          className="relative col-span-2 overflow-hidden rounded-xl border border-line bg-card shadow-card"
          style={{ aspectRatio: main.aspectRatio ?? "16 / 10" }}
        >
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className={main.fit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: main.objectPosition ?? "center" }}
          />
        </div>
        {rest.map((img, i) => (
          <div
            key={img.src}
            className={`relative overflow-hidden rounded-lg border border-line bg-card shadow-card ${rest.length % 2 === 1 && i === rest.length - 1 ? "col-span-2" : ""}`}
            style={{ aspectRatio: img.aspectRatio ?? "16 / 11" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={rest.length % 2 === 1 && i === rest.length - 1 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 50vw"}
              className={img.fit === "contain" ? "object-contain" : "object-cover"}
              style={{ objectPosition: img.objectPosition ?? "center" }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "image" && visual.image) {
    const { src, alt, fit, objectPosition = "center", aspectRatio } = visual.image;
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-line bg-card shadow-card ${aspectRatio ? "" : "aspect-[16/10]"}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className={fit === "contain" ? "object-contain p-8" : "object-cover"}
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-xl border border-line bg-gradient-to-br from-paper-warm to-card">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          color: "#D9A98A",
        }}
      />
      <Icon className="relative h-16 w-16 text-accent/70" />
      <span className="sr-only">{name} — visual placeholder, screenshot not yet available</span>
    </div>
  );
}
