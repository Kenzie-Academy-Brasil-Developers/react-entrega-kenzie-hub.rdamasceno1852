import React, { Children } from 'react'
import { Card } from './style'

const Cards = (techName, level) => {
  return (
    <>
        <Card techName={techName} level={level}>
            {Children}
        </Card>
    </>
    )
}

export default Cards