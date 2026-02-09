import SearchBar from "./SearchBar";
import Stats from "./Stats";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

        {/* Animated Orbs */}
        <div className="absolute top-20 left-[10%] w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[10%] w-72 md:w-[500px] h-72 md:h-[500px] bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>

        {/* Decorative Elements */}
        <div className="absolute top-32 right-[20%] text-6xl animate-float opacity-20">📚</div>
        <div className="absolute bottom-32 left-[15%] text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🎓</div>
        <div className="absolute top-1/2 right-[10%] text-4xl animate-float opacity-20" style={{ animationDelay: '2s' }}>💡</div>
      </div>

      <div className="relative container-responsive text-center py-12 md:py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 md:mb-8 animate-pulse-glow">
          <span className="text-lg md:text-xl">✨</span>
          <span className="text-sm md:text-base font-medium text-primary">แพลตฟอร์มแบ่งปันความรู้อันดับ 1 ของไทย</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-base-content leading-tight">
          เรียนรู้ได้ทุกที่{" "}
          <br className="sm:hidden" />
          <span className="gradient-text">ทุกเวลา</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/60 max-w-3xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed">
          ค้นหาสรุปเนื้อหา บทเรียน และไฟล์เอกสารการศึกษา
          <br className="hidden sm:block" />
          จากชุมชนนักเรียนกว่า <span className="text-primary font-semibold">50,000+ คน</span> ทั่วประเทศ
        </p>

        {/* Search Bar */}
        <div className="mb-10 md:mb-16">
          <SearchBar />
        </div>

        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
};

export default HeroSection;
