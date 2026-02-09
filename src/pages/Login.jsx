import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 md:py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5"></div>

      {/* Animated Orbs */}
      <div className="absolute top-20 left-[10%] w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-[10%] w-72 md:w-[400px] h-72 md:h-[400px] bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="text-3xl md:text-4xl group-hover:animate-bounce">📘</span>
            <span className="text-2xl md:text-3xl font-bold gradient-text">EduShare</span>
          </Link>
          <p className="text-base-content/60 mt-2 text-sm md:text-base">แพลตฟอร์มแบ่งปันความรู้ฟรี</p>
        </div>

        {/* Login Card */}
        <div className="relative">
          {/* Card glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>

          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
              ยินดีต้อนรับกลับ! 👋
            </h2>
            <p className="text-center text-base-content/60 text-sm md:text-base mb-6 md:mb-8">
              เข้าสู่ระบบเพื่อเริ่มต้นการเรียนรู้
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-2">
                  อีเมล
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 md:py-3.5 rounded-xl border-2 border-base-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-2">
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 md:py-3.5 rounded-xl border-2 border-base-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-base-300 text-primary focus:ring-primary/20"
                  />
                  <span className="text-base-content/70">จำรหัสผ่าน</span>
                </label>
                <a href="#" className="text-primary hover:text-primary/80 font-medium">
                  ลืมรหัสผ่าน?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 md:py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all btn-shine"
              >
                เข้าสู่ระบบ
              </button>
            </form>

            {/* Signup Link */}
            <p className="text-center text-base-content/60 text-sm md:text-base mt-6">
              ยังไม่มีบัญชี?{" "}
              <Link to="/register" className="text-primary font-semibold hover:underline">
                สมัครสมาชิก
              </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent"></div>
              <span className="text-base-content/40 text-sm">หรือ</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-base-200 hover:border-primary/30 hover:bg-primary/5 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-medium text-sm">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-base-200 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="font-medium text-sm">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
