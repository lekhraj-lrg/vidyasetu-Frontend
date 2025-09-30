import React from "react";

export default function MarketplaceComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      {/* Laptop mockup */}
      <div className="w-full max-w-4xl">
        <div className="mx-auto relative" style={{ maxWidth: 1100 }}>
          {/* Laptop screen */}
          <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* top bezel */}
            <div className="flex justify-center items-center pt-4 pb-2">
              <div className="w-3 h-3 rounded-full bg-gray-700" />
            </div>

            {/* screen content */}
            <div className="w-full h-[520px] flex items-center justify-center bg-gradient-to-br from-[#f7fafc] via-white to-[#eef2f7] relative">
              {/* decorative repeated construction activities in background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* moving truck (left-right) */}
                <svg
                  viewBox="0 0 200 70"
                  className="absolute top-[60%] left-[-25%] w-[350px] opacity-30 animate-truck"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g transform="scale(1.6)">
                    <rect x="10" y="20" width="60" height="30" rx="4" fill="#0ea5a4" />
                    <rect x="70" y="30" width="40" height="20" rx="3" fill="#06b6d4" />
                    <circle cx="30" cy="55" r="6" fill="#111827" />
                    <circle cx="70" cy="55" r="6" fill="#111827" />
                    <rect x="5" y="18" width="6" height="8" fill="#065f46" />
                  </g>
                </svg>

                {/* swinging crane arm */}
                <svg
                  viewBox="0 0 120 120"
                  className="absolute top-[18%] right-[-10%] w-48 opacity-25 animate-crane"
                >
                  <g transform="translate(10,10)">
                    <rect x="8" y="38" width="12" height="60" fill="#f97316" rx="3" />
                    <rect x="18" y="8" width="70" height="8" fill="#fb923c" rx="3" />
                    <line x1="88" y1="12" x2="88" y2="48" stroke="#c2410c" strokeWidth="2" />
                    <circle cx="88" cy="56" r="5" fill="#fde68a" />
                    <rect x="84" y="56" width="8" height="12" fill="#f97316" rx="2" />
                  </g>
                </svg>

                {/* rotating gear */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute top-[6%] left-[-6%] w-28 opacity-22 animate-gear"
                >
                  <g transform="translate(50,50)">
                    <g>
                      <circle r="18" fill="#fde68a" />
                      {/* teeth */}
                      {[...Array(8)].map((_, i) => (
                        <rect
                          key={i}
                          x="-3"
                          y="-30"
                          width="6"
                          height="10"
                          rx="1"
                          fill="#f59e0b"
                          transform={`rotate(${i * 45})`}
                        />
                      ))}
                    </g>
                  </g>
                </svg>
              </div>

              {/* Center card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-xl w-[86%] max-w-3xl text-center border border-gray-100">
                <div className="flex flex-col items-center gap-6">
                  {/* construction icon */}
                  <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center shadow-inner">
                    {/* simple animated construction icon (hammer + cone) */}
                    <svg viewBox="0 0 64 64" className="w-12 h-12 animate-bounce-slow">
                      <g>
                        <path d="M10 46 L22 20 L28 24 L16 50 z" fill="#f97316" />
                        <rect x="32" y="28" width="18" height="8" rx="2" fill="#f59e0b" />
                        <rect x="34" y="36" width="14" height="18" rx="3" fill="#111827" opacity="0.25" />
                      </g>
                    </svg>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                    Marketplace
                  </h1>
                  <p className="text-gray-500 text-lg max-w-2xl">
                    Coming soon — we’re building something awesome. Stay tuned while we finish
                    setting up the marketplace for notes, books, and more.
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      Notify me
                    </span>
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                      Explore Notes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* laptop base (keyboard) */}
            <div className="bg-gray-800 h-12 flex items-center justify-center">
              <div className="w-3/4 h-3 bg-gray-700 rounded-md" />
            </div>
          </div>

          {/* bottom stand */}
          <div className="mt-5 flex justify-center">
            <div className="w-60 h-6 bg-gray-200 rounded-b-2xl shadow-inner" />
          </div>
        </div>
      </div>

      {/* inline keyframes and animations */}
      <style>{`
        /* truck moves left to right and repeats */
        @keyframes truck-move {
          0% { transform: translateX(-40%) translateY(0) scale(1); }
          40% { transform: translateX(30%) translateY(-2px) scale(1.02); }
          80% { transform: translateX(95%) translateY(0) scale(1); }
          100% { transform: translateX(140%) translateY(0) scale(1); }
        }

        .animate-truck {
          animation: truck-move 8s linear infinite;
        }

        /* crane swings back and forth */
        @keyframes crane-swing {
          0% { transform: rotate(-6deg) translateY(0); }
          50% { transform: rotate(6deg) translateY(-6px); }
          100% { transform: rotate(-6deg) translateY(0); }
        }
        .animate-crane { transform-origin: 40% 20%; animation: crane-swing 4.5s ease-in-out infinite; }

        /* gear rotate */
        @keyframes gear-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gear { animation: gear-rotate 6s linear infinite; }

        /* gentle bounce for icon */
        @keyframes slow-bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-bounce-slow { animation: slow-bounce 3s ease-in-out infinite; }

        /* small opacity animation for background elements */
        @keyframes pulse-fade {
          0% { opacity: 0.12; }
          50% { opacity: 0.28; }
          100% { opacity: 0.12; }
        }
        .opacity-22 { animation: pulse-fade 5s ease-in-out infinite; }

        /* keep laptop screen responsive */
        @media (max-width: 768px) {
          .animate-truck { display: none; } /* hide heavy elements on small screens */
        }
      `}</style>
    </div>
  );
}
