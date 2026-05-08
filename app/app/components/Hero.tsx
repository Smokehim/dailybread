import { ArrowRight, Sparkles, Heart, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-red-500 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 -z-10" />

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 md:left-20">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
          <BookOpen className="h-10 w-10 text-white" />
        </div>
      </div>

      <div className="absolute top-40 right-10 md:right-32">
        <div className="w-16 h-16 bg-yellow-400/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
          <Sparkles className="h-8 w-8 text-yellow-200" />
        </div>
      </div>

      <div className="absolute bottom-32 left-1/4">
        <div className="w-12 h-12 bg-red-300/30 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-2xl rotate-12">
          <Heart className="h-6 w-6 text-red-200" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-white font-semibold">Welcome to Our Ministry</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-900 mb-6 leading-tight drop-shadow-2xl">
            Daily Bread Outreach
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
              Ministry International
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Spreading the Word of God and transforming lives through faith, hope, and love
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-2xl">
              Join Us Today
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
              Watch Live
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
