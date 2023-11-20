import { useNavigate } from "react-router";

export default function Project1() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  return (
    <div>
      <h2
        onClick={goHome}
        className="flex justify-center cursor-pointer mt-8 font-lobster text-black text-6xl mt-20 hover:text-orange-400"
      >
        Favorite Sport
      </h2>

      <div className="flex justify-center flex-col items-center mt-20 font-lobster text-2xl p-20 ">
        <quote>
          "We love that basketball, we love that basketball. Now basketball is
          my favorite sport, I like the way they dribble up and down the court."{" "}
          <br />
          <br />- Bow Wow.
        </quote>

        <img
          src="/images/basketball.png"
          className="flex max-w-2xl mt-40 animate-bounce"
          alt="basketball bouncing"
        />
      </div>
    </div>
  );
}
