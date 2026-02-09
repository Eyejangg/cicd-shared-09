import { useState } from "react";

const categories = [
  { id: "all", label: "ทั้งหมด", icon: "🔥", count: "10,000+", color: "from-orange-500 to-red-500" },
  { id: "middle", label: "ม.ต้น", icon: "📗", count: "2,500+", color: "from-green-500 to-emerald-500" },
  { id: "high", label: "ม.ปลาย", icon: "📘", count: "4,200+", color: "from-blue-500 to-indigo-500" },
  { id: "university", label: "มหาวิทยาลัย", icon: "🎓", count: "2,100+", color: "from-purple-500 to-violet-500" },
  { id: "exam", label: "สอบเข้า", icon: "✏️", count: "1,200+", color: "from-amber-500 to-yellow-500" },
  { id: "onet", label: "O-NET", icon: "📋", count: "800+", color: "from-cyan-500 to-teal-500" },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="py-8 md:py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white"></div>

      <div className="relative container-responsive">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-3">
            <span>📚</span> หมวดหมู่ยอดนิยม
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            เลือกระดับการศึกษาที่คุณสนใจ
          </h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            เนื้อหาคุณภาพสำหรับทุกระดับชั้น
          </p>
        </div>

        {/* Tabs - scrollable on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex justify-start md:justify-center gap-3 md:gap-4 min-w-max md:min-w-0">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`group relative flex flex-col items-center p-4 md:p-5 rounded-2xl font-medium transition-all duration-300 min-w-[100px] md:min-w-[120px] ${isActive
                      ? "bg-white shadow-xl scale-105"
                      : "bg-white/50 hover:bg-white hover:shadow-lg"
                    }`}
                >
                  {/* Active indicator glow */}
                  {isActive && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${cat.color} rounded-2xl blur-md opacity-30`}></div>
                  )}

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-2xl md:text-3xl mb-2 transition-all ${isActive
                        ? `bg-gradient-to-br ${cat.color} shadow-lg`
                        : "bg-slate-100 group-hover:bg-slate-200"
                      }`}>
                      {cat.icon}
                    </div>

                    {/* Label */}
                    <div className={`text-sm md:text-base font-semibold transition-colors ${isActive ? "text-slate-800" : "text-slate-600"
                      }`}>
                      {cat.label}
                    </div>

                    {/* Count badge */}
                    <div className={`mt-1 px-2 py-0.5 text-xs rounded-full transition-all ${isActive
                        ? `bg-gradient-to-r ${cat.color} text-white`
                        : "bg-slate-100 text-slate-500"
                      }`}>
                      {cat.count}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
