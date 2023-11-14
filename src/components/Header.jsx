import NavigationLinks from "./NavigationLinks";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <header className="bg-red-900 w-full lg:h-24 flex justify-between items-center sm:h-72 ">
      {" "}
      {/* trying to get this to be fixed and have the rest of the content scroll*/}
      <h1
        className="ml-20 mt-5 text-3xl font-playfair font-bold cursor-pointer sm:text-4xl"
        onClick={goToHome}
      >
        Keating and Associates{" "}
      </h1>
      <NavigationLinks />
    </header>
  );
}
