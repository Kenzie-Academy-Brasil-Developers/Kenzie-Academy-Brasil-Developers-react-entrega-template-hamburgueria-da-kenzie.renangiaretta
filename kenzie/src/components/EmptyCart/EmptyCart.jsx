import React from 'react'
import { StyledEmptyCart } from './style'

const EmptyCart = () => {
  return (
    <StyledEmptyCart>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione Itens</p>
    </StyledEmptyCart>
  )
}

export default EmptyCart