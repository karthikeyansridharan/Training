import { useState } from 'react';
import clsx from 'clsx';
import HomeNav from './HomeNav';
import { DROPDOWN_ITEMS, HAM_MENU_BUTTONS } from '../../constants/homePageConstants';
import type { HamMenuProps } from '../../types';

const HamMenu = ({ isMenuOpen, setIsMenuOpen }: HamMenuProps) => {
    const [active, setActive] = useState(0);

    return (
        <div className="bg-white w-full absolute z-2 animate-SlideSide">
            <HomeNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="min-h-screen flex px-3 flex-col gap-20 border-t text-black">
                <div className="flex justify-between text-xs font-normal">
                    {HAM_MENU_BUTTONS.map((btn, index) => (
                        <button
                            className={clsx(
                                'pt-3 border-t-3',
                                active === index ? 'border-t-socal-light-blue font-bold' : 'border-t-transparent'
                            )}
                            key={index}
                            onClick={() => setActive(index)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col text-xl">
                    <p className="text-black font-bold border-b border-b-socal-light-grey py-3">
                        SoCalGas Home
                    </p>
                    <div className="flex flex-col">
                        {DROPDOWN_ITEMS.map((btn, index) => {
                            return (
                                <button
                                    className="font-light w-full border-b border-b-socal-light-grey text-start py-3"
                                    key={index}
                                >
                                    {btn}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col items-start text-xl">
                    <button>Contact Us</button>
                    <button className="mt-5">About SoCalGas</button>
                </div>
            </div>
        </div>
    );
};

export default HamMenu;