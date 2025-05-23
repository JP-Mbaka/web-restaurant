export async function contentFilter() {
  try {
    const res = await fetch("https://restaurant-ml.onrender.com/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mealTime: "lunch",
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
    return sortedKeys;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
