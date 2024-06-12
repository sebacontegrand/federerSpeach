"use client";
import React, { useState } from "react";
import Transcript from "./Transcript";
import Summary from "./Summary";
import MindMap from "./MindMap";
import transcript from "../components/transcript.json";
import Image from "next/image";
import federer from "../public/federer.jpeg";
export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSummary, setIsSummary] = useState(false);

  const toggleTranscript = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleSummary = () => {
    setIsSummary(!isSummary);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold mb-4">
          CodeCraft: Champion Mindset - Drawing Inspiration from Roger Federer
          Speech
        </h1>
        <Image src={federer} alt={""} width={80} height={80} />
      </div>
      <h2 className="text-2xl">
        While coding may seem worlds apart from professional tennis, there are
        indeed parallels in terms of mindset, skills, and values that contribute
        to success and excellence in both domains.
      </h2>
      <hr className="my-4 p-2" />
      <h1 className="my-4 p-2">
        1.Preparation and Practice: Coding also requires consistent practice and
        learning. Both endeavors demand dedication to honing skills and
        mastering techniques over time.{" "}
      </h1>
      <h1 className="my-4 p-2">
        2.Continuous Improvement: There is always something new to learn,
        whether it is mastering a new language feature, adopting a new
        framework, or improving problem-solving skills.
      </h1>
      <h1 className="my-4 p-2">
        3.Adaptability: Much like how coders need to adapt their approach to
        different projects, requirements, and technologies. Mental Discipline:
        Both coding and tennis require mental discipline. Just as Federer needs
        focus and concentration during a match, coders need to stay focused when
        writing complex algorithms, debugging code, or designing software
        architecture.
      </h1>
      <h1 className="my-4 p-2">
        4.Handling Challenges: Similarly, coders face challenges such as
        debugging errors, optimizing performance, and meeting deadlines. Both
        require resilience and the ability to bounce back from failures.
        Creativity: Coding involves creative problem-solving, where developers
        come up with elegant solutions to complex problems and create
        user-friendly interfaces.{" "}
      </h1>
      <h1 className="my-4 p-2">
        5.Teamwork and Collaboration: While tennis may seem like an individual
        sport, Similarly,coding often involves collaboration with teammates,
        whether it is pair programming, code reviews, or working in
        cross-functional teams.
      </h1>
      <h1 className="my-4 p-2">
        6.Legacy and Impact: Many coders aspire to leave a positive impact
        through their work, whether it is building software that improves
        peoples lives, contributes to open-source projects, or mentors the next
        generation of developers.
      </h1>
      <h1 className="text-2xl p-2">
        Listen to the inspiring speech delivered by Roger Federer at Dartmouth.
      </h1>
      <div className="video-container mb-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pqWUuYTcG-o"
          title="Roger Federer's Speech"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <MindMap data={transcript} />
      <div className="flex flex-col justify-between">
        <div className="transcript">
          <h2 className="text-2xl font-semibold mb-2"> Transcript</h2>
          <button
            onClick={toggleTranscript}
            className="mb-2 px-4 py-2 bg-green-700 text-white rounded"
          >
            {isExpanded ? "Hide Transcript" : "Show Transcript"}
          </button>
          <div
            className={`transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <Transcript />
          </div>
        </div>
        {!isExpanded ? (
          <div className="transcript">
            <h2 className="text-2xl font-semibold mb-2">Main Ideas</h2>
            <button
              onClick={toggleSummary}
              className="mb-2 px-4 py-2 bg-green-700 text-white rounded"
            >
              {isSummary ? "Hide Main Ideas" : "Show Main Ideas"}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${
                isSummary ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
            >
              <Summary />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
