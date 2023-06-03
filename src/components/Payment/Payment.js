import { React, useState } from "react";
import { FaBuffer } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
const Payment = () => {
  const [isProcessing, setProcessing] = useState(false);
  const [isPaymentComplete, setPaymentComplete] = useState(false);

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setPaymentComplete(true);

      setTimeout(() => {
        setPaymentComplete(false);
      }, 2000);
    }, 3000);
  };
  return (
    <div>
      <div className="max-w-sm mx-auto mt-20 bg-pink-100 rounded-md shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="card-number"
            >
              Card Number
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card-number"
              type="text"
              placeholder="**** **** **** ****"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="cvv">
              Name on card
            </label>
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-4 flex flex-row gap-1">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="expiration-date"
              >
                Expiration Date
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiration-date"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="cvv"
                typeof="code"
              >
                Security code
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="text"
                placeholder="***"
              />
            </div>
          </div>

          <button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
      {isProcessing && (
        <div className="max-w-sm mx-auto mt-20 bg-pink-100 rounded-md shadow-md overflow-hidden w-[90%] h-48">
          <div className="mt-4 text-black font-semibold text-center p-8">
            <FaBuffer className="ml-36 text-3xl" />
            <div> Payment is Processing...</div>
            <div>
              <span className="text-gray-500 font-thin">
                Please wait, do not close this screen
              </span>
            </div>
          </div>
        </div>
      )}
      {isPaymentComplete && (
        <div className="max-w-sm mx-auto mt-20 bg-pink-100 rounded-md shadow-md overflow-hidden w-[90%] h-48">
          <div className="mt-4 text-black font-semibold text-center p-8">
            <IoIosCloudDone className="ml-36 text-3xl text-green-600" />
            <div> Payment received!</div>
            <div>
              <span className="text-gray-500 font-thin">
                Your oredr is now on the way, Please check email for the
                receipt.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
