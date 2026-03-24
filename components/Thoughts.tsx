"use client";
import React, { useState } from "react";

const Thoughts = () => {
  const [thought, setThought] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (thought.trim() && name.trim()) {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, thought }),
        });

        if (response.ok) {
          setSubmitted(true);
          setThought("");
          setName("");
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          console.error("Failed to archive tribute");
        }
      } catch (error) {
        console.error("Error sending tribute:", error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col gap-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-[var(--surface)] p-10 rounded-xl border border-black/5 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="YOUR NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-black/10 py-3 mb-2 font-sans uppercase tracking-widest text-[10px] focus:border-[var(--secondary)] outline-none transition-colors"
                required
              />
              <textarea
                placeholder="SHARE YOUR TRIBUTE..."
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                className="w-full bg-transparent border-b border-black/10 py-3 font-serif italic focus:border-[var(--secondary)] outline-none transition-colors min-h-[120px] resize-none"
                required
              ></textarea>
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-5 bg-black text-white font-sans uppercase tracking-[0.3em] text-[10px] hover:bg-[var(--secondary)] transition-all duration-500 rounded-sm disabled:bg-gray-400 group relative overflow-hidden"
              >
                <span className="relative z-10">{submitted ? "Archived Successfully" : "Add to Archive"}</span>
                <div className="absolute inset-0 bg-[var(--secondary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>

          {/* Archival Feed (Simulated) */}
          <div className="space-y-8 max-h-[500px] overflow-y-auto pr-6 custom-scrollbar">
             {[
               { name: "MARIA G.", text: "Roger, you defined elegance for a whole generation. Thank you for the memories." },
               { name: "DAVID K.", text: "Effortless is indeed a myth. Your hard work inspired my own journey in coding." },
               { name: "SARAH L.", text: "The backhand of a god, the heart of a champion. Forever the GOAT." }
             ].map((item, idx) => (
                <div key={idx} className="border-b border-black/5 pb-8 relative group">
                  <div className="absolute -left-4 top-0 w-1 h-0 bg-[var(--secondary)] group-hover:h-full transition-all duration-500" />
                  <p className="text-[var(--primary)] font-serif italic leading-relaxed mb-4 text-lg">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <div className="flex justify-between items-center text-[8px] font-sans uppercase tracking-[0.3em] text-black/40">
                    <span>— {item.name}</span>
                    <span>March 2026</span>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
