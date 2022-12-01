import React from 'react'
import { StyledCartTotal } from './style'

const TotalCart = ( { cartList, removeAllProducts } ) => {
  const total = cartList.reduce((acc, { price } ) => acc + price, 0)
  return (
    <StyledCartTotal>
        <div className='textsContainer'>
            <h2 className='heading1'>Total</h2>
            <span>{`R$ ${total.toFixed(2)}`}</span>
        </div>
        <button onClick={() => removeAllProducts()} >Remover Todos</button>
    </StyledCartTotal>
  )
}

export default TotalCart