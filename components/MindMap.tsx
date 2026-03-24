"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Subpoint {
  title: string;
  description: string;
}

interface Point {
  title: string;
  description?: string;
  subpoints?: Subpoint[];
}

interface Section {
  title: string;
  points: Point[];
}

interface Transcript {
  title: string;
  sections: Section[];
}

const sectionImages: { [key: string]: string } = {
  "1. Introduction": "/assets/fed1.jpeg",
  "2. REFLECTION ON DARTMOUTH": "/assets/fed15.jpeg",
  "3. EXPERIENCES AT DARTMOUTH": "/assets/fed3.jpeg",
  "4. LESSONS FOR GRADUATES": "/assets/fed4.jpeg",
  "5. MENTAL DISCIPLINE": "/assets/fed5.jpeg",
  "10. LIFE BEYOND THE COURT": "/assets/fed17.jpeg",
  "9. THE REALITY OF PERFECTION": "/assets/fed7.jpeg",
  "8. THE IMPORTANCE OF MENTAL STRENGTH": "/assets/fed8.jpeg",
  "7. OVERCOMING CHALLENGES": "/assets/fed9.jpeg",
  "6. HARD WORK AND EFFORT": "/assets/fed10.jpeg",
};

const MindMapCard: React.FC<{ 
  section: Section; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void 
}> = ({ section, index, isExpanded, onToggle }) => {
  const imageUrl = sectionImages[section.title] || "/assets/fed1.jpeg";

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl border border-[var(--primary)]/10 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:shadow-lg ${isExpanded ? 'col-span-full' : ''}`}
    >
      <div 
        onClick={onToggle}
        className="cursor-pointer flex flex-col"
      >
        {/* Compact Image */}
        <div className={`relative w-full overflow-hidden ${isExpanded ? 'h-48' : 'h-32'}`}>
          <Image
            src={imageUrl}
            alt={section.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.3] grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-2 left-3">
             <span className="text-white/80 font-sans text-[10px] uppercase tracking-widest">
              L{index + 1}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-serif text-[var(--primary)] italic leading-tight mb-2 group-hover:text-[var(--secondary)] transition-colors">
            {section.title.split(". ")[1] || section.title}
          </h3>
          <p className="text-xs text-[var(--on-background)]/60 font-serif italic line-clamp-2 mb-4">
            {section.points[0]?.description}
          </p>
          
          <div className="mt-auto flex justify-between items-center">
            <span className="text-[8px] font-sans uppercase tracking-[0.2em] text-[var(--secondary)]">
              {isExpanded ? "Close" : "Read More"}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isExpanded ? 'bg-[var(--secondary)]' : 'bg-[var(--primary)]/20'}`} />
          </div>
        </div>
      </div>

      {/* Expanded Archive */}
      {isExpanded && (
        <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--primary)]/10 pt-6 mt-2">
            {section.points.map((point, pIdx) => (
              <div key={pIdx} className="space-y-2">
                <h4 className="text-sm font-serif text-[var(--primary)] italic border-b border-[var(--secondary)]/20 pb-1">
                  {point.title}
                </h4>
                <p className="text-xs text-[var(--on-background)]/70 font-serif leading-relaxed italic">
                  {point.description}
                </p>
                {point.subpoints && (
                  <div className="space-y-2 pl-4 border-l border-[var(--secondary)]/10 mt-2">
                    {point.subpoints.map((sub, sIdx) => (
                      <div key={sIdx}>
                        <h5 className="text-[var(--secondary)] font-sans uppercase tracking-widest text-[8px] mb-0.5">
                          {sub.title}
                        </h5>
                        <p className="text-[var(--on-background)]/60 text-[10px] font-serif italic">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MindMap: React.FC<{ data: Transcript }> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#f8f8f2] border-b border-[var(--primary)]/5">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[var(--secondary)] text-xs font-sans uppercase tracking-[0.3em] mb-2">
              The Dartmouth Archives
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--primary)] italic">
              Core Philosophies
            </h3>
          </div>
          <p className="text-[var(--on-background)]/40 font-serif italic text-sm max-w-sm">
            Press clippings and field notes from the legendary address at Dartmouth College.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.sections.map((section, index) => (
            <MindMapCard 
              key={index} 
              section={section} 
              index={index} 
              isExpanded={expandedIndex === index}
              onToggle={() => toggleSection(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindMap;
