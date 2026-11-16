import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Setups", "Gear Guide", "Guidelines"];

  return (
    <header className="w-full bg-[#0d1117] border-b border-gray-800/80 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-[#11241e] border border-[#10b981]/30 flex items-center
           justify-center text-[#10b981] font-mono text-xs font-bold">
            &lt;/&gt;
          </div>
          <div className="font-mono text-base font-bold tracking-tight">
            <span className="text-white">DevDesk</span>
            <span className="text-[#10b981]">.dev</span>
          </div>
        </a>

        {/* Right: Desktop Navigation + CTA Button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveLink(item)}
                className={`transition-colors duration-200 ${
                  activeLink === item
                    ? "text-[#10b981]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="px-4 py-2 text-sm font-medium text-white bg-[#161b22] hover:bg-[#1f242c] border border-gray-700/80 rounded-md transition-colors duration-200 cursor-pointer">
            Submit Setup
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-gray-800 px-6 pt-2 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => {
                setActiveLink(item);
                setIsOpen(false);
              }}
              className={`block py-1.5 text-sm font-medium ${
                activeLink === item
                  ? "text-[#10b981]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-[#161b22] hover:bg-[#1f242c] border border-gray-700/80 rounded-md transition-colors">
            Submit Setup
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
// ```[cite: 2]

// *(Note: This uses **Tailwind CSS** classes to match the dark theme,
//  monospace logo badge, emerald active link, and bordered `Submit Setup`
//  button from your screenshot[cite: 2]. If you are using **DaisyUI** or 
//  React Router `<NavLink>`, let me know and I can adjust it accordingly!)*