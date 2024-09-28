import { IoSearchSharp } from "react-icons/io5";
import { Close } from "../utilities/utili.icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchClose } from "../app/features/Search/SearchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const [course, setCourse] = useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCourse(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div
      className="w-full h-screen
    fixed z-50 bg-white top-0 left-0"
    >
      <form action="" className="relative border-b" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for anything"
          className="outline-none w-full py-4 pl-12 placeholder:text-gray-500"
          onChange={handleChange}
        />
        <button
          className={`${
            course
              ? "cursor-pointer text-black"
              : "cursor-not-allowed text-gray-400"
          }`}
          disabled={!course}
        >
          <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-xl" />
        </button>
        <button
          onClick={() => dispatch(setSearchClose())}
          className="py-4 px-2 absolute right-2 top-1/2 -translate-y-1/2"
        >
          <Close w="12" h="12" />
        </button>
      </form>
    </div>
  );
}
