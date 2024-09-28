import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

interface IProps {
  langSidebarOpen: boolean;
  setLangSidebarOpen: (open: boolean) => void;
}
export default function LangAside({
  langSidebarOpen,
  setLangSidebarOpen,
}: IProps) {
  const [lang, setLang] = useState("English");
  return (
    <div
      className={`${
        langSidebarOpen ? "right-0" : "right-[-100%]"
      } absolute top-0 bg-white w-full h-full z-50`}
    >
      <button
        className="flex items-center bg-gray-100 w-full px-4 gap-2 py-4"
        onClick={() => setLangSidebarOpen(false)}
      >
        <FaAngleLeft />
        <p>Menu</p>
      </button>
      <ul className="grid grid-cols-2 font-medium gap-4 px-4 py-4">
        <li className={`${lang === "English" ? "border-black border" : ""}`}>
          <button
            onClick={() => setLang("English")}
            className="text-left p-2 w-full"
          >
            English
          </button>
        </li>
        <li className={`${lang === "Deutsch" ? "border-black border" : ""}`}>
          <button
            onClick={() => setLang("Deutsch")}
            className="p-2 text-left w-full"
          >
            Deutsch
          </button>
        </li>
        <li className={`${lang === "Arabic" ? "border-black border" : ""}`}>
          <button
            onClick={() => setLang("Arabic")}
            className="p-2 text-left w-full"
          >
            Arabic
          </button>
        </li>
        <li className={`${lang === "France" ? "border-black border" : ""}`}>
          <button
            onClick={() => setLang("France")}
            className="p-2 text-left w-full"
          >
            France
          </button>
        </li>
        <li className={`${lang === "German" ? "border-black border" : ""}`}>
          <button
            onClick={() => setLang("German")}
            className="p-2 text-left w-full"
          >
            German
          </button>
        </li>
        <li className={`${lang === "Italian" ? "border-black border" : ""}`}>
          <button
            onClick={() => setLang("Italian")}
            className="p-2 text-left w-full"
          >
            Itlian
          </button>
        </li>
      </ul>
    </div>
  );
}
