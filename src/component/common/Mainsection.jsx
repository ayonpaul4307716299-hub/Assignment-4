import React from 'react';

export default function Mainsection() {
  const setups = [
    {
      id: 1,
      title: "Clean Minimalist Mac Desk",
      author: "@alex_dev",
      upvotes: "1,284",
      tags: ["M3 Max", "Keychron Q1"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Neon Night Shift Station",
      author: "@kira.codes",
      upvotes: "1,102",
      tags: ["Odyssey G9", "GMMK Pro"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Dual Dell Brick-Wall Loft",
      author: "@marco_rs",
      upvotes: "967",
      tags: ["2x U2723QE", "Keychron K8"],
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <main className="bg-[#0b0f19] text-white min-h-screen px-6 py-12 md:px-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-emerald-400 font-mono text-sm mb-4 bg-[#131b2e] inline-block px-3 py-1 rounded border border-emerald-500/20">
          ~/devdesk $ ls ./setups --sort=top
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Inspiring Workspaces Built by Developers
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-8">
          Real desks from real engineers — with the full gear list behind every photo, so you can copy what works and skip what doesn't.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-teal-300 transition flex items-center gap-2">
            Browse All Setups &rarr;
          </button>
          <button className="text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Read the Gear Guide
          </button>
        </div>
      </div>

      {/* Top Rated Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Top rated this week</h2>
            <p className="text-gray-400 text-sm">Ranked by community upvotes, reset every Monday.</p>
          </div>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition">
            See all 12 &rarr;
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {['All', 'Minimalist', 'Cyberpunk', 'Dual-Monitor', 'Mac Only'].map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                index === 0
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1a2234] text-gray-300 hover:bg-[#25304a]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {setups.map((setup) => (
            <div key={setup.id} className="bg-[#121929] rounded-xl overflow-hidden border border-gray-800/60 hover:border-gray-700 transition flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-gray-800">
                  <img src={setup.image} alt={setup.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    ▲ {setup.upvotes}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{setup.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{setup.author}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {setup.tags.map((tag, i) => (
                      <span key={i} className="bg-[#1c263b] text-gray-300 text-xs px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-5 pb-5">
                <a href="#" className="text-teal-400 text-sm font-medium hover:underline flex items-center gap-1">
                  View Setup Specs &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}