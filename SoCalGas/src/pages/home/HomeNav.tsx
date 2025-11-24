import { useNavigate } from 'react-router';
import clsx from 'clsx';

import Logo from '../../components/common/Logo.tsx';
import { Services } from './Services.tsx';
import { useUser } from '../../context/UserContext.tsx';
import { NAV_BUTTONS } from '../../constants/homePageConstants';
import type { HomeNavProps, UserContextValue } from '../../types';

const HomeNav = ({ isMenuOpen, setIsMenuOpen }: HomeNavProps) => {
  const navigate = useNavigate();
  const user = useUser() as UserContextValue | undefined;

  const handleProfileClick = () => {
    navigate(`${user?.current ? '/myaccount/profile' : '/login'}`);
  };

  return (
    <div className="">
      <div
        className={clsx(
          `min-h-15 flex items-center justify-between px-4 py-2 md:px-5 text-sm font-mulish`,
          isMenuOpen ? 'bg-white' : ''
        )}
      >
        <Logo
          onClick={handleProfileClick}
          src={
            user?.current
              ? '/profile-image.jpg'
              : !isMenuOpen
                ? '/account-logo.png'
                : '/account-logo-active.png'
          }
          className="w-6 h-6 md:hidden rounded-full"
        />
        {!isMenuOpen && (
          <Logo src="/socal-logo.png" className="w-25 h-10 md:w-35 md:h-14" onClick={() => { }} />
        )}

        <div className="hidden md:w-full md:flex md:justify-end mr-10 md:gap-5 xl:gap-10">
          {NAV_BUTTONS.map((btn, index) => {
            return (
              <button className={`${btn.styles} font-bold`} key={index}>
                {btn.name}
              </button>
            );
          })}
          <Services />
        </div>

        <div className="flex items-center justify-between gap-4">
          <Logo
            src={!isMenuOpen ? '/search.png' : '/search-dark.png'}
            className="w-7 h-6"
            onClick={() => { }}
          />
          <Logo
            src={!isMenuOpen ? '/ham-menu.png' : '/crosshair.png'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-6 h-6 cursor-pointer md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNav;