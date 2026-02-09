const ContentCard = ({ image, title, likes, views, author, category }) => {
  return (
    <div className="group relative card-hover">
      {/* Glow effect on hover */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
        {/* Image Container */}
        <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Category badge */}
          {category && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-lg">
                {category}
              </span>
            </div>
          )}

          {/* Save button */}
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-sm sm:text-base line-clamp-2 drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Author */}
          {author && (
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-semibold shadow-md">
                {author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-base-content">{author}</p>
                <p className="text-xs text-base-content/50">ผู้เขียน</p>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between pt-3 border-t border-base-200">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-sm text-base-content/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="font-medium">{likes?.toLocaleString()}</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm text-base-content/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="font-medium">{views?.toLocaleString()}</span>
              </span>
            </div>

            {/* Read button */}
            <button className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
              อ่านเลย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
