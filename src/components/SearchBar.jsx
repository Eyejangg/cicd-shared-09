const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

        {/* Search container */}
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Search icon */}
          <div className="pl-4 md:pl-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-primary/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="ค้นหาบทความ, หัวข้อ, แท็ก..."
            className="flex-1 py-4 md:py-5 px-3 md:px-4 text-base md:text-lg bg-transparent border-none outline-none placeholder:text-base-content/40"
          />

          {/* Search button */}
          <button className="m-2 px-4 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all btn-shine whitespace-nowrap">
            <span className="hidden sm:inline">ค้นหา</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Popular searches */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6">
        <span className="text-sm text-base-content/50">ยอดนิยม:</span>
        {["คณิตศาสตร์ ม.6", "ฟิสิกส์ PAT2", "ภาษาอังกฤษ", "O-NET"].map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-base-200 hover:bg-primary/10 hover:text-primary transition-all"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
