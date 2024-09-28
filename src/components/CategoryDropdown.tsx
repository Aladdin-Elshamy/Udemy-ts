import { Fragment, useState } from "react";
import SubDropdown from "./SubDropdown";
import ListItem from "../elements/ListItem";
import CategorySpan from "../elements/CategorySpan";

interface IProps {
  category: {
    category: string;
    subcategories: {
      subcategory: string;
      topics?: string[] | undefined;
    }[];
  };
}
export default function CategoryDropdown({ category }: IProps) {
  const [open, setOpen] = useState("");
  const filteredTopics = category.subcategories.filter(
    (subcategory) => subcategory.subcategory === open
  );
  return (
    <ul className="flex flex-col gap-2 px-2 py-4">
      {category.subcategories.map((subcategory) => (
        <Fragment key={subcategory.subcategory}>
          <ListItem
            version="desktop"
            onMouseEnter={() => setOpen(subcategory.subcategory)}
          >
            <p>{subcategory.subcategory}</p>
          </ListItem>
          {filteredTopics.length > 0 && (
            <SubDropdown open={open} setOpen={setOpen}>
              <CategorySpan title="Popular Topics" padding="px-6 pt-5" />
              <ul className="pb-4 pt-2 flex flex-col gap-2">
                {filteredTopics[0]?.topics?.map((topic) => (
                  <ListItem key={topic} version="desktop" hideArrow>
                    <p>{topic}</p>
                  </ListItem>
                ))}
              </ul>
            </SubDropdown>
          )}
        </Fragment>
      ))}
    </ul>
  );
}
