import Intro from "./Hero.tsx";
import Connection from "./Connection.tsx";
import Plans from "./Plans.tsx";
import Company from "./Company.tsx";
import Articles from "./Articles.tsx";
import QuickLinks from "./QuickLinks.tsx";
import {useUser} from '../../context/UserContext.tsx';

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
