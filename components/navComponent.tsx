"use client";
import { useEffect, useState } from "react";
import SimpleCarousel from "./carousel";
import Link from "next/link";
import LiveTimeDisplay from "./timeComponent";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG

function NavComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  useEffect(() => {
    setIsClient(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "About", url: "#about" },
    { name: "Menu", url: "#menu" },
    { name: "Recommend", url: "#recommend" },
    { name: "Chat", url: "#" },
    { name: "Cart", url: "#" },
  ];

  return (
    <section className="h-screen text-white/70 overflow-hidden">
      <section className="bg-black/35 h-full z-50">
        <div className="fixed w-full z-50">
          {isClient && (
            <>
              {/* Top Contact Bar - Hidden on small mobile to save space */}
              <div
                className={`flex justify-between px-4 md:px-24 py-1 transition-colors duration-300 ${
                  scrolled ? `bg-amber-800 text-amber-100` : `bg-black/20`
                }`}
              >
                <div className="flex space-x-5 text-xs md:text-sm">
                  <div className="contact">+2349133950084</div>
                  <div className="hidden sm:block">
                    <LiveTimeDisplay />
                  </div>
                </div>
                <button className="text-xs font-bold uppercase hover:text-white">
                  Book a table
                </button>
              </div>

              {/* Main Navigation */}
              <nav
                className={`px-4 md:px-24 py-4 transition-all duration-300 ${
                  scrolled || isOpen
                    ? `bg-yellow-700 text-amber-100`
                    : `bg-transparent`
                }`}
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-black tracking-tighter italic">
                    Delicious
                  </h1>

                  {/* Desktop Menu */}
                  <ul className="hidden md:flex space-x-2 lg:space-x-5 items-center">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className="hover:bg-amber-500 px-4 py-2 rounded-2xl cursor-pointer transition-colors"
                      >
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                  <ul className="md:hidden flex flex-col space-y-4 pt-6 pb-4 animate-in fade-in slide-in-from-top-4">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className="text-center py-2 border-b border-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link
                          href={item.url}
                          className="block text-lg font-semibold italic"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>
            </>
          )}
        </div>
        <SimpleCarousel />
      </section>
    </section>
  );
}

export default NavComponent;
