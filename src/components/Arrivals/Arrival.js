import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Arrival = () => {
  return (
    <div className="relative top-3 p-1">
      <span className="text-xl px-2 p-2 font-bold">New Arrivals</span>
      <Swiper
        className="w-[120%] h-42 "
        // install Swiper modules
        loopFillGroupWithBlank={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={2}
        slidesPerGroup={4}
        loop={true}
      >
        <SwiperSlide className="flex rounded-[10px] p-2 overflow-hidden relative">
          <div className="w-88 p-3 bg-base-100">
            <Link to="/product">
              <figure className=" pt-1">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Shoes"
                  className="rounded-xl"
                  width={186}
                  height={173}
                />
              </figure>
            </Link>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg font-bold font-Popp">
                The Marc Jacob
              </h2>
              <p className="font-thin ">TravelerTote</p>
              <p className="font-bold ">$195</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex rounded-[10px] p-2 overflow-hidden relative">
          <div className="w-88 p-3 bg-base-100">
            <Link to="/product">
              <figure className=" pt-1">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt="Shoes"
                  className="rounded-xl"
                  width={186}
                  height={173}
                />
              </figure>
            </Link>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg font-bold font-Popp">
                The Marc Jacob
              </h2>
              <p className="font-thin ">TravelerTote</p>
              <p className="font-bold ">$195</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex rounded-[10px] p-2  overflow-hidden relative">
          <div className="w-88 p-3 bg-base-100">
            <Link to="/product">
              <figure className=" pt-1">
                <img
                  src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt="Shoes"
                  className="rounded-xl"
                  width={186}
                  height={173}
                />
              </figure>
            </Link>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg font-bold font-Popp">
                The Marc Jacob
              </h2>
              <p className="font-thin ">TravelerTote</p>
              <p className="font-bold ">$195</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Arrival;
