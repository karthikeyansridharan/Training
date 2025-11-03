import React from "react";
import AmountDue from "./grid-components/AmountDue";
import Greeting from "./grid-components/Greeting";
import Outage from "./grid-components/Outage";
import Recommendations from "./grid-components/Recommendations";
import Shortcuts from "./grid-components/Shortcuts";
import CurrentUsage from "./grid-components/CurrentUsage";
import Achievements from "./Achievements";
import Logo from "../../dumb-components/Logo";

const Home = () => {
  return (
    <div className=" grid grid-cols-1 gap-2 px-2 pb-40 relative md:p-0 md:grid-cols-2 md:px-40 bg-white md:pt-10 md:gap-5 md:pb-10 md:w-2/3 md:mx-auto">
      <Greeting/>
      <AmountDue/>
      <Outage/>
      <div className="text-black bg-white p-4 rounded">
          <h2 className="font-semibold text-[16px]">Recommendations</h2>
          <Recommendations/>
      </div>
      <div className="text-black bg-white p-4 rounded">
        <h2 className="font-semibold text-[16px]">Shortcuts</h2>
        <Shortcuts/>
      </div>
      <CurrentUsage/>
      <Achievements/>
      <Logo
          src="/message-icon.png"
          alt="message-icon"
          className="cursor-pointer w-15 h-15 fixed bottom-20 right-2"
        />
    </div>
  );
};

export default Home;
