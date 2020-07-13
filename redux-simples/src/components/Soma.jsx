import React from 'react'

import Card from './Card'

export default props => {
  const min = props.min
  const max = props.max

  return (
    <Card title="Soma dos Números" blue>

    <div>

      <span>
        <span>Resultado: </span>
        <strong>{min+max}</strong>
      </span>


    </div>



    </Card>


  )
}