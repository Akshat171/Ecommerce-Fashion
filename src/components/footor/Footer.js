import React from "react";
import { ImHome2 } from "react-icons/im";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Footer = () => {
  return (
    <div className="card shadow-md fixed z-50  w-full h-16 max-w-lg -translate-x-1/2 bg-gray-300 border border-gray-200 rounded-t-3xl bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <ImHome2 className="w-6 h-6" />
          <span className="sr-only">Home</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <BsFillCartCheckFill className="w-6 h-6" />
          <span className="sr-only">Wallet</span>
        </button>
        <div
          id="tooltip-wallet"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Wallet
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <IoIosNotifications className="w-6 h-6" />
          <span className="sr-only">Settings</span>
        </button>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <CgProfile className="w-6 h-6" />
          <span className="sr-only">Profile</span>
        </button>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
