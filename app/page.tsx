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
            <p className="text-xl md:text-5xl uppercase tracking-widest-2xl text-[var(--secondary)] font-sans mb-8 opacity-90">
              Roger Federer
            </p>
            <h1 className="text-[clamp(4.5rem,14vw,18rem)] font-serif text-[var(--primary)] leading-[0.8] italic tracking-tightest">
              Effortless success <br className="hidden md:block"/> 
              is a myth.
            </h1>
            <div className="w-60 h-[1.5px] bg-[var(--secondary)]/30 mx-auto mt-16 mb-12 " />
            
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] font-bold">
              {[
                { id: "archives", label: "01. Dartmouth" },
                { id: "gallery", label: "02. Photos" },
                { id: "tributes", label: "03. Send your message" },
                { id: "film", label: "04. Film" }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="px-6 sm:px-8 py-3 border border-[var(--secondary)]/20 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white transition-all duration-500 rounded-full italic hover:shadow-lg hover:-translate-y-1 whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>
        </header>

        {/* MindMap Section */}
        <section id="archives" className="py-80 bg-[var(--background)]">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-32 text-center">
            <h3 className="text-6xl md:text-9xl font-serif italic text-[var(--primary)] mb-8 tracking-tighter">01. Dartmouth</h3>
            <div className="w-40 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <div className="w-full">
            <MindMap data={transcript} />
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-80 bg-[var(--surface)]">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-32 text-center">
            <h3 className="text-6xl md:text-9xl font-serif italic text-[var(--primary)] mb-8 tracking-tighter">02. Photos</h3>
            <div className="w-40 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <Gallery />
        </section>
        
        {/* Thoughts Section */}
        <section id="tributes" className="py-80 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-32 text-center">
            <h3 className="text-6xl md:text-9xl font-serif italic text-[var(--primary)] mb-6 tracking-tighter">03. Send your message</h3>
            <div className="w-40 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <Thoughts />
        </section>

        {/* Video Section */}
        <section id="film" className="py-80 bg-[var(--surface)] border-t border-[var(--primary)]/5">
          <div className="w-full max-w-[1200px] mx-auto px-6 mb-32 text-center">
            <h3 className="text-6xl md:text-9xl font-serif italic text-[var(--primary)] mb-8 tracking-tighter">04. Film</h3>
            <div className="w-40 h-[1px] bg-[var(--secondary)]/30 mx-auto" />
          </div>
          <div className="w-full max-w-[1200px] mx-auto px-6">
            <p className="text-sm md:text-base text-[var(--on-background)]/60 font-serif italic max-w-2xl mx-auto leading-relaxed mb-16">
              Roger Federer&apos;s 2024 Dartmouth Commencement Address. Captured in its entirety for the historical record.
            </p>
          </div>
          <VideoPlayer />
        </section>

        {/* Footer */}
        <footer className="py-24 bg-black text-white">
          <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-center">
            <div className="text-6xl font-serif italic tracking-tighter text-[var(--secondary)] opacity-90">
              RF
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandinPage;
