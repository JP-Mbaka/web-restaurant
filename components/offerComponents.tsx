"use client";
import { contentFilter } from "@/action/contentFilter";
import { allFoods, restaurantData } from "@/util/data";
import { RestaurantType, foodItem } from "@/util/datatypes";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Dropdown from "./dropdown";
import { collaborativeFilter } from "@/action/collaborativeFilter";

const menuFood = allFoods.food;
const restaurant = restaurantData.restaurant;

function OfferComponents() {
  const [isLoading, setIsLoading] = useState(false);
  // const [searchSimilarFood, setSearchSimilarFood] = useState("");
  const [selectedSimilarFood, setSelectedSimilarFood] = useState("main");
  const [selectedRecommendFood, setSelectedRecommendFood] = useState("main");
  const [selectedMenuFood, setSelectedMenuFood] = useState("main");
  const [filterRestaurantMenu, setFilterRestaurantMenu] = useState<
    RestaurantType[]
  >([]);
  const [filterRestaurantContentMenu, setFilterRestaurantContentMenu] =
    useState<RestaurantType[]>([]);
  const [
    filterRestaurantCollaborativeMenu,
    setFilterRestaurantCollaborativeMenu,
  ] = useState<RestaurantType[]>([]);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    const fetchRecommendedFoods = async () => {
      const recommendedFood = await contentFilter(getGreeting().toLowerCase());
      if (!recommendedFood) return;

      const newMenu: RestaurantType[] = [];

      for (let i = 0; i < restaurant.length; i++) {
        const foodItems: foodItem[] = [];

        // Loop through menuFood to find matches from recommendations
        for (let j = 0; j < menuFood.length; j++) {
          const menuItem = menuFood[j];

          const isRecommended = recommendedFood.some((recommended) =>
            menuItem.item.toLowerCase().includes(recommended.toLowerCase())
          );

          const isInRestaurant = restaurant[i].food.some((foodName: string) =>
            foodName.toLowerCase().includes(menuItem.item.toLowerCase())
          );

          if (isRecommended && isInRestaurant) {
            foodItems.push({
              item: menuItem.item,
              img: menuItem.img,
              price: menuItem.price,
              category: menuItem.category,
            });
          }
        }

        if (foodItems.length > 0) {
          newMenu.push({
            id: Math.random() * 100000, // Consider a stable ID strategy
            restaurant: restaurant[i].name,
            food: foodItems,
          });
        }
      }

      setFilterRestaurantContentMenu(newMenu);
    };

    fetchRecommendedFoods();
  }, []);

  useEffect(() => {
    const newMenu: RestaurantType[] = [];

    for (let i = 0; i < restaurant.length; i++) {
      const foodItems: foodItem[] = [];

      for (let j = 0; j < menuFood.length; j++) {
        const matchedFood = restaurant[i].food.find(
          (foodName: string) => foodName === menuFood[j].item
        );

        if (matchedFood) {
          foodItems.push({
            item: menuFood[j].item,
            img: menuFood[j].img,
            price: menuFood[j].price,
            category: menuFood[j].category,
          });
        }
      }

      if (foodItems.length > 0) {
        newMenu.push({
          id: Math.random() * 100000, // or use a proper ID logic
          restaurant: restaurant[i].name,
          food: foodItems,
        });
      }
    }

    setFilterRestaurantMenu(newMenu);
  }, []);

  const filteredCollaborativeMenu = filterRestaurantCollaborativeMenu
    .map((item) => ({
      ...item,
      food: item.food.filter((f) => f.category === selectedSimilarFood),
    }))
    .filter((item) => item.food.length > 0);
  const filteredContentMenu = filterRestaurantContentMenu
    .map((item) => ({
      ...item,
      food: item.food.filter((f) => f.category === selectedRecommendFood),
    }))
    .filter((item) => item.food.length > 0);
  const filteredMenu = filterRestaurantMenu
    .map((item) => ({
      ...item,
      food: item.food.filter((f) => f.category === selectedMenuFood),
    }))
    .filter((item) => item.food.length > 0);

  const getGreeting = (): string => {
    const hour = new Date().getHours(); // returns 0 - 23

    if (hour >= 5 && hour < 12) {
      return "BREAKFAST";
    } else if (hour >= 12 && hour < 17) {
      return "LUNCH";
    } else {
      return "DINNER";
    }
  };

  const handleValueChange = (value: string) => {
    // setSearchSimilarFood(value);
    console.log("Received from child:", value);
    setIsLoading(true);

    const fetchRecommendedFoods = async () => {
      const recommendedFood = await collaborativeFilter({
        mealTime: getGreeting().toLowerCase(),
        foodItem: value.toLowerCase(),
      });

      if (!recommendedFood) {
        setIsLoading(false);
        return;
      }

      const newMenu: RestaurantType[] = [];

      for (let i = 0; i < restaurant.length; i++) {
        const foodItems: foodItem[] = [];

        for (let j = 0; j < menuFood.length; j++) {
          const menuItem = menuFood[j];

          const isRecommended = recommendedFood.some((recommended) =>
            menuItem.item.toLowerCase().includes(recommended.toLowerCase())
          );

          const isInRestaurant = restaurant[i].food.some((foodName: string) =>
            foodName.toLowerCase().includes(menuItem.item.toLowerCase())
          );

          if (isRecommended && isInRestaurant) {
            foodItems.push({
              item: menuItem.item,
              img: menuItem.img,
              price: menuItem.price,
              category: menuItem.category,
            });
          }
        }

        if (foodItems.length > 0) {
          newMenu.push({
            id: restaurant[i].id,
            restaurant: restaurant[i].name,
            food: foodItems,
          });
        }
      }

      setFilterRestaurantCollaborativeMenu(newMenu);
      setIsLoading(false); // ✅ Now called at the right time
    };

    fetchRecommendedFoods();
  };

  const similarFood = isLoading ? (
    <Loader2 size={200} className="animate-spin w-auto m-auto" />
  ) : (
    filteredCollaborativeMenu.map((item) => (
      <section key={Math.random() * 100000} className="text-black">
        <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black text-center">
          <span className="text-yellow-700 font-semibold">
            {item.restaurant}
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-4 p-8 text-yellow-700 mx-auto w-fit">
          {item.food.map((foodItem, j) => {
            if (j % 2 != 0) {
              return (
                <div key={Math.random() * 100000} className="flex items-center">
                  <div className="flex flex-col text-left">
                    <h1>{foodItem.item}</h1>
                    <h4 className="ml-2">
                      <span>&#8358;</span>
                      {foodItem.price}
                    </h4>
                  </div>
                  <div>
                    .....................................................
                  </div>
                  <div className="h-32 w-32 bg-fuchsia-900 rounded-full ml-2 overflow-hidden">
                    <img
                      src={foodItem.img}
                      alt={foodItem.item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={Math.random() * 100000} className="flex items-center">
                  <div className="h-32 w-32 bg-fuchsia-900 rounded-full mr-2 overflow-hidden">
                    <img
                      src={foodItem.img}
                      alt={foodItem.item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  .................................
                  <div className="flex flex-col text-left">
                    <h1>{foodItem.item}</h1>
                    <h4 className="ml-2">
                      <span>&#8358;</span>
                      {foodItem.price}
                    </h4>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    ))
  );

  const filtre = filteredMenu.map((item) => (
    <section key={Math.random() * 100000} className="text-black">
      <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black text-center">
        <span className="text-yellow-700 font-semibold">{item.restaurant}</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 p-8 text-yellow-700 mx-auto w-fit">
        {item.food.map((foodItem, j) => {
          if (j % 2 != 0) {
            return (
              <div key={Math.random() * 100000} className="flex items-center">
                <div className="flex flex-col text-left">
                  <h1>{foodItem.item}</h1>
                  <h4 className="ml-2">
                    <span>&#8358;</span>
                    {foodItem.price}
                  </h4>
                </div>
                <div>.....................................................</div>
                <div className="h-32 w-32 bg-fuchsia-900 rounded-full ml-2 overflow-hidden">
                  <img
                    src={foodItem.img}
                    alt={foodItem.item}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div key={Math.random() * 100000} className="flex items-center">
                <div className="h-32 w-32 bg-fuchsia-900 rounded-full mr-2 overflow-hidden">
                  <img
                    src={foodItem.img}
                    alt={foodItem.item}
                    className="w-full h-full object-cover"
                  />
                </div>
                .................................
                <div className="flex flex-col text-left">
                  <h1>{foodItem.item}</h1>
                  <h4 className="ml-2">
                    <span>&#8358;</span>
                    {foodItem.price}
                  </h4>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  ));

  return (
    <>
      {" "}
      <section id="menu" className=" py-28">
        <div className="flex justify-center">
          <div className="inline-flex flex-col ">
            <h2 className="bg-amber-100 py-1 px-1.5 m-1.5 text-2xl text-black text-center">
              SIMILAR{" "}
              <span className="text-yellow-700 font-semibold">FOOD</span>
            </h2>
            <div className="w-48 py-0.5 px-1 cursor-pointer rounded-2xl bg-green-400 w-auto m-auto">
              <Dropdown onValueChange={handleValueChange} />
            </div>

            <p className="font-thin font-serif tracking-widest text-center pt-2">
              Check Out Our Tasty <span>Menu</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div
            className="flex gap-20 mb-3.5
          "
          >
            {["Main", "Swallow", "Soup", "Add-Ons", "Drinks", "Other"].map(
              (item) => {
                return (
                  <h1
                    key={Math.random() * 100000}
                    onClick={() => {
                      setSelectedSimilarFood((item || "").toLowerCase());
                      console.log("jdekedkekkdsk: ", setSelectedSimilarFood);
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
        <div>{similarFood}</div>
      </section>
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
        <div className="flex justify-center mt-6 mb-3.5">
          <div className="flex gap-20">
            {["Main", "Swallow", "Soup", "Add-Ons", "Drinks", "Other"].map(
              (item) => {
                return (
                  <h1
                    key={Math.random() * 100000}
                    onClick={() => {
                      setSelectedRecommendFood((item || "").toLowerCase());
                      // console.log("jdekedkekkdsk: ", selectedMenuFood);
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
        <div>
          {filteredContentMenu!.map((item) => (
            <section key={Math.random() * 100000}>
              <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black text-center">
                <span className="text-yellow-700 font-semibold">
                  {item.restaurant}
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-4 p-8 mx-auto w-fit">
                {item.food.map((e, ind) => {
                  if (ind % 2 != 0) {
                    return (
                      <div
                        key={Math.random() * 100000}
                        className="flex items-center"
                      >
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
                      <div
                        key={Math.random() * 100000}
                        className="flex items-center"
                      >
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
          ))}
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
          <div
            className="flex gap-20 mb-3.5
          "
          >
            {["Main", "Swallow", "Soup", "Add-Ons", "Drinks", "Other"].map(
              (item) => {
                return (
                  <h1
                    key={Math.random() * 100000}
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
        <div>{filtre}</div>
      </section>
    </>
  );
}

export default OfferComponents;
