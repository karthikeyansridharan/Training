import React, { useContext, useEffect } from "react";
import Header from "./Header";
import HomeNav from "./HomeNav";
import HamMenu from "./HamMenu";
import { useState } from "react";
import CarouselLine from "../../dumb-components/CarouselLine";
import ReportGas from "./ReportGas";
import LocationMenu from "./LocationMenu";
import { useUser } from "../../lib/context/user";
import { useNavigate } from "react-router";

const Intro = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(()=>{
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return()=> document.body.style.overflow = '';
  },[isMenuOpen]);

  
    const handleNavigation = ()=>{
    if(user.current){
      navigate("/myaccount/profile");
    } else{
      navigate("/login");
    }
  }

  return (
    <div className='font-mulish min-h-screen relative bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url("/intro-bg.jpg")] bg-no-repeat bg-size-[550%] bg-position-[67%_72%] md:bg-size-[130%] md:bg-position-[5%_70%] md:pt-9'>
      {/* <Header /> */}
      <div className={`h-screen flex flex-col justify-between md:h-[95vh]`}>
        {" "}
        {/*!!!!!!  Ask  flex*/}
        <HomeNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <HamMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        <main>
          <div className="px-5 flex flex-col gap-3 items-center text-center">
            <h1 className="text-[40px] md:text-[64px]">Better, Together</h1>
            <p className="text-sm md:text-[20px] md:w-130">
              SocalGas Climate commitment to Net Zero leadership in the energy
              transitions.
            </p>            
            <button className="flex items-center gap-4 border rounded-3xl px-6 py-2 text-sm mt-10 font-bold">
              What's To Come{" "}
              <img
                className="w-4 h-4"
                src="/right-arrow.png"
                alt="right-arrow-iconh"
              />
            </button>
          </div>
        </main>
        <div className="flex flex-col w-full gap-10 absolute z-1 bottom-12 md:hidden">
          <LocationMenu forNav={false} style="text-sm font-medium mx-auto" />
          <ReportGas style="mx-auto px-4 py-1 rounded-3xl text-sm font-medium bg-[#FD363580] " />
          <button onClick={handleNavigation}>
            <img
              className="w-15 h-15 absolute right-3 bottom-5"
              src="/add-icon.png"
              alt="add-icon"
            />
          </button>
        </div>
        <div className="flex w-full justify-around gap-2 pb-3 px-3 md:gap-5 md:px-10">
          <CarouselLine style="bg-white" />
          <CarouselLine />
          <CarouselLine />
          <CarouselLine />
        </div>
      </div>
    </div>
  );
};

export default Intro;
