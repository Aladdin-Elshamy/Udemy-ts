import React, { useState } from "react";

const categories = [
  {
    name: "Development",
    subcategories: [],
  },
  {
    name: "Business",
    subcategories: [
      {
        name: "Entrepreneurship",
        subcategories: [],
      },
      {
        name: "Business Analytics & Intelligence",
        subcategories: ["Data Analysis", "Business Analysis", "SQL"],
      },
      {
        name: "Project Management",
        subcategories: [],
      },
    ],
  },
  // Add more categories...
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="relative inline-block">
      <ul className="bg-white border border-gray-200 w-64">
        {categories.map((category, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              {category.name}
            </button>
            {/* First-level dropdown */}
            {activeCategory === index && category.subcategories.length > 0 && (
              <ul className="absolute left-full top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="relative group">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      {typeof subcategory === "string"
                        ? subcategory
                        : subcategory.name}
                    </button>
                    {/* Second-level dropdown */}
                    {subcategory.subcategories?.length > 0 && (
                      <ul className="absolute left-full top-0 w-64 bg-white border border-gray-200 shadow-lg hidden group-hover:block">
                        {subcategory.subcategories.map(
                          (subsub, subsubIndex) => (
                            <li key={subsubIndex}>
                              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                {subsub}
                              </button>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
