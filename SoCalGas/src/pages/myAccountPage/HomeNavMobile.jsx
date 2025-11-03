import React, { useState } from "react";
import { NavLink } from "react-router";
import SvgIcons from "../../dumb-components/SvgIcons";
import { useEffect } from "react";

const navLinks = [
  { to: "/myAccount", name: "Home", icon: (color) => SvgIcons.home(color) },
  { to: "usage", name: "Usage", icon: (color) => SvgIcons.usage( color) },
  { to: "bills", name: "Bills", icon: (color) => SvgIcons.bills(color) },
  { to: "save", name: "Save", icon: (color) => SvgIcons.save(color) },
  { to: "achievements", name: "Achievements", icon: (color) => SvgIcons.achievements(color)},
];


const HomeNavMobile = () => {

  const [isScreenLarger,setIsScreenLarger] = useState(false);

  useEffect(()=>{

    const handleResize = ()=>{
      setIsScreenLarger(window.innerWidth >= 768);
    }

    handleResize();
    
    window.addEventListener("resize",handleResize);
  },[]);

  return (
    <div className="flex w-full justify-center bg-white text-[#00000050] fixed bottom-0 left-0  md:static md:bg-transparent z-10">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={'w-1/5'} 
        >
          {({ isActive }) => (
            <div className={`flex flex-col items-center h-full justify-between border-t-4 md:border-b-4 md:border-t-0 py-2 md:py-5 md:text-[#FFFFFF75] ${isActive ? 'border-[#0041A2] text-[#0041A2] md:border-white md:text-white md:bg-[#FFFFFF1A]'  : 'border-transparent text-[#00000050]'} md:flex-row md:justify-center md:gap-4`}>
              {link.icon(isScreenLarger && isActive ? '#FFFFFF' : (isScreenLarger ? '#FFFFFF75' : (isActive ? '#0041A2' : '#00000050')))}

              <p className="text-[10px] mt-1 font-bold">{link.name}</p>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};


export default HomeNavMobile;
