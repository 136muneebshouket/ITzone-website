"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import NavButton from "../small_components/NavButton";
import NavDropdown from "./navDropdown/NavDropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md lg:flex lg:justify-between lg:items-center lg:px-7 lg:h-auto">
      <div className="flex justify-between p-3">
        <h2><Link href={'/'}>ITZone.uk</Link></h2>

        <div className="flex lg:hidden">
          <button onClick={handleMenuToggle}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faCircleXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      <div className={`lg:flex ${menuOpen ? "block" : "hidden"}`}>
        <ul className="px-3 lg:flex lg:gap-7 lg:items-center">
          <li>
            <Link href={"/services"}>
              <NavDropdown
                title="What we do"
                firstChild="Strategy Consulting"
              />
            </Link>
          </li>
          <li>
            <Link href={"/web-development-service"}>
              <NavDropdown
                title="Technologies"
                firstChild="Solutions Engineering"
              />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="How we engage" firstChild=" " />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="How we are" />
            </Link>
          </li>
          <li className="px-2">
            <NavButton />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;