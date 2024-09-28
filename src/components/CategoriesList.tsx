import ListItem from "../elements/ListItem";
import { useState } from "react";
import SubSidebar from "./SubSidebar";

interface IProps {
  category: {
    category: string;
    subcategories: {
      subcategory: string;
      topics?: string[] | undefined;
    }[];
  };
}
export default function CategoriesList({ category }: IProps) {
  const [open, setOpen] = useState<number | null>(null);
  function handleClick(index: number) {
    if (category.subcategories[index].topics) {
      setOpen(index);
    }
  }

  return (
    <ul className="flex flex-col gap-2 px-2 py-3">
      {category.subcategories.map((subcategory, index) => (
        <ListItem
          key={subcategory.subcategory}
          onClick={() => handleClick(index)}
          hideArrow={category.subcategories[index].topics === undefined}
        >
          <p>{subcategory.subcategory}</p>
        </ListItem>
      ))}

      <SubSidebar
        open={open}
        setOpen={setOpen}
        openedCategory={category.subcategories[open ?? 0].subcategory}
      >
        {category.subcategories[open ?? 0].topics?.map((topic) => (
          <ListItem key={topic} hideArrow>
            <p>{topic}</p>
          </ListItem>
        ))}
      </SubSidebar>
    </ul>
  );
}
