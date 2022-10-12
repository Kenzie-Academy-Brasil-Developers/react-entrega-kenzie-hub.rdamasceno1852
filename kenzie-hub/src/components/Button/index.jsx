import { Buttons} from './style'


const Button = ({ variant, type, onClick, disabled, children }) => {
  return (
        <Buttons variant={variant} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </Buttons>
  )
}

export default Button