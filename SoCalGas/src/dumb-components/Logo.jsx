import React from 'react'

const Logo = ({src,className,onClick,alt='SoCal Logo'}) => {
  return <img src={src} alt={alt} onClick={onClick} className={className}/>;
}

export default Logo