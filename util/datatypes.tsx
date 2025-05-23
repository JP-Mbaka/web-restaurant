export declare interface RestaurantType {
  id: number;
  restaurant: string;
  food: foodItem[];
}

export declare interface foodItem {
  item: string;
  img: string;
  price: number;
  category: string;
}
