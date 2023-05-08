"use client";

import { useState } from "react";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import Container from "@/components/Container";
import Menu from "@/components/Menu";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav
      className={`h-20 w-full bg-white dark:bg-black z-20 border-b sticky top-0 transition-transform duration-300 ${""}`}
    >
      <Container className="flex items-center justify-between h-full">
        <Link href="/">Logo</Link>
        {/* navigations */}
        <Menu />
        <MobileMenu
          className={menuActive ? "translate-x-0" : "translate-x-full"}
          setMenuActive={setMenuActive}
        />
        <div className="flex items-center gap-3">
          {/* icons */}
          <Link
            className="w-8 h-8 transition rounded-full flex items-center justify-center hover:bg-gray-100 hover:dark:bg-gray-800"
            href="/wishlist"
          >
            <IoMdHeartEmpty className="text-xl" />
          </Link>
          <Link
            className="w-8 h-8 transition rounded-full flex items-center justify-center hover:bg-gray-100 hover:dark:bg-gray-800 relative"
            href="/cart"
          >
            <BsCart className="text-lg" />
            <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute -top-1 left-5 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              2
            </span>
          </Link>

          {/* small screen nav toggler */}
          <button
            className="md:hidden ml-1"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            {menuActive ? (
              <IoMdClose className="text-xl" />
            ) : (
              <HiOutlineMenuAlt4 className="text-xl" />
            )}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
