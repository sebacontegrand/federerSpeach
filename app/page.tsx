/* eslint-disable react/no-unescaped-entities */
"use client";
import VideoPlayer from "@/components/VideoPlayer";
import Gallery from "@/components/Gallery";
import Thoughts from "@/components/Thoughts";
import MindMap from "@/components/MindMap";
import transcript from "@/components/transcript.json";
import React from "react";

const LandinPage = () => {
  return (
    <main className="min-h-screen bg-[var(--background)] relative antialiased selection:bg-[var(--secondary)] selection:text-white">
      <div className="pt-0">
        {/* Monograph Header - High Impact Editorial */}
        <header className="w-full h-screen flex flex-col items-center justify-center bg-[var(--background)] text-center px-6 relative overflow-hidden">
          {/* Subtle Monograph Texture/Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/assets/tennis_texture.png')] bg-repeat" />
          
          <div className="w-full max-w-[1200px] relative z-10">
            <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-[var(--secondary)] font-sans mb-6 opacity-90">
              Roger Federer
            </p>
            <h1 className="text-[clamp(3rem,9vw,7rem)] font-serif text-[var(--primary)] leading-[1.1] italic tracking-tight">
              Effortless success <br className="hidden md:block"/> 
              is a myth.
            </h1>
            <div className="w-40 h-[1.5px] bg-[var(--secondary)]/30 mx-auto mt-12 mb-10" />
            
            <nav className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-10 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] font-bold">
              {[
                { id: "archives", label: "Dartmouth" },
                { id: "gallery", label: "Photos" },
                { id: "tributes", label: "Message" },
                { id: "film", label: "Film" }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="px-5 sm:px-6 py-2.5 border border-[var(--secondary)]/20 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white transition-all duration-500 rounded-sm italic hover:shadow-lg hover:-translate-y-1 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>
        </header>

        {/* MindMap Section */}
        <section id="archives" className="py-32 md:py-48 bg-[var(--background)]">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-20 md:mb-28 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[var(--primary)] mb-6 tracking-tight">Dartmouth</h3>
            <div className="w-24 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <div className="w-full">
            <MindMap data={transcript} />
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-32 md:py-48 bg-[var(--surface)]">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-20 md:mb-28 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[var(--primary)] mb-6 tracking-tight">Photos</h3>
            <div className="w-24 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <Gallery />
        </section>
        
        {/* Thoughts Section */}
        <section id="tributes" className="py-32 md:py-48 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-20 md:mb-28 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[var(--primary)] mb-6 tracking-tight">Send your message</h3>
            <div className="w-24 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <Thoughts />
        </section>

        {/* Video Section */}
        <section id="film" className="py-32 md:py-48 bg-[var(--surface)] border-t border-[var(--primary)]/5">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-20 md:mb-28 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-[var(--primary)] mb-6 tracking-tight">Film</h3>
            <div className="w-24 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <p className="text-sm md:text-base text-[var(--on-background)]/60 font-serif italic max-w-2xl mx-auto leading-relaxed mb-12">
              Roger Federer&apos;s 2024 Dartmouth Commencement Address. Captured in its entirety for the historical record.
            </p>
          </div>
          <VideoPlayer />
        </section>

        {/* Footer */}
        <footer className="py-16 md:py-24 bg-black text-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-6">
            <div className="text-4xl md:text-5xl font-serif italic tracking-tight text-[var(--secondary)] opacity-90">
              RF
            </div>
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-white/40">
              A tribute to the legend of the court
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandinPage;
