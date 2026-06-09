"use client";
import React from "react";

const Summary = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif italic text-[var(--primary)]">The Core Insights</h2>
        <div className="w-16 h-px bg-[var(--secondary)]/30 mx-auto mt-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="p-8 bg-white border border-black/5 rounded-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-serif italic text-[var(--primary)] mb-4 border-b border-[var(--secondary)]/20 pb-2">Effortless is a Myth</h3>
          <p className="text-sm font-serif text-black/70 leading-relaxed">
            Success appears effortless because of the thousands of hours of unseen work. Excellence is a choice made every single day.
          </p>
        </div>
        <div className="p-8 bg-white border border-black/5 rounded-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-serif italic text-[var(--primary)] mb-4 border-b border-[var(--secondary)]/20 pb-2">It&apos;s Only a Point</h3>
          <p className="text-sm font-serif text-black/70 leading-relaxed">
            In tennis, you win only about 54% of points. Learning to move past failure instantly is the hallmark of a champion.
          </p>
        </div>
        <div className="p-8 bg-white border border-black/5 rounded-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-serif italic text-[var(--primary)] mb-4 border-b border-[var(--secondary)]/20 pb-2">Life is Bigger Than the Court</h3>
          <p className="text-sm font-serif text-black/70 leading-relaxed">
            A career is just a part of a life. Maintaining curiosities, family, and philanthropy creates a complete legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
