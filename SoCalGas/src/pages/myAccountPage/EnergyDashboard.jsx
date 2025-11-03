import React, { useState } from 'react'
import Logo from '../../dumb-components/Logo'

const navItems = ["Energy Dashboard","Analyse Usage","Compare Bills"];

const EnergyDashboard = () => {

    const [activeIndex,setActiveIndex] = useState(0);
    const [isMenuOpen,setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-col gap-5 items-start bg-[#00256C] p-5 text-white md:px-70 md:py-10'> 
        <button className='flex font-semibold text-[20px] items-center gap-4'><Logo className='h-6 w-6 cursor-pointer md:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)} src='/ham-menu.png'/> Energy Dashboard </button>
        {
            isMenuOpen && 
            <nav>
                <div className="flex flex-col gap-5 items-start ">
                {
                    navItems.map((item,index)=>
                        <button key={index} onClick={()=>setActiveIndex(index)} className={`font-bold text-[16px] cursor-pointer ${activeIndex===index?'bg-[#FFFFFF12]':''}  px-2 py-2 rounded-lg`}>{item}</button>
                    )
                }
                </div>
            </nav>
        }
    </div>
  )
}

export default EnergyDashboard



// import React, { useState } from 'react'
// import Logo from '../LandingPage/Logo'

// const navItems = ["Energy Dashboard", "Analyse Usage", "Compare Bills"];

// const EnergyDashboard = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="flex bg-[#00256C] text-white min-h-screen">
//       {/* Sidebar (nav) */}
//       <aside
//         className={`${
//           isMenuOpen ? 'flex' : 'hidden'
//         } md:flex flex-col gap-5 p-5 w-60 bg-[#00256C] border-r border-[#FFFFFF33]`}
//       >
//         <button
//           className="flex font-semibold text-[20px] items-center gap-4 md:hidden"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           Close ✕
//         </button>

//         {navItems.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`font-bold text-[16px] cursor-pointer px-2 py-2 rounded-lg text-left ${
//               activeIndex === index ? 'bg-[#FFFFFF12]' : ''
//             }`}
//           >
//             {item}
//           </button>
//         ))}
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col gap-5 p-5">
//         {/* Top bar (mobile only) */}
//         <div className="flex items-center gap-4 md:hidden">
//           <Logo
//             className="h-6 w-6 cursor-pointer"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             src="/ham-menu.png"
//           />
//           <span className="font-semibold text-[20px]">Energy Dashboard</span>
//         </div>

//         {/* Page content area */}
//         <div className="text-white">
//           {/* You can render your selected dashboard content here */}
//           <h1 className="text-2xl font-bold">{navItems[activeIndex]}</h1>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default EnergyDashboard;
