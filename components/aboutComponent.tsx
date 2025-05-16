import React from "react";
// import "../public/profile pics.png";
// import Image from "next/image";

function AboutComponent() {
  return (
    <>
      <div id="about" className="w-fit mx-auto flex justify-center gap-5 py-12">
        <div className=" bg-fuchsia-700">
          <img src={"/about-1.jpg"} alt="profole" className="h-auto w-auto" />
        </div>
        <div className="w-2/5 flex flex-col justify-center">
          <h1 className="text-2xl my-4">
            <span className="bg-amber-100 text-yellow-700 font-semibold px-2 py-1">
              ABOUT
            </span>{" "}
            US
          </h1>
          <p className="text-justify">
            At Relinquish Taste of Luxury, we believe that dining is more than
            just a meal — it&apos;s an experience. Rooted in excellence and crafted
            with passion, our mission is to create unforgettable moments through
            exceptional cuisine, refined ambience, and impeccable service. From
            locally sourced ingredients to internationally inspired recipes,
            every dish we serve is a testament to our commitment to quality and
            sophistication. Whether you&apos;re celebrating a special occasion or
            simply indulging your palate, we invite you to savour the taste of
            true luxury.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
