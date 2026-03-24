"use client";
import React, { useState } from "react";
import Transcript from "./Transcript";
import Summary from "./Summary";

export default function VideoPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSummary, setIsSummary] = useState(false);

  const toggleTranscript = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) setIsSummary(false);
  };
  const toggleSummary = () => {
    setIsSummary(!isSummary);
    if (!isSummary) setIsExpanded(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col gap-10">
        {/* Compact Video Window */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-[var(--secondary)]/10 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-video rounded-xl overflow-hidden border border-black/5 shadow-xl bg-black max-w-2xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pqWUuYTcG-o"
              title="Roger Federer's Speech"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Minimalist Controls */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={toggleTranscript}
              className={`px-6 py-3 rounded-md font-sans uppercase tracking-[0.2em] text-[10px] transition-all duration-500 border ${
                isExpanded 
                  ? "bg-black text-white border-black" 
                  : "bg-transparent text-black border-black/10 hover:border-black"
              }`}
            >
              {isExpanded ? "Close Archive" : "Archival Transcript"}
            </button>
            <button
              onClick={toggleSummary}
              className={`px-6 py-3 rounded-md font-sans uppercase tracking-[0.2em] text-[10px] transition-all duration-500 border ${
                isSummary 
                  ? "bg-black text-white border-black" 
                  : "bg-transparent text-black border-black/10 hover:border-black"
              }`}
            >
              {isSummary ? "Close Insights" : "Key Lessons"}
            </button>
          </div>

          <div className="relative">
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                isExpanded ? "opacity-100 max-h-[1500px] mt-6" : "opacity-0 max-h-0"
              }`}
            >
              <div className="p-8 md:p-10 rounded-lg bg-white border border-black/5 shadow-sm">
                 <Transcript />
              </div>
            </div>

            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                isSummary ? "opacity-100 max-h-[1500px] mt-6" : "opacity-0 max-h-0"
              }`}
            >
              <div className="p-8 md:p-10 rounded-lg bg-white border border-black/5 shadow-sm">
                <Summary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
