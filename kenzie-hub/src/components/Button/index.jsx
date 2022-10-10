import { Buttons} from './style'


const Button = ({ variant, type, onClick, children }) => {
  return (
        <Buttons variant={variant} type={type} onClick={onClick}>
            {children}
        </Buttons>
  )
}

export default Button