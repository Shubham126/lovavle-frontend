function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black-800 to-black-900 text-white">
      <nav className="w-full max-w-7xl mx-auto mt-8 px-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OG</span>
              </div>
              <span className="font-semibold">Open GuideAI</span>
            </div>
            {/* <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">What is</a> */}
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Features</a>
            {/* <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">How to Use</a> */}
            {/* <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Compare</a> */}
            {/* <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</a> */}
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm text-slate-400 hover:text-slate-300 transition-colors">🎯 1148</button>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Open GuideAI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Free Open-Source AI Website Builder that transforms any website into{' '}
            <span className="text-slate-300 font-semibold">React/Next.js apps</span> in seconds
          </p>

          <button
            onClick={onGetStarted}
            className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-slate-500/50 transition-all duration-300 hover:scale-105 mb-20"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Try Open Lovable</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-6xl font-bold bg-gradient-to-r from-slate-300 to-pink-900 bg-clip-text text-transparent mb-3">
                100%
              </div>
              <div className="text-slate-600 text-sm">Free & Open Source</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-6xl font-bold text-slate-300 mb-3">&lt;30s</div>
              <div className="text-slate-600 text-sm">Website to React App</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-6xl font-bold bg-gradient-to-r from-slate-300 to-pink-900 bg-clip-text text-transparent mb-3">
                MIT
              </div>
              <div className="text-slate-600 text-sm">Licensed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8">
        <div className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;