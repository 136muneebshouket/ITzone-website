"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const NavDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const leaveDropDown = () => {
    setIsOpen(null);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    setIsOpen(false);
  };

  return (
    <div
      onMouseLeave={leaveDropDown}
      className="relative inline-block gap-2 text-left"
    >
      <button
        onMouseOver={toggleDropdown}
        className="w-screen lg:w-full inline-flex h-20 items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:text-red-600 active:text-red-600"
      >
        {props.title}
        <div className="float-right">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => handleItemClick("Account settings")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            >
              {props.firstChild}
            </button>
            <button
              onClick={() => handleItemClick("Support")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            >
              Support
            </button>
            <button
              onClick={() => handleItemClick("License")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            >
              License
            </button>
            <button
              onClick={() => handleItemClick("Sign out")}
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
