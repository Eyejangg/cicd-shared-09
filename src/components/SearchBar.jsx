const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="relative group">
        {/* Animated glow ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>

        {/* Main container */}
        <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-0 p-2 bg-white rounded-2xl shadow-2xl shadow-primary/10">
          {/* Search input */}
          <div className="flex items-center flex-1 w-full">
            <div className="pl-4 md:pl-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="ค้นหาบทความ, วิชา, หัวข้อที่สนใจ..."
              className="flex-1 py-4 md:py-5 px-4 text-base md:text-lg bg-transparent border-none outline-none placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Category dropdown - desktop */}
          <div className="hidden md:flex items-center border-l border-slate-200 px-4">
            <select className="py-2 px-2 bg-transparent text-slate-600 font-medium outline-none cursor-pointer">
              <option>ทุกหมวดหมู่</option>
              <option>คณิตศาสตร์</option>
              <option>วิทยาศาสตร์</option>
              <option>ภาษาอังกฤษ</option>
              <option>ภาษาไทย</option>
            </select>
          </div>

          {/* Search button */}
          <button className="w-full sm:w-auto m-1 px-6 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-primary via-violet-500 to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all btn-shine flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>ค้นหา</span>
          </button>
        </div>
      </div>

      {/* Popular searches */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-8">
        <span className="text-sm text-slate-500 mr-1">🔥 ยอดนิยม:</span>
        {[
          { tag: "คณิต ม.6", icon: "📐" },
          { tag: "ฟิสิกส์ PAT2", icon: "⚛️" },
          { tag: "English Grammar", icon: "📖" },
          { tag: "O-NET สังคม", icon: "🌍" },
          { tag: "เคมี อินทรีย์", icon: "🧪" },
        ].map((item) => (
          <button
            key={item.tag}
            className="group flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-white shadow-md hover:shadow-lg border border-slate-100 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all"
          >
            <span>{item.icon}</span>
            <span>{item.tag}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
