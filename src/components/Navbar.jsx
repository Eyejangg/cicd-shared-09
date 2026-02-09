import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "หน้าแรก", icon: "🏠" },
    { path: "/explore", label: "สำรวจ", icon: "🔍" },
    { path: "/categories", label: "หมวดหมู่", icon: "📚" },
    { path: "/popular", label: "ยอดนิยม", icon: "🔥" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Backdrop blur container */}
        <div className="glass shadow-lg shadow-slate-900/5">
          <div className="container-responsive">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 md:gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-violet-500 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg">
                    📘
                  </div>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-black gradient-text">EduShare</span>
                  <span className="hidden md:block text-[10px] text-slate-400 font-medium -mt-1">เรียนรู้ได้ทุกที่ ทุกเวลา</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-slate-600 hover:text-primary hover:bg-primary/5"
                      }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Auth Buttons - Desktop */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/register"
                  className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 hover:text-primary border-2 border-slate-200 hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  สมัครสมาชิก
                </Link>
                <Link
                  to="/login"
                  className="relative group px-6 py-2.5 rounded-xl font-bold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-secondary"></div>
                  <div className="absolute inset-0 shimmer"></div>
                  <span className="relative text-white flex items-center gap-2">
                    เข้าสู่ระบบ
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-primary/10 transition-all"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all transform origin-center ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all ${isOpen ? 'opacity-0 scale-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all transform origin-center ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'}`}>
            <div className="container-responsive py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all ${isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3.5 rounded-xl font-semibold text-center border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-all"
                >
                  สมัครสมาชิก
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3.5 rounded-xl font-bold text-center bg-gradient-to-r from-primary to-secondary text-white"
                >
                  เข้าสู่ระบบ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
