import React from 'react'

const Button = ({className,name,type,onClick}) => {
  return (
    <button onClick={onClick} type={type} className={className}>{name}</button>
  )
}

export default Button