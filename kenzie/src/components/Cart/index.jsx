import React from 'react'
import CartCard from '../CartCard'
import CartTotal from '../CartTotal'
import EmptyCart from '../EmptyCart/EmptyCart'
import { StyledCart } from './style'


const Cart = ({ cartList, product, removeProductFromCart, removeAllProducts }) => {
  return (
    <StyledCart>
        <div className='cartTitle'>
            <h2>Carrinho de compras</h2>
        </div>
        <div className='cartCardContainer'>
          {cartList.length === 0 ? (<EmptyCart/>) : ''}
            
            <ul>
              {
                cartList.map(item => 
                  <CartCard key={item.id} item={item} removeProductFromCart={removeProductFromCart} product={product} removeAllProducts={removeAllProducts} />
                )
              }
            </ul>
        </div>
              {cartList.length > 0 ? (<CartTotal cartList={cartList} product={product} removeAllProducts={removeAllProducts} />) : '' }

    </StyledCart>
  )
}

export default Cart