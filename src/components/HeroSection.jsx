import SearchBar from "./SearchBar";
import Stats from "./Stats";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 animate-pulse"></div>
        </div>

        {/* Large Orbs */}
        <div className="absolute -top-40 -left-40 w-80 md:w-[500px] h-80 md:h-[500px] bg-gradient-to-br from-primary/30 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 md:w-[600px] h-96 md:h-[600px] bg-gradient-to-br from-secondary/30 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-pink-500/10 rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        {/* Floating Elements */}
        <div className="absolute top-[15%] right-[15%] text-6xl md:text-8xl animate-float opacity-20 select-none">📚</div>
        <div className="absolute bottom-[20%] left-[10%] text-5xl md:text-7xl animate-float opacity-20 select-none" style={{ animationDelay: '1s' }}>🎓</div>
        <div className="absolute top-[40%] right-[8%] text-4xl md:text-6xl animate-float opacity-20 select-none" style={{ animationDelay: '2s' }}>💡</div>
        <div className="absolute top-[60%] left-[5%] text-3xl md:text-5xl animate-float opacity-15 select-none" style={{ animationDelay: '1.5s' }}>🚀</div>
        <div className="absolute top-[25%] left-[20%] text-4xl md:text-6xl animate-float opacity-15 select-none" style={{ animationDelay: '0.5s' }}>✨</div>
      </div>

      <div className="relative container-responsive text-center py-16 md:py-24">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white shadow-xl shadow-primary/10 border border-primary/10 mb-8 md:mb-10 animate-pulse-glow">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm md:text-base font-semibold text-primary">🏆 แพลตฟอร์มการศึกษาอันดับ 1 ของไทย</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-[1.1]">
          <span className="block text-slate-800">เรียนรู้ได้ทุกที่</span>
          <span className="block mt-2 gradient-text">ทุกเวลา</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 md:mb-14 px-4 leading-relaxed">
          ค้นหาสรุปเนื้อหา บทเรียน และไฟล์เอกสารการศึกษา จากชุมชนนักเรียนกว่า{' '}
          <span className="font-bold text-primary">50,000+</span> คนทั่วประเทศ
        </p>

        {/* Search Bar */}
        <div className="mb-12 md:mb-20">
          <SearchBar />
        </div>

        {/* Stats */}
        <Stats />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm">เลื่อนลงเพื่อดูเพิ่มเติม</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
