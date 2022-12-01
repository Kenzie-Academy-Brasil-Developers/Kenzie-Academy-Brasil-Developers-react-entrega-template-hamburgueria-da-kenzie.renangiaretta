import React from 'react'
import { StyledCartCard } from './style'

const CartCard = ( { item, removeProductFromCart, }) => {
  return (
                 <StyledCartCard>
                    <div className='cardLeftContainer'>
                      <img src={item.img} alt="" />
                      <div className='textsContainer'>
                          <h2 className='cardTitle'>{item.name}</h2>
                          <h3 className='cardCategory'>{item.category}</h3>
                      </div>
                    </div>
                    <button onClick={() => removeProductFromCart(item.id)}>Remover</button>
                </StyledCartCard>
  )
}

export default CartCard