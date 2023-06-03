import React from "react";
import Filter from "./adjust.png";
const Hero = () => {
  return (
    <section className="mb-1">
      <div className="px-6 -py-3 md:px-12 lg:my-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="mt-1 lg:mt-0">
              <h1 className="mt-0 mb-4 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl ">
                Welcome,
                <br />
                <span className="text-primary text-3xl font-semibold text-gray-500">
                  Our Fashion App
                </span>
              </h1>
              <div className="flex-row flex">
                <div
                  className="relative mb-2 p-1 pr-3 md:mb-0 "
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    placeholder="Search... "
                    className="bg-slate-200 rounded-3xl px-6 bottom-0 w-64 h-12"
                  />
                </div>
                <div>
                  <img
                    alt="filter"
                    src={Filter}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
  );
};

export default Hero;
