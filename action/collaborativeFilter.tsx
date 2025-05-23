declare type collaborateType = {
  mealTime: string;
  foodItem: string;
};
export async function collaborativeFilter(input: collaborateType) {
  try {
    const res = await fetch("https://restaurant-ml.onrender.com/collaborate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mealTime: input.mealTime,
        item: input.foodItem,
      }),
    });

    if (!res.ok) {
      console.error("HTTP error:", res.status);
      return null;
    }

    const data = await res.json();
    // console.log("dghshgjj: ", data.result);
    const sortedKeys = Object.entries(data.result)
      .sort(([, a], [, b]) => (b as number) - (a as number)) // sort by value descending
      .map(([key]) => key);

    // console.log("ytwjhbnduyw: ", sortedKeys);
    return sortedKeys.slice(0,20);
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
