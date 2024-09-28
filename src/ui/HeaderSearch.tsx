import { ChangeEvent, FormEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function HeaderSearch() {
  const [course, setCourse] = useState<string>("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCourse(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form action="" className="w-full relative" onSubmit={handleSubmit}>
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
      <input
        type="text"
        placeholder="Search for anything"
        className="border border-black w-full py-2 pl-12 rounded-full focus:outline-none"
        onChange={handleChange}
      />
    </form>
  );
}
