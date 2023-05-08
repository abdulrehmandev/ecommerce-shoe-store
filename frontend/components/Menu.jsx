import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black dark:text-white">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 py-1 relative hover:opacity-75"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              {item.name}
              <BsChevronDown size={14} />
              {active && (
                <ul className="absolute border bg-white dark:bg-black top-8 lef-0 min-w-[200px] px-1 py-1 text-black dark:text-white shadow-lg">
                  {subMenuData.map((subItem) => (
                    <li>
                      <Link
                        className="flex items-center justify-between gap-2 h-12 px-3 md:h-9 hover:bg-gray-100"
                        href="/category/jordan"
                        onClick={() => setActive(false)}
                      >
                        {subItem.name}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {subItem.doc_count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer py-1 hover:opacity-75">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};
export default Menu;
