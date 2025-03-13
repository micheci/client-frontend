import React from "react";
import Image from "next/image";

const Hero = ({}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-6xl mx-auto p-12">
      {/* Left Column - Intro Text */}
      <div className="w-1/3 text-left">
        <h1 className="text-4xl font-bold leading-snug">
          {`Hi, I'm Micheci—your go-to Dallas real estate expert! Let's find your dream home today!`}
        </h1>
      </div>

      {/* Middle Column - Larger Image */}
      <div className="w-1/3 flex justify-center">
        <Image
          src="https://saint313.com/wp-content/uploads/2018/04/pexels-photo-428341-1024x683.jpeg"
          alt="Micheci"
          width={240} // Define exact width
          height={240} // Define exact height
          className="object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Right Column - Achievements/Goals with Icons and Spacing */}
      <div className="w-1/3 text-right space-y-4">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-semibold">🏆 Top Realtor in Dallas</h2>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-gray-200 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
          </div>
          <p className="text-lg text-left">
            <span className="block text-2xl font-bold">100</span>
            <span className="block">Homes Sold</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-gray-200 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <p className="text-lg text-left">
            <span className="block text-2xl font-bold">Lowest</span>
            <span className="block">Rates</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-gray-200 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <p className="text-lg text-left">
            <span className="block text-2xl font-bold">24hr</span>
            <span className="block">Service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
