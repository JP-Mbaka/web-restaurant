import React from "react";

function AboutComponent() {
  return (
    <>
      <div
        id="about"
        className="w-full md:w-fit mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-12 px-6 md:px-0"
      >
        {/* Image Container: Scaled for mobile, original for desktop */}
        <div className="bg-fuchsia-700 w-full max-w-sm md:max-w-none">
          <img
            src={"/about-1.jpg"}
            alt="profile"
            className="h-auto w-full object-cover shadow-xl"
          />
        </div>

        {/* Text Container: Full width on mobile, 40% on desktop */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl my-4 text-center md:text-left">
            <span className="bg-amber-100 text-yellow-700 font-semibold px-2 py-1">
              ABOUT
            </span>{" "}
            US
          </h1>
          <p className="text-justify leading-relaxed text-gray-800">
            At Relinquish Taste of Luxury, we believe that dining is more than
            just a meal — it&apos;s an experience. Rooted in excellence and
            crafted with passion, our mission is to create unforgettable moments
            through exceptional cuisine, refined ambience, and impeccable
            service. From locally sourced ingredients to internationally
            inspired recipes, every dish we serve is a testament to our
            commitment to quality and sophistication. Whether you&apos;re
            celebrating a special occasion or simply indulging your palate, we
            invite you to savour the taste of true luxury.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
