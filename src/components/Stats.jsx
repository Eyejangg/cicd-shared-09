const Stats = () => {
  const stats = [
    {
      value: "10,000+",
      label: "บทความ",
      sublabel: "อัพเดทใหม่ทุกวัน",
      icon: "📚",
      gradient: "from-primary to-violet-500"
    },
    {
      value: "50,000+",
      label: "ผู้ใช้งาน",
      sublabel: "เติบโตทุกเดือน",
      icon: "👥",
      gradient: "from-secondary to-cyan-500"
    },
    {
      value: "500+",
      label: "หมวดหมู่",
      sublabel: "ครอบคลุมทุกวิชา",
      icon: "📂",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      value: "98%",
      label: "ความพึงพอใจ",
      sublabel: "จากผู้ใช้งานจริง",
      icon: "⭐",
      gradient: "from-pink-500 to-rose-500"
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Hover glow */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

          {/* Card */}
          <div className="relative flex flex-col items-center p-4 md:p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-transparent group-hover:-translate-y-2">
            {/* Icon with gradient bg */}
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-2xl md:text-3xl shadow-lg mb-3`}>
              {stat.icon}
            </div>

            {/* Value */}
            <div className={`text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
              {stat.value}
            </div>

            {/* Label */}
            <div className="text-sm md:text-base font-bold text-slate-700 mt-1">
              {stat.label}
            </div>

            {/* Sublabel */}
            <div className="text-xs text-slate-400 mt-0.5">
              {stat.sublabel}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
