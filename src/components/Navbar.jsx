/* eslint-disable react/prop-types */
import { useState } from "react";
import Wrapper from "../layout/Wrapper";
import NavbarButton from "../ui/NavbarButton";

function Navbar({ handleOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <nav className="fixed left-1/2 top-8 flex lg:w-fit z-[999] w-[90%] -translate-x-1/2 items-center gap-6 rounded-lg border border-neutral-700 justify-between bg-neutral-900 p-3 text-sm text-neutral-500">
        <div className="logo">
          <img src="/Lyra_org.png" alt="" className="w-[60px]" />
        </div>

        <div className="hidden lg:flex items-center gap-[25px]">
          <a href="#">Asosiy</a>
          <a href="#">Biz Haqimizda</a>
          <a href="#">Loyihalar</a>
          <NavbarButton handleOpenModal={handleOpenModal}/>
        </div>

        <div
          className={`burger ${menuOpen ? "open" : ""} block lg:hidden`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
          <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
          <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-white"></div>
        </div>

        {/* Menu */}
        <div
          className={`absolute left-0 top-16 w-full bg-neutral-900 text-center rounded-lg border border-neutral-700 lg:hidden transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="#"
            className="block px-4 py-2 border-b border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            onClick={() => setMenuOpen(false)}
          >
            Asosiy
          </a>
          <a
            href="#"
            className="block px-4 py-2 border-b border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            onClick={() => setMenuOpen(false)}
          >
            Biz Haqimizda
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-neutral-300 hover:bg-neutral-800"
            onClick={() => setMenuOpen(false)}
          >
            Loyihalar
          </a>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navbar;
