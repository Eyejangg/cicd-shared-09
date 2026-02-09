import { useState } from "react";

const categories = [
  { id: "all", label: "ทั้งหมด", icon: "🔥", count: "10,000+" },
  { id: "middle", label: "ม.ต้น", icon: "📗", count: "2,500+" },
  { id: "high", label: "ม.ปลาย", icon: "📘", count: "4,200+" },
  { id: "university", label: "มหาวิทยาลัย", icon: "🎓", count: "2,100+" },
  { id: "exam", label: "สอบเข้า", icon: "✏️", count: "1,200+" },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="py-6 md:py-8 bg-gradient-to-b from-transparent via-base-200/50 to-transparent">
      <div className="container-responsive">
        {/* Section title */}
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-base-content/70">
            เลือกระดับการศึกษา
          </h2>
        </div>

        {/* Tabs container with horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex justify-start md:justify-center gap-2 md:gap-3 min-w-max md:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-medium transition-all duration-300 whitespace-nowrap ${activeTab === cat.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-white hover:bg-primary/5 text-base-content/70 hover:text-primary shadow-md hover:shadow-lg"
                  }`}
              >
                <span className="text-lg md:text-xl">{cat.icon}</span>
                <span className="text-sm md:text-base">{cat.label}</span>
                <span className={`hidden sm:inline-block px-2 py-0.5 text-xs rounded-full ${activeTab === cat.id
                    ? "bg-white/20"
                    : "bg-base-200 text-base-content/50"
                  }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
