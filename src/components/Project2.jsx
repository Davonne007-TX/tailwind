import { Link } from "react-router-dom";

export default function Project2() {
  4;
  return (
    <>
      <Link
        to="/"
        className="text-black flex justify-center mt-8 font-lobster text-5xl mt-20 underline hover:text-pink-500"
      >
        Vee's Jewelry
      </Link>

      <div className=" max-w-screen-md mt-20 font-serif text-lg ml-auto mr-auto  ">
        <h2 className="mb-10 font-lobster text-2xl">
          Welcome to Vee's Jewelry Shop..!
        </h2>
        <p>
          Proin eu tempor nibh, eu molestie tellus. Nam eget tempor risus.
          Aliquam dictum sollicitudin enim. Phasellus condimentum quis nunc quis
          convallis. Nam porttitor condimentum porttitor. Nam lectus odio,
          faucibus id risus id, dictum tincidunt mauris. Vivamus sollicitudin
          risus eu lacus finibus, non posuere quam elementum. Cras ullamcorper
          massa at risus congue malesuada. Integer eu nibh dolor.
        </p>
        <p className="mt-5">
          Ut eget ex elit. Nam sit amet dui sed ipsum iaculis semper. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Curabitur imperdiet auctor purus sed facilisis. Proin
          sit amet condimentum leo. Praesent auctor at dui at lacinia. Nullam
          scelerisque consectetur auctor. Proin et bibendum diam. Cras maximus
          massa eu volutpat condimentum.
        </p>
        <img
          src="/images/pinkRing.jpg"
          alt="pink ring"
          className="mt-10 rounded-full w-3/4 mx-auto flex items-center"
        />
        <h3 className="mt-20 font-lobster text-2xl">Custom Jewels</h3>
        <p className="mt-10">
          Vivamus egestas erat a hendrerit malesuada. Morbi iaculis in urna eu
          suscipit. Suspendisse eget euismod augue. Duis feugiat ac nunc in
          aliquet. Integer sit amet tristique neque. Nunc eu tempus nisl.
          Vivamus mattis quam vitae magna fermentum interdum. In vel tristique
          est, vitae luctus tellus. Proin ornare enim ut neque lobortis, ac
          aliquam nisl tincidunt. Mauris elit magna, volutpat ut augue in,
          lacinia commodo ex.
        </p>

        <p className="mt-5">
          Nullam scelerisque consectetur auctor. Proin et bibendum diam. Cras
          maximus massa eu volutpat condimentum. Integer tempus dolor vel sapien
          condimentum, at convallis lacus faucibus. Nullam fermentum nisi lacus,
          sed tincidunt ipsum bibendum eget. Ut elementum euismod tincidunt.
          Fusce efficitur et nunc non aliquet.
        </p>
        <img
          src="/images/necklaceGreen.jpg"
          className="rounded-md w-3/4 mx-auto flex items-center mt-10 mb-20"
          alt="Green Necklace"
        />
      </div>
    </>
  );
}
