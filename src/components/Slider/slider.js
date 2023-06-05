import React from "react";
import FIRST from "./1st.png";
import SEC from "./2nd.png";
import FIF from "./5th.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="relative top-3">
      <Swiper
        className="w-[80%] h-40 "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={4}
      >
        <SwiperSlide className="flex rounded-[20px] box-border overflow-hidden relative">
          <div className="bg-gray-300 p-2 flex flex-row shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="px-1 py-4 pb-5">
              <div>
                <span className="text-gray-900 font-Popp  font-extrabold p-1 text-2xl tracking-tight">
                  50% off
                </span>
              </div>
              <div>
                <span className=" text-xs font-Popp">On everything today</span>
              </div>

              <span className="text-gray-600 pt-1 text-sm font-semibold font-Popp">
                withcode:wtf22012
              </span>
              <div className=" items-center justify-between py-2">
                <Link
                  to="/product"
                  className="text-white font-Popp bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-1  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <SwiperSlide className="flex rounded-[20px] box-border overflow-hidden relative">
          <div className="bg-gray-300 p-2 flex flex-row shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="px-1 py-4 pb-5">
              <div>
                <span className="text-gray-900 font-Popp  font-extrabold p-1 text-2xl tracking-tight">
                  50% off
                </span>
              </div>
              <div>
                <span className=" text-xs font-Popp">On everything today</span>
              </div>

              <span className="text-gray-600 pt-1 text-sm font-semibold font-Popp">
                withcode:wtf22012
              </span>
              <div className=" items-center justify-between py-2">
                <Link
                  to="/product"
                  className="text-white font-Popp bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-1  text-center "
                >
                  Get Now
                </Link>
              </div>
            </div>
            <div>
              <span className="text-center">
                <img src={FIF} alt="product" width={200} height={100} />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex rounded-[20px] box-border overflow-hidden relative">
          <div className="bg-gray-300 p-2 flex flex-row shadow-md rounded-lg max-w-sm">
            <div className="px-1 py-4 pb-5">
              <div>
                <span className="text-gray-900 font-Popp  font-extrabold p-1 text-2xl tracking-tight">
                  50% off
                </span>
              </div>
              <div>
                <span className=" text-xs font-Popp">On everything today</span>
              </div>

              <span className="text-gray-600 pt-1 text-sm font-semibold font-Popp">
                withcode:wtf22012
              </span>
              <div className=" items-center justify-between py-2">
                <Link
                  to="/product"
                  className="text-white font-Popp bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-1  text-center"
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
