import React from "react";
import IMG from "./img.png";
import FIRST from "./1st.png";
import SEC from "./2nd.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div classNameName="relative top-3">
      <Swiper
        classNameName="w-[80%] h-40 "
        loopFillGroupWithBlank={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        slidesPerGroup={4}
      >
        <SwiperSlide className="flex rounded-[10px] px-2 box-border overflow-hidden relative">
          <div className="bg-gray-300 p-2 flex flex-row shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="px-1 py-4 pb-5">
              <div>
                <a href="#">
                  <span className="text-gray-900 font-Popp font-bold p-2 text-3xl tracking-tight dark:text-white">
                    50% off
                  </span>
                </a>
              </div>
              <div>
                <span className="p-1 text-base font-Popp">
                  On everything today
                </span>
              </div>

              <span className="text-gray-400 pt-2  text-thin font font-Popp">
                Withcode:wtf22012
              </span>
              <div className=" items-center justify-between py-7">
                <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                <Link
                  to="/product"
                  className="text-white font-Popp bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get Now
                </Link>
              </div>
            </div>
            <div>
              <span className="text-center">
                <img src={FIRST} alt="product" width={200} height={100} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex rounded-[10px] p-2 box-border overflow-hidden relative">
          <div className="bg-gray-300 p-2 flex flex-row shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="px-1 py-4 pb-5">
              <div>
                <a href="#">
                  <span className="text-gray-900 font-bold p-2 text-3xl tracking-tight dark:text-white font-Popp">
                    50% off
                  </span>
                </a>
              </div>
              <div>
                <span className="p-1 text-base font-Popp">
                  On everything today
                </span>
              </div>

              <span className="text-gray-400 pt-2  text-thin font font-Popp">
                Withcode:wtf22012
              </span>
              <div className=" items-center justify-between py-7">
                <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                <Link
                  to="/product"
                  className="text-white bg-black font-Popp hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get Now
                </Link>
              </div>
            </div>
            <div>
              <span className="text-center">
                <img src={SEC} alt="product" width={200} height={100} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex rounded-[10px] p-2 box-border overflow-hidden relative">
          <div className="bg-gray-300 p-2 flex flex-row shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="px-1 py-4 pb-5">
              <div>
                <a href="#">
                  <span className="text-gray-900 font-Popp font-bold p-2 text-3xl tracking-tight dark:text-white">
                    50% off
                  </span>
                </a>
              </div>
              <div>
                <span className="p-1 text-base font-Popp">
                  On everything today
                </span>
              </div>

              <span className="text-gray-400 pt-2  text-thin font font-Popp">
                Withcode:wtf22012
              </span>
              <div className=" items-center justify-between py-7">
                <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                <Link
                  to="/product"
                  className="text-white bg-black font-Popp hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-3 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get Now
                </Link>
              </div>
            </div>
            <div>
              <span className="text-center">
                <img src={FIRST} alt="product" width={200} height={100} />
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
