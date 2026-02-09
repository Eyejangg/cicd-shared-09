const Stats = () => {
  const stats = [
    { value: "10,000+", label: "บทความ", icon: "📚", color: "from-primary to-indigo-400" },
    { value: "50,000+", label: "ผู้ใช้งาน", icon: "👥", color: "from-secondary to-emerald-400" },
    { value: "500+", label: "หมวดหมู่", icon: "📂", color: "from-accent to-amber-400" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Glow */}
          <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

          {/* Card */}
          <div className="relative flex items-center gap-3 md:gap-4 px-5 md:px-6 py-4 md:py-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200">
            <div className="text-2xl md:text-3xl">{stat.icon}</div>
            <div>
              <div className={`text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-base-content/50 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
