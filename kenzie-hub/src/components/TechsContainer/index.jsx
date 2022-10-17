import React, { Children } from 'react'
import Button from '../Button'

const TechsContainer = ({onClick}) => {
  return (
    <div>
        <h3>{Children}</h3>

        <Button variant={'addBtn'} onClick={onClick}/>
        <div>
            
        </div>
    </div>
  )
}

export default TechsContainer