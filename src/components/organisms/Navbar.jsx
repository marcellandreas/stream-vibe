"use client";

import Image from "next/image";
import { MdClose, MdMenu, MdOutlineDoorbell, MdSearch } from "react-icons/md";
import logo from "../../assets/icons/Logo.png";
import { useState } from "react";

// Navbar menu items, defined outside the component to avoid re-creation on each render
const menuNavbar = ["Home", "Movies & Shows", "Support", "Subscriptions"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function, better performance than inline function
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 z-50 w-full h-[12vh] flex py-6 px-5 lg:px-20 justify-between items-center shadow-md">
      <div>
        <Image src={logo} alt="Logo" width={150} height={50} priority />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className="lg:hidden block text-black" onClick={toggleMenu}>
        {menuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex p-[8px] gap-4 items-center rounded-[10px] bg-black-6 border-[3px] border-black-12">
        {menuNavbar.map((menu, index) => (
          <button
            key={index}
            className="flex py-3 px-5 items-center gap-[10px] hover:bg-slate-800 rounded-xl"
          >
            <span className="lg:text-[18px] md:text-[16px] text-[12px]">
              {menu}
            </span>
          </button>
        ))}
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:flex gap-[14px] items-center">
        <button>
          <MdSearch size={32} />
        </button>
        <button>
          <MdOutlineDoorbell size={32} />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[12vh] left-0 w-full flex flex-col items-center py-5 space-y-5 shadow-lg z-50">
          {menuNavbar.map((menu, index) => (
            <button
              key={index}
              className="flex py-3 px-5 items-center gap-[10px] hover:bg-slate-800 rounded-xl"
            >
              <span className="text-[16px]">{menu}</span>
            </button>
          ))}

          <div className="flex gap-4">
            <button>
              <MdSearch size={32} />
            </button>
            <button>
              <MdOutlineDoorbell size={32} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
