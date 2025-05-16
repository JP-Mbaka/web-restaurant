"use client";
import React, { useState } from "react";

const recommendedFood = [
  {
    item: "Coffee",
    img: "/coffee.jpg",
    category: "add-ons",
    price: 200,
  },
  {
    item: "Egwusi",
    img: "/egwusi.jpg",
    category: "soup",
    price: 1200,
  },
  {
    item: "Jellof Rice",
    img: "/jellof.jpg",
    category: "main",
    price: 3750,
  },
];

const menuFood = [
  {
    item: "Coffee",
    img: "/coffee.jpg",
    category: "add-ons",
    price: 200,
  },
  {
    item: "Egwusi",
    img: "/egwusi.jpg",
    category: "soup",
    price: 1200,
  },
  {
    item: "Jellof Rice",
    img: "/jellof.jpg",
    category: "main",
    price: 3750,
  },
  {
    item: "Coffee",
    img: "/coffee.jpg",
    category: "add-ons",
    price: 200,
  },
  {
    item: "Egwusi",
    img: "/egwusi.jpg",
    category: "soup",
    price: 1200,
  },
  {
    item: "Jellof Rice",
    img: "/jellof.jpg",
    category: "main",
    price: 3750,
  },
  {
    item: "Coffee",
    img: "/coffee.jpg",
    category: "add-ons",
    price: 200,
  },
  {
    item: "Egwusi",
    img: "/egwusi.jpg",
    category: "soup",
    price: 1200,
  },
  {
    item: "Jellof Rice",
    img: "/jellof.jpg",
    category: "main",
    price: 3750,
  },
  {
    item: "Coffee",
    img: "/coffee.jpg",
    category: "add-ons",
    price: 200,
  },
  {
    item: "Egwusi",
    img: "/egwusi.jpg",
    category: "soup",
    price: 1200,
  },
  {
    item: "Jellof Rice",
    img: "/jellof.jpg",
    category: "main",
    price: 3750,
  },
  {
    item: "Coffee",
    img: "/coffee.jpg",
    category: "add-ons",
    price: 200,
  },
  {
    item: "Egwusi",
    img: "/egwusi.jpg",
    category: "soup",
    price: 1200,
  },
  {
    item: "Jellof Rice",
    img: "/jellof.jpg",
    category: "main",
    price: 3750,
  },
];

function OfferComponents() {
  const [selectedRecommendFood, setSelectedRecommendFood] = useState("main");
  const [selectedMenuFood, setSelectedMenuFood] = useState("main");
  const filteredRecommend = recommendedFood.filter(
    (item) => item.category === selectedRecommendFood
  );
  const filteredMenu = menuFood.filter(
    (item) => item.category === selectedMenuFood
  );

  const getGreeting = (): string => {
    const hour = new Date().getHours(); // returns 0 - 23

    if (hour >= 5 && hour < 12) {
      return "Breakfast";
    } else if (hour >= 12 && hour < 17) {
      return "Lunch";
    } else {
      return "Dinner";
    }
  };
  return (
    <>
      <section id="recommend" className="bg-yellow-700 text-amber-100 py-28">
        <div className="flex justify-center">
          <div className="inline-flex flex-col ">
            <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black">
              <span className="text-yellow-700 font-semibold">RECOMMENDED</span>{" "}
              {getGreeting()}
            </h2>
            <p className="font-thin font-serif tracking-widest text-center pt-2">
              Check Out Our Tasty <span>Menu</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex gap-20">
            {["Main", "Swallow", "Soup", "Add-Ons", "Drinks", "Other"].map(
              (item, index) => {
                return (
                  <h1
                    key={index}
                    onClick={() => {
                      setSelectedRecommendFood((item || "").toLowerCase());
                      console.log("jdekedkekkdsk: ", selectedMenuFood);
                    }}
                    className="hover:bg-amber-100 hover:text-amber-700 px-4 py-2 rounded-2xl cursor-pointer"
                  >
                    {item}
                  </h1>
                );
              }
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8 mx-auto w-fit">
          {filteredRecommend!.map((e, index) => {
            if (index % 2 != 0) {
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col text-left">
                    <h1>{e.item}</h1>
                    <h4 className="ml-2">
                      <span>&#8358;</span>
                      {e.price}
                    </h4>
                  </div>
                  <div>
                    .....................................................
                  </div>
                  <div className="h-32 w-32 bg-fuchsia-900 rounded-full ml-2 overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex items-center">
                  <div className="h-32 w-32 bg-fuchsia-900 rounded-full mr-2 overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  .....................................................
                  <div className="flex flex-col text-left">
                    <h1>{e.item}</h1>
                    <h4 className="ml-2">
                      <span>&#8358;</span>
                      {e.price}
                    </h4>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section id="menu" className=" py-28">
        <div className="flex justify-center">
          <div className="inline-flex flex-col ">
            <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black text-center">
              OUR <span className="text-yellow-700 font-semibold">MENU</span>
            </h2>
            <p className="font-thin font-serif tracking-widest text-center pt-2">
              Check Out Our Tasty <span>Menu</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex gap-20">
            {["Main", "Swallow", "Soup", "Add-Ons", "Drinks", "Other"].map(
              (item, index) => {
                return (
                  <h1
                    key={index}
                    onClick={() => {
                      setSelectedMenuFood((item || "").toLowerCase());
                      console.log("jdekedkekkdsk: ", selectedMenuFood);
                    }}
                    className="hover:bg-amber-700  hover:text-amber-100 px-4 py-2 rounded-2xl cursor-pointer"
                  >
                    {item}
                  </h1>
                );
              }
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8 text-yellow-700 mx-auto w-fit">
          {filteredMenu!.map((e, index) => {
            if (index % 2 != 0) {
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col text-left">
                    <h1>{e.item}</h1>
                    <h4 className="ml-2">
                      <span>&#8358;</span>
                      {e.price}
                    </h4>
                  </div>
                  <div>
                    .....................................................
                  </div>
                  <div className="h-32 w-32 bg-fuchsia-900 rounded-full ml-2 overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex items-center">
                  <div className="h-32 w-32 bg-fuchsia-900 rounded-full mr-2 overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  .................................
                  <div className="flex flex-col text-left">
                    <h1>{e.item}</h1>
                    <h4 className="ml-2">
                      <span>&#8358;</span>
                      {e.price}
                    </h4>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

export default OfferComponents;
