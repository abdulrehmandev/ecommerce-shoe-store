import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

// static data
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

const MobileMenu = ({ setMenuActive, className }) => {
  const [active, setActive] = useState(false);

  return (
    <ul
      className={
        "flex flex-col fixed top-20 left-0 w-full bottom-0 h-[calc(100vh-80px)] md:hidden font-medium text-black dark:text-white bg-white dark:bg-black duration-300 overflow-hidden " +
        className
      }
    >
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            // dropdown
            <li
              className="flex flex-col border-b py-4 px-5 relative"
              onClick={() => setActive(!active)}
            >
              <div className="flex items-center justify-between">
                {item.name}
                <BsChevronDown size={14} />
              </div>
              {active && (
                <ul className="bg-gray-100 -mb-3 mt-3">
                  {subMenuData.map((subItem) => (
                    <li>
                      <Link
                        className="flex items-center justify-between gap-2 h-12 px-5 py-4 md:h-9 hover:bg-gray-100"
                        href="/category/jordan"
                        onClick={() => {
                          setActive(false);
                          setMenuActive(false);
                        }}
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
            // normal link
            <li className="py-4 px-5 border-b">
              <Link href={item?.url} onClick={() => setMenuActive(false)}>
                {item.name}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MobileMenu;
