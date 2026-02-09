import ContentCard from "./ContentCard";

const mockData = [
  {
    id: 1,
    title: "เทคนิคจำศัพท์ภาษาอังกฤษ 1,000 คำ ใน 30 วัน",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    likes: 567,
    views: 8932,
    author: "สมชาย ใจดี",
    category: "ภาษาอังกฤษ",
  },
  {
    id: 2,
    title: "แคลคูลัส 101: พื้นฐานที่เด็กใหม่ต้องรู้",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    likes: 445,
    views: 6789,
    author: "วิชัย คณิต",
    category: "คณิตศาสตร์",
  },
  {
    id: 3,
    title: "สรุปฟิสิกส์ ม.ปลาย ครบทุกบท พร้อมสูตร",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=600&h=400&fit=crop",
    likes: 892,
    views: 12340,
    author: "ดาว ฟิสิกส์",
    category: "ฟิสิกส์",
  },
  {
    id: 4,
    title: "เทคนิคทำข้อสอบ O-NET ภาษาไทย ให้ได้คะแนนสูง",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    likes: 334,
    views: 5678,
    author: "ภาษา ไทย",
    category: "ภาษาไทย",
  },
  {
    id: 5,
    title: "เคมีอินทรีย์สำหรับผู้เริ่มต้น เข้าใจง่าย",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    likes: 521,
    views: 7823,
    author: "เคมี สนุก",
    category: "เคมี",
  },
  {
    id: 6,
    title: "Programming 101: เริ่มเขียนโปรแกรมตั้งแต่ศูนย์",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    likes: 789,
    views: 15678,
    author: "โค้ด มาสเตอร์",
    category: "คอมพิวเตอร์",
  },
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-base-200/30 to-base-100">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              <span>🔥</span> ยอดนิยม
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content">
              บทความยอดนิยม
            </h2>
            <p className="text-base-content/60 mt-2 text-sm md:text-base">
              เนื้อหาที่ได้รับความนิยมจากผู้ใช้งาน
            </p>
          </div>

          <button className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all self-start sm:self-auto">
            ดูทั้งหมด
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {mockData.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ContentCard {...item} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="group relative px-8 py-4 rounded-2xl font-semibold overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Border */}
            <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-transparent rounded-2xl transition-all duration-300"></div>
            {/* Text */}
            <span className="relative text-primary group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              โหลดเพิ่มเติม
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
