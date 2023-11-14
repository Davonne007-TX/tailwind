import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavigationLinks() {
  return (
    <nav className="flex gap-5 mr-10 font-playfair cursor-pointer text-xl sm:mt-20 lg:mb-10 sm:flex-col lg:flex-row">
      <ul className="hover:text-white">About</ul>{" "}
      {/* how would I d.r.y with this ul className? */}
      <ul className="hover:text-white">Criminal Law</ul>
      <ul className="hover:text-white">Civil Law</ul>
      <ul className="hover:text-white">Contact</ul>
    </nav>
  );
}
