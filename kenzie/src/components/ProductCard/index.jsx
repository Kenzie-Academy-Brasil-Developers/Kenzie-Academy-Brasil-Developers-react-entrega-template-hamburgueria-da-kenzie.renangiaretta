import React from 'react'
import { StyledDefaultButton } from '../../styles/buttons'
import { StyledProductCard } from './style'
import { Spring, animated } from 'react-spring'

const ProductCard = ( { item, addProductToCart } ) => {

  return (
    <Spring
        from={{opacity: 0, color: 'red'}}
        to={{opacity: 1, color: 'blue'}}
    >
      {styles => (
            <animated.div style={styles}>
                <StyledProductCard>
                  <img src={item.img} alt="IMAGEM" />
                  <div className='downHalfContainer'>
                    <div className='textsContainer'>
                      <h2>{item.name}</h2>
                      <h3>{item.category}</h3>
                      <span>{`R$ ${item.price.toFixed(2)}`}</span>
                    </div>
                      <StyledDefaultButton onClick={() => { addProductToCart(item) }} >Adicionar</StyledDefaultButton>
                  </div>
           </StyledProductCard>
            </animated.div>
        )}
    

    </Spring>
  )
}

export default ProductCard