"use client";
import React from "react";
import Image from "next/image";

const images = [
  { src: "/assets/fed1.jpeg", alt: "Roger Federer Collection 1", title: "The Signature Start", height: "h-80" },
  { src: "/assets/fed15.jpeg", alt: "Roger Federer Collection 15", title: "Dossier Detail", height: "h-96" },
  { src: "/assets/fed2.jpeg", alt: "Roger Federer Collection 2", title: "Grace in Motion", height: "h-96" },
  { src: "/assets/fed3.jpeg", alt: "Roger Federer Collection 3", title: "Focused Excellence", height: "h-64" },
  { src: "/assets/fed17.jpeg", alt: "Roger Federer Collection 17", title: "Legacy Print", height: "h-80" },
  { src: "/assets/fed4.jpeg", alt: "Roger Federer Collection 4", title: "The Backhand", height: "h-80" },
  { src: "/assets/fed5.jpeg", alt: "Roger Federer Collection 5", title: "Winning Spirit", height: "h-72" },
  { src: "/assets/fed6.jpeg", alt: "Roger Federer Collection 6", title: "Archive Moment", height: "h-96" },
  { src: "/assets/fed7.jpeg", alt: "Roger Federer Collection 7", title: "Historical Press", height: "h-80" },
  { src: "/assets/fed8.jpeg", alt: "Roger Federer Collection 8", title: "The Champion", height: "h-64" },
  { src: "/assets/fed10.jpeg", alt: "Roger Federer Collection 10", title: "Legacy in Frames", height: "h-80" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className={`w-full ${img.height} object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out`}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h4 className="text-xl font-serif text-white italic">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
