import { useState } from "react";
import NestedDropdownMenu from "./NestedDropdownMenu";
import { udemyCategoriesDesktop } from "../data";
import ListItem from "../elements/ListItem";
import CategoryDropdown from "./CategoryDropdown";
export default function DropdownMenu() {
  const [open, setOpen] = useState<string>("");
  const [categories] = useState(udemyCategoriesDesktop);
  const openedCategory = categories.filter(
    (category) => category.category === open
  );
  return (
    <aside className="bg-white border w-56 lg:w-64 h-[600px] shadow-lg">
      <ul className="flex flex-col gap-2 py-4">
        {categories.map((category) => (
          <ListItem
            key={category.category}
            version="desktop"
            onMouseEnter={() => setOpen(category.category)}
          >
            <p>{category.category}</p>
          </ListItem>
        ))}
      </ul>
      <NestedDropdownMenu open={open} setOpen={setOpen}>
        {openedCategory.length > 0 && (
          <CategoryDropdown category={openedCategory[0]}></CategoryDropdown>
        )}
      </NestedDropdownMenu>
    </aside>
  );
}
