import { Container, HeaderContainer } from './style'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../Button'

const TechsContainer = ({variant, onClick}) => {
  return (
    <Container>
        <HeaderContainer>
          <h3>Tecnologias</h3>
          <Button variant={'AddButton'} onClick={onClick}>
          <AiOutlinePlus/>
          </Button>
        </HeaderContainer>

        <div>
            
        </div>
    </Container>
  )
}

export default TechsContainer