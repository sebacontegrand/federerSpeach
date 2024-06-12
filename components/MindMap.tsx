// components/MindMap.tsx
import { useState } from "react";

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

const MindMap: React.FC<{ data: Transcript }> = ({ data }) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleSection = (index: number) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        {data.sections.map((section, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleSection(index)}
              className="text-2xl font-semibold mb-2 bg-green-500 text-white p-2 rounded w-full text-left"
            >
              {section.title}
            </button>
            {expandedSections[index] && (
              <div className="mt-2 pl-4 border-l-2 border-blue-500  rounded-lg">
                {section.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="mb-2">
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    {point.description && (
                      <p className="text-gray-500">{point.description}</p>
                    )}
                    {point.subpoints && (
                      <ul className="list-disc list-inside ml-4 mt-2">
                        {point.subpoints.map((subpoint, subpointIndex) => (
                          <li key={subpointIndex}>
                            <h4 className="text-lg font-semibold">
                              {subpoint.title}
                            </h4>
                            <p className="text-green-400">
                              {subpoint.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMap;
