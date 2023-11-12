import { useNavigate } from "react-router-dom";
import MainImage from "./MainImage";
import NavigationLinks from "./NavigationLinks";

export default function Project3() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <>
      <header className="bg-red-900 w-full h-24 flex justify-between items-center">
        {" "}
        {/* trying to get this to be fixed and have the rest of the content scroll*/}
        <h1
          className="ml-20 mt-5 text-3xl font-playfair font-bold cursor-pointer"
          onClick={goToHome}
        >
          Keating and Associates{" "}
        </h1>
        <NavigationLinks />
      </header>

      <div className="overflow-y-auto">
        <MainImage />

        <div className="grid grid-cols-2 mt-28 p-10 gap-10 w-3/5 ml-auto mr-auto">
          <img src="/images/lawyers.jpg" />

          <p className="font-serif">
            Nunc eu tempus nisl. Vivamus mattis quam vitae magna fermentum
            interdum. In vel tristique est, vitae luctus tellus. Proin ornare
            enim ut neque lobortis, ac aliquam nisl tincidunt. Mauris elit
            magna, volutpat ut augue in, lacinia commodo ex. Ut mattis nisl
            purus, vitae tristique massa tincidunt id. In gravida magna ac sem
            hendrerit elementum. Etiam vel ligula non elit vulputate accumsan in
            eu nisi.
          </p>
          <img src="/images/theLaw.jpg" />

          <p className="font-serif">
            Integer nec porttitor est. Phasellus facilisis egestas libero sed
            varius. Sed semper nibh quis metus finibus, in blandit lectus
            elementum. Nam in felis efficitur, tincidunt orci et, congue neque.
            Integer non finibus libero. Phasellus placerat lectus nibh, at
            venenatis risus suscipit sit amet. Mauris sit amet dui blandit,
            interdum felis eu, mollis diam. Maecenas rhoncus finibus purus ut
            vulputate.
          </p>
        </div>
      </div>
    </>
  );
}
