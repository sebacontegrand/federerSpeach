"use client";
import React from "react";

const Transcript = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="prose prose-stone max-w-none">
        <p className="font-serif italic text-lg text-black/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[var(--secondary)]">
          Thank you! Hello, Class of 2024! It’s an incredible feeling to be here
          with you. I am so excited to join you today. Really, you have no idea how
          excited I am. Keep in mind, this is literally the second time I have ever
          set foot on a college campus. Second time ever. 
        </p>
        <div className="mt-8 pt-8 border-t border-black/5 space-y-6">
           <p className="text-lg font-serif italic text-black/80 leading-relaxed">
             I graduatated tennis recently. I know the word is &ldquo;retire.&rdquo; &ldquo;Roger Federer retired from tennis.&rdquo; Retired... The word is awful. You wouldn’t say you retired from college, right? Like you, I’m figuring out what’s next.
           </p>
           <p className="text-lg font-serif italic text-black/80 leading-relaxed">
            The first lesson is: &ldquo;Effortless&rdquo; is a myth. People often described my playing style as effortless, but little did they know the hard work and dedication it took to make it look easy. I spent years whining, swearing, and throwing my racket before I learned to keep my cool.
           </p>
           <div className="pt-4 flex justify-center text-[var(--secondary)] text-[10px] uppercase tracking-[0.5em] font-sans">
              [ End of Archival Fragment ]
           </div>
        </div>
      </div>
    </div>
  );
};

export default Transcript;
