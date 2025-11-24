import { NavLink } from "react-router";
import Logo from "../../components/common/Logo";
import { footerContent } from "../../constants/homePageConstants";

const Footer = () => {
  return (
    <footer className="bg-[#002661]">
      <div className="text-xs">
        <div className="grid grid-cols-2 gap-x-4 px-4 pt-7 md:gap-x-20 md:gap-y-5 md:px-20 md:pt-6 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo src="/socal-logo.png" className="h-14 w-36 cursor-pointer md:order-1" />
          </div>
          <div className="pb-4 md:order-4">
              <p className="font-extrabold mb-2 md:mb-0 md:pt-3 md:border-t md:pb-5">Follow Us</p>
              <div className="flex justify-between md:justify-start md:gap-5">
                {footerContent.social.map((item,index) => {
                  return (
                    <NavLink target="_blank" key={index} to={item.LinkTo}>
                      <Logo className="w-6 h-6 cursor-pointer" src={item.src} />
                    </NavLink>
                  );  
                })}
              </div>
            </div>
            <div className="flex flex-col border-t py-4 md:order-2">
              <p className="font-extrabold pb-3">About SoCalGas</p>
              {footerContent.about.map((item, index) => {
                return (
                  <NavLink
                    className="text-start py-3 cursor-pointer"
                    key={index}
                    to={item.LinkTo}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
            <div className="flex flex-col border-t py-4 md:order-3">
              <p className="font-extrabold pb-3">Support</p>
              {footerContent.support.map((item, index) => {
                return (
                  <NavLink
                    className={`text-start py-3 cursor-pointer`}
                    key={index}
                    to={item.LinkTo}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
            
          
        </div>
        <div className="text-center text-xs">
          <div>
            <nav className="flex justify-around text-2 border-b md:justify-center md:gap-20 lg:border-b-0 lg:border-t">
              {footerContent.navItems.map((item, index) => {
                return (
                  <NavLink
                    className="text-start py-3 cursor-pointer"
                    key={index}
                    to={item.LinkTo}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
          <div className="pt-2 text-[12px] p-2 md:text-sm lg:pt-0">
            <p>
              Southern California Gas Company is a subsidiary of Sempra®. © 1998
              - 2022 Southern California Gas Company. SoCalGas® is a registered
              trademark of Southern California Gas Company.
            </p>
            <p>
              The trademarks used herein are the property of their respective
              owners. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
