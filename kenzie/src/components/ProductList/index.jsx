import React, { useEffect } from 'react'
import { api } from '../../services/api'
import ProductCard from '../ProductCard'
import { StyledProductList } from './style'

const ProductList = ({ setProduct, addProductToCart, filteredProducts }) => {

    useEffect(() => {
        async function getProducts () {
            try {
                const response = await api.get('')

                setProduct(response.data)


            } catch (error) {
                console.log(error)
            }

        }
        getProducts()
    }, [])
  return (
    <StyledProductList>
            {
                filteredProducts.map(item => 
                    <ProductCard key={item.id} item={item} addProductToCart={addProductToCart} />
                )
            }
    </StyledProductList>
  )
}

export default ProductList