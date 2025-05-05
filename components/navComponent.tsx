"use client";
import { useEffect, useState } from "react";

function NavComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false); // Prevents mismatch

  useEffect(() => {
    setIsClient(true); // Marks component as client-rendered

    const onScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="h-screen">
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
              <div className="contact">+1 5589 55488 55</div>
              <div className="Time">Mon-Sat: 11:00am-23:00Pm</div>
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
              <ul className="flex space-x-5 justify-between hover:bg-amber-500">
                <li className="Home">Home</li>
                <li>About</li>
                <li>menu</li>
                <li>specials</li>
                <li>Event</li>
                <li>Chef</li>
                <li>dropdown</li>
              </ul>
            </div>
          </nav>
        )}
      </div>
      <div className="flex items-center justify-center relative h-full">
        <div className="flex flex-col justify-center items-center px-14 gap-5">
          <div className="text-5xl font-extrabold font-mono">
            <span className="text-yellow-700 p-1.5">Relinquish</span> Taste of
            Luxury
          </div>
          <p className="w-[85%] text-2xl">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut
          </p>
          <div className="flex justify-center items-center gap-8 h-12">
            <button className="bg-yellow-700 text-amber-100 py-2 px-4 rounded-2xl">Our Menu</button>
            <div className="bg-amber-100 text-yellow-700 py-2 px-4 rounded-2xl">Book Order</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavComponent;
