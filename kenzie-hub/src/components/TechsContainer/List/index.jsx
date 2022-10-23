// import { useContext } from 'react'
// import { UserContext } from '../../../context/UserContext'
import Cards from './Cards'
// import Empty from './EmptyCard'
import { CardsList } from './style'


const List = () => {
// const {user} = useContext(UserContext)

  return (
    <CardsList>
        <Cards/>
    </CardsList>
    )
}

export default List