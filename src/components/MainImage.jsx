import React from "react";

export default function MainImage() {
  return (
    <div className="flex justify-center">
      <div className=" relative md:w-3/5 lg:w-3/4 xl:w-7/12 mt-32 p-5">
        <img
          src="/images/judgesGavel.jpg"
          alt="Judges Gavel"
          className="w-full h-auto object-cover rounded-3xl"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-4xl font-playfair">
            Your Local Law Representative
          </h2>
          <div className="mt-5 font-serif text-xl">
            <p>(682)-224-1478</p>
            <p>Serving since 1993 | Family Owned | Harvard Graduates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
