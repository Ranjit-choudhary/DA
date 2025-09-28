import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Instagram } from "lucide-react";

interface WorkItem {
  id: number;
  category: "Graphic" | "UI/UX" | "3D";
  image: string;
  name: string;
  instaLink: string;
}

// Use direct paths for public folder images
const workItems: WorkItem[] = [
  {
    id: 1,
    category: "Graphic",
    image: "/images/active/1.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 2,
    category: "UI/UX",
    image: "/images/active/2.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 3,
    category: "Graphic",
    image: "/images/active/3.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 4,
    category: "UI/UX",
    image: "/images/active/4.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 5,
    category: "3D",
    image: "/images/active/5.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 6,
    category: "3D",
    image: "/images/active/6.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 7,
    category: "UI/UX",
    image: "/images/active/7.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 8,
    category: "UI/UX",
    image: "/images/active/8.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 9,
    category: "3D",
    image: "/images/active/9.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 10,
    category: "3D",
    image: "/images/active/10.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 11,
    category: "3D",
    image: "/images/active/11.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 12,
    category: "3D",
    image: "/images/active/12.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 13,
    category: "3D",
    image: "/images/active/13.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 14,
    category: "3D",
    image: "/images/active/14.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 15,
    category: "Graphic",
    image: "/images/active/15.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
  {
    id: 16,
    category: "Graphic",
    image: "/images/active/16.webp",
    name: "Ranjit",
    instaLink: "https://www.instagram.com/_ranjit_choudhary_/",
  },
];

const categories = ["All", "Graphic", "UI/UX", "3D"] as const;

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<
    (typeof categories)[number]
  >("All");

  const filteredItems =
    activeFilter === "All"
      ? workItems
      : workItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 px-6 text-center">
        <h1 className="page-title">
          Our Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of our creative projects, spanning across graphic
          design, UI/UX, and 3D art.
        </p>
      </section>

      <section className="px-6 pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn ${
                  activeFilter === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="work-card group break-inside-avoid mb-6 relative overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <a
                    href={item.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <span className="text-white font-semibold">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;