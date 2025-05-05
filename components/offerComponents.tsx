import React from "react";

function OfferComponents() {
  return (
    <>
      <section className="bg-yellow-700 text-amber-100 py-8">
        <div className="flex justify-center">
          <div className="inline-flex flex-col ">
            <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black">
              <span className="text-yellow-700 font-semibold">
                RECOMMENDED{" "}
              </span>
              BREAKFAST
            </h2>
            <p className="font-thin font-serif tracking-widest text-center pt-2">
              Check Out Our Tasty <span>Menu</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8 mx-auto w-fit">
          {["j", "i", "y", "y", "o", "9", "0"].map((e, index) => {
            if (index % 2 != 0) {
              return (
                <div key={e} className="flex items-center">
                  <h2 className="ml-2">
                    <span>&#8358;</span>1,500
                  </h2>
                  <div>
                    .....................................................
                  </div>
                  <div className="h-32 w-32 bg-fuchsia-900 mr-2"></div>
                </div>
              );
            } else {
              return (
                <div key={e} className="flex items-center">
                  <div className="h-32 w-32 bg-fuchsia-900 mr-2"></div>
                  .................................
                  <h2 className="ml-2">
                    <span>&#8358;</span>1,500
                  </h2>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section className=" py-8">
        <div className="flex justify-center">
          <div className="inline-flex flex-col ">
            <h2 className="bg-amber-100 py-1 px-1.5 text-2xl text-black text-center">
              OUR <span className="text-yellow-700 font-semibold">MENU</span>
            </h2>
            <p className="font-thin font-serif tracking-widest text-center pt-2">
              Check Out Our Tasty <span>Menu</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8 text-yellow-700 mx-auto w-fit">
          {["j", "i", "y", "y", "o", "9", "0"].map((e, index) => {
            if (index % 2 != 0) {
              return (
                <div key={e} className="flex items-center">
                  <h2 className="ml-2">
                    <span>&#8358;</span>1,500
                  </h2>
                  <div>
                    .....................................................
                  </div>
                  <div className="h-32 w-32 bg-fuchsia-900 mr-2"></div>
                </div>
              );
            } else {
              return (
                <div key={e} className="flex items-center">
                  <div className="h-32 w-32 bg-fuchsia-900 mr-2"></div>
                  .................................
                  <h2 className="ml-2 ">
                    <span>&#8358;</span>1,500
                  </h2>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
}

export default OfferComponents;
