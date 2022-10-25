import { ReactNode } from 'react';
import { Buttons} from './style'

interface iButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  variant?: string

}

const Button = ({ variant, type, onClick, disabled, children }: iButtonProps) => {
  return (
        <Buttons 
          variant={variant} 
          type={type} 
          onClick={onClick} 
          disabled={disabled}
        >
            {children}
        </Buttons>
  )
}

export default Button