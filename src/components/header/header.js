import React from "react";
import Logo from "./menu.png";
import Prof from "./profile.png";
const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-6 lg:px-6 py-12 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <img alt="menu" src={Logo} width={35} height={35} />
            </button>
          </div>

          <a href="https://flowbite.com" className="flex items-center">
            <img
              src={Prof}
              className="mr-3 sm:h-9 rounded-full p-[2px] bg-slate-700"
              alt="Flowbite Logo"
              width={56}
              height={56}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
