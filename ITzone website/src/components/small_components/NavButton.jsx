'use client';
import React from "react";
import Link from "next/link";

const NavButton = () => {
  return (
    <div>
      <Link href={'/contact'}><button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 bg-red-600 px-5 py-2 text-white rounded-lg">
        Contact Us
      </button></Link>
    </div>
  );
}

export default NavButton;