import { useState } from "react";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Navbar from "./Navbar";
export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30">
      {sidebarOpen && (
        <div className="fixed top-0 md:none left-0 w-full h-full md:hidden bg-black opacity-50"></div>
      )}
      <Navbar setSidebarOpen={setSidebarOpen} setSearchOpen={setSearchOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {searchOpen && <Search setSearchOpen={setSearchOpen} />}
    </header>
  );
}
