import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "หน้าแรก", icon: "🏠" },
    { path: "/explore", label: "สำรวจ", icon: "🔍" },
    { path: "/categories", label: "หมวดหมู่", icon: "📚" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 md:gap-3 group"
            >
              <span className="text-2xl md:text-3xl group-hover:animate-bounce transition-all">📘</span>
              <span className="text-xl md:text-2xl font-bold gradient-text">EduShare</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${isActive(link.path)
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "text-base-content/70 hover:bg-primary/10 hover:text-primary"
                    }`}
                >
                  <span className="text-sm">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/register"
                className="px-5 py-2.5 rounded-full font-medium text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
              >
                สมัครสมาชิก
              </Link>
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all btn-shine"
              >
                เข้าสู่ระบบ
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="container-responsive pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive(link.path)
                    ? "bg-primary text-white"
                    : "text-base-content/70 hover:bg-primary/10"
                  }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl font-medium text-center border-2 border-primary/20 text-primary hover:bg-primary/5"
              >
                สมัครสมาชิก
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl font-semibold text-center bg-gradient-to-r from-primary to-secondary text-white"
              >
                เข้าสู่ระบบ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
