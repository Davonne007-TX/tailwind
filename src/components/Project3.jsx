import MainImage from "./MainImage";
import Header from "./Header";

export default function Project3() {
  return (
    <>
      <Header />
      <div className="overflow-y-auto">
        <MainImage />

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-28 p-5 gap-8 w-3/5 ml-auto mr-auto">
          <img src="/images/lawyers.jpg" />

          <p className="font-serif">
            <pre className="font-bold mb-5 font-playfair text-xl">
              We work for you, the Client
            </pre>
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
            <pre className="font-bold mb-5 font-playfair text-xl">
              Strong Litigation Team
            </pre>
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
