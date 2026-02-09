import ContentCard from "./ContentCard";

const mockData = [
  {
    id: 1,
    title: "เทคนิคจำศัพท์ภาษาอังกฤษ 1,000 คำ ใน 30 วัน",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    likes: 1567,
    views: 28932,
    author: "สมชาย ใจดี",
    category: "ภาษาอังกฤษ",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "แคลคูลัส 101: พื้นฐานที่เด็กใหม่ต้องรู้ก่อนสอบ",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    likes: 945,
    views: 16789,
    author: "วิชัย คณิตศาสตร์",
    category: "คณิตศาสตร์",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    title: "สรุปฟิสิกส์ ม.ปลาย ครบทุกบท พร้อมสูตรลัด 2024",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&h=400&fit=crop",
    likes: 2892,
    views: 42340,
    author: "ดาว ฟิสิกส์",
    category: "ฟิสิกส์",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 4,
    title: "เทคนิคทำข้อสอบ O-NET ภาษาไทย ให้ได้คะแนนสูงสุด",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    likes: 734,
    views: 15678,
    author: "ครูภาษา ไทย",
    category: "ภาษาไทย",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 5,
    title: "เคมีอินทรีย์สำหรับผู้เริ่มต้น เข้าใจง่ายใน 1 ชั่วโมง",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    likes: 1521,
    views: 27823,
    author: "ดร.เคมี สนุก",
    category: "เคมี",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 6,
    title: "Programming Python: เริ่มเขียนโปรแกรมตั้งแต่ศูนย์",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    likes: 3789,
    views: 65678,
    author: "โค้ด มาสเตอร์",
    category: "คอมพิวเตอร์",
    isNew: true,
    isFeatured: true,
  },
];

const ContentSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100/50 to-transparent"></div>

      <div className="relative container-responsive">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full text-orange-600 font-bold text-sm mb-4">
              <span className="animate-pulse">🔥</span> เนื้อหายอดนิยม
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800">
              บทความ<span className="gradient-text-warm">ยอดนิยม</span>
            </h2>
            <p className="text-slate-500 mt-3 text-base md:text-lg max-w-xl">
              เนื้อหาคุณภาพที่ได้รับความนิยมจากผู้ใช้งานกว่า 50,000+ คน
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl font-semibold text-slate-600 bg-white shadow-md hover:shadow-lg border border-slate-200 hover:border-primary/30 hover:text-primary transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              กรองผล
            </button>
            <button className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
              ดูทั้งหมด
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockData.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ContentCard {...item} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-14 md:mt-20">
          <div className="inline-flex flex-col items-center">
            <button className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden">
              {/* Animated gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-secondary opacity-10 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Border */}
              <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-transparent rounded-2xl transition-all duration-300"></div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
              {/* Text */}
              <span className="relative flex items-center gap-3 text-primary group-hover:text-white transition-colors duration-300">
                <span>โหลดเพิ่มเติม</span>
                <span className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </span>
            </button>
            <p className="text-slate-400 text-sm mt-3">แสดง 6 จาก 10,000+ บทความ</p>
          </div>
        </div>
      </div>

      {/* Fade animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ContentSection;
