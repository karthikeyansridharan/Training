import React, { useContext } from "react";
import Intro from "./Hero.jsx";
import Connection from "./Connection.jsx";
import Plans from "./Plans.jsx";
import Company from "./Company.jsx";
import Articles from "./Articles.jsx";
import QuickLinks from "./QuickLinks.jsx";
import {useUser} from '../../lib/context/user.jsx';

const Homepage = () => {
  const user = useUser();
  return (
    <section className="">
      <Intro />
      {user.current ? (
        <QuickLinks />
      ) : (
        <div className="">
          <Connection />
          <Plans />
          <Company />
          <Articles />
        </div>
      )}
    </section>
  );
};

export default Homepage;
