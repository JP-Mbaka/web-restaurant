import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { allFoods } from "@/util/data";

declare type foodType = {
  id: number;
  item: string;
  img: string;
  price: number;
  category: string;
};

function Dropdown({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  const [selected, setSelected] = useState("");
  const onSelect = (e: string) => {
    setSelected(e);
    onValueChange(e);
    console.log(e);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer text-center">
          <button>
            {selected.length < 2 ? "Select Food Option" : selected}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-50 px-4 py-2 rounded-2xl gap-4 overscroll-y-auto cursor-pointer">
          {allFoods.food.map((label: foodType) => (
            <DropdownMenuItem
              key={label.id}
              onClick={() => {
                // onChange(val); // update RHF state
                onSelect(label.item); // inform parent of human-readable choice
              }}
            >
              {label.item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
