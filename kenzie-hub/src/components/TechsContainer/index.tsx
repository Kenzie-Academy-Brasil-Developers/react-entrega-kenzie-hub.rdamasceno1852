import { Container, HeaderContainer } from './style'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../Button'
import { useContext } from 'react'
import List from './List'
import { TechContext } from '../../context/TechContext'

const TechsContainer = () => {

  const { openModal } = useContext(TechContext)

  return (
    <Container>
        <HeaderContainer>
          <h3>Tecnologias</h3>
          <Button variant={'AddButton'} onClick={openModal}>
          <AiOutlinePlus/>
          </Button>
        </HeaderContainer>
        <List/>          
    </Container>
  )
}

export default TechsContainer