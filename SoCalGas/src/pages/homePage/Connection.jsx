import React from "react";
import clsx from "clsx";
import { useState } from "react";
import Cards from "./Cards";
import Logo from "../../dumb-components/Logo";

const Connection = () => {
  const [btnActiveIndex, setbtnActiveIndex] = useState(0);


  return (
    <div className="bg-white text-black px-3 py-8 font-mulish">
      <h1 className="text-[28px] text-center pb-4 font-semibold leading-[120%]">
        Looking for a new connection?
      </h1>
      <div className="flex flex-col items-center w-full gap-4 pb-15 md:flex-row md:justify-center">
        <div className="flex justify-center gap-5 text-sm pt-3">
          <button
            className={clsx(
              "cursor-pointer",
              btnActiveIndex === 0
                ? "font-bold border-b"
                : "border-b-transparent"
            )}
            onClick={() => setbtnActiveIndex(0)}
          >
            Residential
          </button>
          <button
            className={clsx(
              "cursor-pointer",
              btnActiveIndex === 1
                ? "font-bold border-b"
                : "border-b-transparent"
            )}
            onClick={() => setbtnActiveIndex(1)}
          >
            Business
          </button>
        </div>
        <input
          type="text"
          name="zip"
          className="bg-[#0000000D] text-[#00000080] font-medium text-xs leading-5 w-full rounded-3xl px-4 py-2 md:max-w-52"
          placeholder="Enter ZIP Code"
        />
        <button className="cursor-pointer text-socal-light-blue flex items-center gap-2 text-xs font-bold leading-5 pt-2">
          Check Availability{" "}
          <img
            src="/right-arrow-blue.png"
            alt="right-arrow"
            className="w-4 h-4"
          />
        </button>
        <button className="cursor-pointer bg-[#F27321] text-white text-xs font-extrabold leading-5 rounded-3xl px-4 py-2">
          See Plans
        </button>
        <Logo
          src="/message-icon.png"
          alt="message-icon"
          className="cursor-pointer hidden w-15 h-15 absolute right-10 md:block"
        />
      </div>{" "}
      {/*Ask !!!!!!!  msg absolute */}
      <h1 className="text-center text-[28px] font-semibold pb-7">
        Customer Resources
      </h1>
      <Cards/>
    </div>
  );
};

export default Connection;
