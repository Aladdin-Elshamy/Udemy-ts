import { useState } from "react";
import { Close } from "../utilities/utili.icons";
import NestedSidebar from "./NestedSidebar";
import LangAside from "./LangAside";
import CategoriesList from "./CategoriesList";
import { udemyCategories } from "../data";
import ListItem from "../elements/ListItem";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../app/features/NestedSidebar/NestedSidebarSlice";
import MoreFromUdemy from "../ui/MoreFromUdemy";
import CategorySpan from "../elements/CategorySpan";
interface IProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
export default function Aside({ sidebarOpen, setSidebarOpen }: IProps) {
  const open = useSelector((state: RootState) => state.nestedSidebar.open);
  const dispatch = useDispatch();
  const [langSidebarOpen, setLangSidebarOpen] = useState(false);
  const [categories] = useState(udemyCategories);
  return (
    <>
      <aside
        className={`${
          sidebarOpen ? "left-0" : "left-[-100%]"
        } overflow-x-hidden bg-white w-3/5 max-w-[280px] ${
          open || langSidebarOpen ? "min-h-screen" : "h-screen"
        }  transition-all duration-300 z-20 fixed top-0 left-0 md:hidden`}
      >
        <nav className="flex flex-col gap-2 text-sm sm:text-base">
          <div className="flex flex-col gap-2 py-2 border-b-2">
            <a href="#" className="text-primary px-4 py-1 font-medium">
              Log in
            </a>
            <a href="#" className="text-primary px-4 py-1 font-medium">
              Sign up
            </a>
          </div>
          <ul className="flex flex-col gap-2 py-2 border-b-2">
            <CategorySpan title="Most popular" />
            {categories.map((category, index) => (
              <ListItem
                key={category.category}
                onClick={() => dispatch(setOpen(index))}
              >
                <p>{category.category}</p>
              </ListItem>
            ))}
          </ul>

          <MoreFromUdemy open={open} setLangSidebarOpen={setLangSidebarOpen} />
          <NestedSidebar>
            <CategoriesList category={categories[open as number]} />
          </NestedSidebar>
          <LangAside
            langSidebarOpen={langSidebarOpen}
            setLangSidebarOpen={setLangSidebarOpen}
          />
        </nav>
      </aside>
      <button
        className={`${
          sidebarOpen ? "opacity-100 delay-300 z-20" : "opacity-0 delay-0 -z-10"
        } aside-close bg-white p-4 rounded-full transition-all duration-300 fixed top-2 left-72 md:hidden border`}
        onClick={() => setSidebarOpen(false)}
      >
        <Close className="text-black" />
      </button>
    </>
  );
}
