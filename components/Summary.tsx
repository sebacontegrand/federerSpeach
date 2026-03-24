"use client";
import React from "react";

const Summary = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif italic text-[var(--primary)]">The Core Insights</h2>
        <div className="w-16 h-1 bg-[var(--secondary)] mx-auto mt-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-8 bg-white border border-black/5 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-xl font-serif italic text-[var(--primary)] mb-4 border-b border-[var(--secondary)]/20 pb-2">1. Effortless is a Myth</h3>
          <p className="text-sm font-serif italic text-black/70 leading-relaxed">
            Success appears effortless because of the thousands of hours of unseen work. Excellence is a choice made every single day.
          </p>
        </div>
        <div className="p-8 bg-white border border-black/5 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-xl font-serif italic text-[var(--primary)] mb-4 border-b border-[var(--secondary)]/20 pb-2">2. It&apos;s Only a Point</h3>
          <p className="text-sm font-serif italic text-black/70 leading-relaxed">
            In tennis, you win only about 54% of points. Learning to move past failure instantly is the hallmark of a champion.
          </p>
        </div>
        <div className="p-8 bg-white border border-black/5 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-xl font-serif italic text-[var(--primary)] mb-4 border-b border-[var(--secondary)]/20 pb-2">3. Life is Bigger Than the Court</h3>
          <p className="text-sm font-serif italic text-black/70 leading-relaxed">
            A career is just a part of a life. Maintaining curiosities, family, and philanthropy creates a complete legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
