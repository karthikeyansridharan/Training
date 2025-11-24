import type { ButtonProps } from '../../types';

const Button = ({ className, name, type = 'button', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={className}>{name}</button>
  )
}

export default Button