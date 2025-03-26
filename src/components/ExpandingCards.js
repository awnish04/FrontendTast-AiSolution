import { useState, useEffect } from "react";

const panels = [
  {
    id: 1,
    image:
      "https://r.mobirisesite.com/920997/assets/images/photo-1649972904349-6e44c42644a7.jpeg",
  },
  {
    id: 2,
    image:
      "https://r.mobirisesite.com/920997/assets/images/photo-1434494878577-86c23bcb06b9.jpeg",
  },
  {
    id: 3,
    image:
      "https://r.mobirisesite.com/920997/assets/images/photo-1519389950473-47ba0277781c.jpeg",
  },
  {
    id: 4,
    image:
      "https://r.mobirisesite.com/920997/assets/images/photo-1421757350652-9f65a35effc7.jpeg",
  },
  {
    id: 5,
    image:
      "https://r.mobirisesite.com/920997/assets/images/photo-1498050108023-c5249f4df085.jpeg",
  },
];

export default function ExpandingCards() {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevId) => (prevId % panels.length) + 1);
    }, 3000); // Auto-expand every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-fit mt-5 mb-5">
      <div className="flex w-11/12 max-w-7xl space-x-4">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`relative flex-1 h-[30vh] lg:h-[50vh] bg-cover bg-center rounded-2xl cursor-pointer transition-all duration-700 ease-in-out ${
              activeId === panel.id ? "flex-[5]" : "flex-[0.5]"
            }`}
            style={{ backgroundImage: `url(${panel.image})` }}
            onClick={() => setActiveId(panel.id)}
            onMouseEnter={() => setActiveId(panel.id)}
          >
            <h3
              className={`absolute bottom-5 left-5 text-white text-xl opacity-0 transition-opacity duration-500 ease-in-out ${
                activeId === panel.id ? "opacity-100 delay-300" : ""
              }`}
            >
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
