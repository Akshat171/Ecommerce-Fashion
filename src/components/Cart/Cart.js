import { React, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  BsFillHandbagFill,
  BsHandbag,
  BsFillSkipBackwardCircleFill,
} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
// import FIRST from "./first.jpg";
import FIRST from "./1st.png";
import { increaseQuantity, decreaseQuantity } from "../redux/action";
const mapStateToProps = (state) => ({
  quantity: state.quantity,
  totalAmount: state.totalAmount,
});

const mapDispatchToProps = {
  increase: increaseQuantity,
  decrease: decreaseQuantity,
};
const Cart = ({ quantity, totalAmount, increase, decrease }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const renderSizeOptions = () => {
    const sizes = ["S", "M", "L", "XL", "XXL"]; // Replace with your size options from data or props

    return sizes.map((size) => (
      <button
        key={size}
        onClick={() => handleSizeClick(size)}
        className={`${
          selectedSize === size ? "bg-black text-white" : "bg-gray-100 border"
        } py-2 px-4 text-xl rounded-full m-2`}
      >
        {size}
      </button>
    ));
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden flex flex-wrap">
      <div className="container mx-auto">
        {" "}
        <div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto -top-2 h-96 object-cover object-center rounded -z-20 bg-gradient-to-t from-neutral-100 to-slate-300"
            src={FIRST}
          />

          <span className="absolute text-white p-2 rounded-full bg-black top-4 left-4">
            <i className="far fa-heart ">
              <BsFillSkipBackwardCircleFill />
            </i>{" "}
            {/* Like icon */}
          </span>
          <span className="absolute text-black p-2 rounded-full bg-white top-80 right-4">
            <i className="far fa-heart ">
              <AiOutlineHeart />
            </i>{" "}
            {/* Like icon */}
          </span>
          <span className="absolute ml-2 text-black top-4 right-4 p-2 rounded-full bg-white">
            <i className="fas fa-shopping-cart">
              <BsHandbag />
            </i>{" "}
            {/* Cart icon */}
          </span>
        </div>
        <div className="lg:w-4/5 mx-auto px-5  ">
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
            <h2 className="text-2xl font-bold title-font text-gray-900 font-Popp">
              Roller Rabbit
            </h2>
            <h1 className="text-gray-500 p-2 text-sm font-bold mb-1 font-Popp">
              Vodo Odelle Dress
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-2 text-sm font-Popp">
                  4 Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
              <span>
                <div className="flex items-center ml-10">
                  <button
                    className="bg-gray-200 text-black py-1 px-3 rounded-s-xl"
                    onClick={decrease}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 py-1 px-3">{quantity}</span>
                  <button
                    className="bg-gray-200 text-black py-1 px-3 rounded-e-xl"
                    onClick={increase}
                  >
                    +
                  </button>
                </div>
              </span>
            </div>
            <div>
              <span className="p-1 font-bold text-lg">Size</span>
              <div>{renderSizeOptions()}</div>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
            </div>
            <span className="p-1 -top-2 font-bold text-lg font-Popp">
              Description
            </span>
            <p className="leading-relaxed p-2 font-Popp">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn.
            </p>
            <div className=" flex p-3">
              {" "}
              <div className="flex flex-col">
                <div>
                  {" "}
                  <span className="font-thin text-sm text-gray-400 font-Popp">
                    Total Price
                  </span>
                </div>
                <div>
                  {" "}
                  <span className="title-font font-bold text-3xl text-gray-900">
                    ${totalAmount}
                  </span>
                </div>
              </div>
              <button className="flex ml-auto text-white text-xl font-bold bg-black border-0 py-3 px-8 focus:outline-none hover:bg-yellow-600 rounded-3xl">
                <Link to="/payment">
                  <div className="flex flex-row">
                    <div className="p-1">
                      <BsFillHandbagFill />
                    </div>
                    <div>Buy Now</div>
                  </div>
                </Link>
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
