import React, { useContext } from 'react'
import { TechContext } from '../../../../context/TechContext'
import { UserContext } from '../../../../context/UserContext'
import { Card } from './style'
import {FaTrashAlt} from 'react-icons/fa'
import Empty from '../EmptyCard'

const Cards = () => {
    
    const { userTechs } = useContext(UserContext)
    const { deleteTech } = useContext(TechContext)    

    return (
        <>{userTechs.length > 0 ? (
        userTechs.map(tech => 
        <Card>
            <h3>{tech.title}</h3>
            <div>
            <p>{tech.status}</p>
            <button onClick={() => deleteTech(tech.id)}><FaTrashAlt/></button>
            </div>
        </Card>
    )):(
        <Empty/>
    )}    
    </>
    )
}

export default Cards