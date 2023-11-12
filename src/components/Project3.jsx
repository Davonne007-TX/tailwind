// import { Link } from "react-router-dom";

export default function Project3() {
  return (
    <>
      <div className="bg-red-900 w-full h-32 fixed top-0 left-0 flex justify-between items-center">
        <h1 className="ml-20 mt-5 text-3xl font-playfair font-bold ">
          Keating and Associates{" "}
        </h1>
        <nav className="flex gap-5 mr-10 font-playfair cursor-pointer text-xl">
          <ul className="hover:text-white">About</ul>
          <ul className="hover:text-white">Criminal Law</ul>
          <ul className="hover:text-white">Civil Law</ul>
          <ul className="hover:text-white">Contact</ul>
        </nav>
      </div>

      <div className="grid grid-cols-2 mt-60 p-10 gap-10 w-3/5 ml-auto mr-auto">
        <img src="/images/lawyers.jpg" />
        <img src="/images/gavel.jpg" />
      </div>
    </>
  );
}
