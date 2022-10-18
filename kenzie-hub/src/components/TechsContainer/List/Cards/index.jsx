import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'
import { Card } from './style'

const Cards = () => {
    
    const {user} = useContext(UserContext)
    console.log(user);
  return (
    <>{user.map(tech => 
        <Card key={user.id}>
            <h3>{user.techs.title}</h3>
            <p>{user.techs.status}</p>
            <button>trash</button>
        </Card>
    )}
            
    </>
    )
}

export default Cards