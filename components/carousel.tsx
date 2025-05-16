import { useState } from "react";

const images = ["/bg-1.avif", "/bg-2.avif", "/bg.jpg", "/bg-0.jpg"];

export default function SimpleCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="flex items-center justify-center relative h-full ">
      <div className="absolute w-full h-full object-cover rounded-lg bg-black/25 z-11"></div>
      <img
        src={images[index]}
        className="absolute w-full h-full object-cover rounded-lg z-10"
        alt="carousel item"
      />
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/35 p-2 rounded-full shadow  z-30 cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/35 p-2 rounded-full shadow  z-30 cursor-pointer"
      >
        ▶
      </button>
      <div className="absolute bottom-2 flex gap-5 z-30">
        {images.map((item, id) => {
          return (
            <div
              key={id}
              onClick={() => {
                setIndex(id);
              }}
              className={`h-5 w-5 rounded-full cursor-pointer ${
                id === index ? `bg-amber-500` : `bg-white/35`
              }`}
            ></div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center px-14 gap-5  z-20">
        <div className="text-5xl font-extrabold font-mono">
          <span className="text-yellow-700 p-1.5">Relinquish</span> Taste of
          Luxury
        </div>
        <p className="w-[85%] text-2xl text-justify">
          Indulge in a world where flavour meets elegance. Experience the
          ultimate culinary escape, crafted for those who appreciate the finer
          things in life. From carefully curated dishes to exquisite ambience,
          every moment is designed to delight your senses and leave a lasting
          impression of luxury redefined.
        </p>
        <div className="flex justify-center items-center gap-8 h-12">
          <button className="bg-yellow-700 text-amber-100 py-2 px-4 rounded-2xl cursor-pointer">
            Our Menu
          </button>
          <div className="bg-amber-100 text-yellow-700 py-2 px-4 rounded-2xl cursor-pointer">
            Recommend
          </div>
        </div>
      </div>
    </div>
    // <div className="relative w-full max-w-xl mx-auto">

    // </div>
  );
}
