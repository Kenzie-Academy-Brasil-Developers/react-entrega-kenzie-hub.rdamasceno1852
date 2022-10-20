import { Container, HeaderContainer } from './style'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../Button'
import { useContext } from 'react'
import List from './List'
import { UserContext } from '../../context/UserContext'
import Cards from './List/Cards'
import Empty from './List/EmptyCard'
import { TechContext } from '../../context/TechContext'

const TechsContainer = ({variant, }) => {

  const { openModal } = useContext(TechContext)
  const { user } = useContext(UserContext)

  return (
    <Container>
        <HeaderContainer>
          <h3>Tecnologias</h3>
          <Button variant={'AddButton'} onClick={openModal}>
          <AiOutlinePlus/>
          </Button>
        </HeaderContainer>
        <List>
          {user.techs.length > 0? (
            <Cards/>
          ) : (
            <Empty/>
          )}
        </List>
    </Container>
  )
}

export default TechsContainer