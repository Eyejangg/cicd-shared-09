const ContentCard = ({ image, title, likes, views, author, category, isNew, isFeatured }) => {
  return (
    <div className="group relative card-hover">
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        {/* Image Container */}
        <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {category && (
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-white/95 text-primary shadow-lg backdrop-blur-sm">
                {category}
              </span>
            )}
            {isNew && (
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                ใหม่
              </span>
            )}
            {isFeatured && (
              <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                ⭐ แนะนำ
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
            <button className="p-2.5 rounded-xl bg-white/90 backdrop-blur-sm text-slate-600 hover:text-primary hover:bg-white shadow-lg transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <button className="p-2.5 rounded-xl bg-white/90 backdrop-blur-sm text-slate-600 hover:text-pink-500 hover:bg-white shadow-lg transition-all hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Title on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-base md:text-lg line-clamp-2 drop-shadow-lg group-hover:text-primary-content transition-colors">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          {/* Author */}
          {author && (
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-md">
                  {author.charAt(0)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="font-semibold text-slate-800">{author}</p>
                <p className="text-xs text-slate-400">ผู้เขียน • 2 วันที่แล้ว</p>
              </div>
            </div>
          )}

          {/* Stats & Action */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-rose-500 cursor-pointer transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {likes?.toLocaleString()}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views?.toLocaleString()}
              </span>
            </div>

            <button className="px-4 py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-violet-500 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
              อ่านเลย →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
