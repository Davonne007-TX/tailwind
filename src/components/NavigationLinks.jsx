import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavigationLinks() {
  return (
    <nav className="flex gap-5 mr-10 font-playfair cursor-pointer text-xl sm:flex-col sm:mt-20">
      <ul className="hover:text-white">About</ul>{" "}
      {/* how would I d.r.y with this ul className? */}
      <ul className="hover:text-white">Criminal Law</ul>
      <ul className="hover:text-white">Civil Law</ul>
      <ul className="hover:text-white">Contact</ul>
    </nav>
  );
}
