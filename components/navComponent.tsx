"use client";
import { useEffect, useState } from "react";
import SimpleCarousel from "./carousel";
import Link from "next/link";
import LiveTimeDisplay from "./timeComponent";

function NavComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false); // Prevents mismatch

  // const route = useR

  useEffect(() => {
    setIsClient(true); // Marks component as client-rendered

    const onScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="h-screen text-white/70">
      <section className="bg-black/35 h-full z-50">
        <div className={`fixed w-full z-50`}>
          {isClient && (
            <div
              className={`flex justify-between px-24 py-1 ${
                scrolled
                  ? `bg-amber-800 text-amber-100 opacity-95`
                  : `bg-transparent`
              }`}
            >
              <div className="flex space-x-5">
                <div className="contact">+2349133950084</div>
                <div className="Time">
                  <LiveTimeDisplay />
                </div>
              </div>
              <div>
                <button className="">Book a table</button>
              </div>
            </div>
          )}
          {isClient && (
            <nav
              className={`px-24 py-4 ${
                scrolled
                  ? `bg-yellow-700 text-amber-100 opacity-95`
                  : `bg-transparent`
              }`}
            >
              <div className="flex justify-between">
                <h1 className="Taste">Delicious</h1>
                <ul className="flex space-x-5 justify-between ">
                  {[
                    { name: "About", url: "#about" },
                    { name: "Menu", url: "#menu" },
                    { name: "Recommend", url: "#recommend" },
                    { name: "Chat", url: "#" },
                    { name: "Cart", url: "#" },
                  ].map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="hover:bg-amber-500 px-4 py-2 rounded-2xl cursor-pointer"
                        onClick={() => {}}
                      >
                        <Link href={item.url}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          )}
        </div>
        <SimpleCarousel />
      </section>
    </section>
  );
}

export default NavComponent;
