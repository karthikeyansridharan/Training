import type { LogoProps } from '../../types';

const Logo = ({ src, className = '', onClick, alt = 'SoCal Logo' }: LogoProps) => {
  return <img src={src} alt={alt} onClick={onClick} className={className} />;
};

export default Logo;