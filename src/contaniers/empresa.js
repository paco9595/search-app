import React from 'react'

export const Empresa = props => {
  return (
    <div>
      empresa {props.match.params.id}
    </div>
  )
}