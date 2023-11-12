import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function hereWeGo() {
    navigate("/");
  }
  return (
    <div className=" border-8 border-black h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <h1
            className="relative text-white font-lobster text-6xl p-10 animate-pulse cursor-pointer "
            onClick={hereWeGo}
          >
            Here we go Learning <br />
            <div className="text-center">Tailwind</div>
          </h1>
        </span>
        <div className="p-5 font-lobster text-2xl underline flex flex-col space-y-4 no-underline">
          <Link to="/project1" className="hover:text-pink-500 hover:underline">
            Project 1
          </Link>
          <Link to="project2" className="hover:text-pink-500 hover:underline">
            Project 2
          </Link>
          <Link to="project3" className="hover:text-pink-500 hover:underline">
            Project 3
          </Link>
        </div>
      </div>
    </div>
  );
}
