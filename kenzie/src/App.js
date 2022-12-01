import { useState } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Global from './styles/global';
import { StyledMain } from './styles/main'
import { StyledApp } from './style';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartList, setCartList] = useState([])
  const [product, setProduct] = useState([])
  const [filter, setFilter] = useState('')
  const lowerFilter = filter.toLowerCase()
  const filteredProducts = product.filter((item) => item.name.toLowerCase().includes(lowerFilter))


  function addProductToCart (product) {
    if(!cartList.some(productOnCart => productOnCart.id === product.id)){
      setCartList([...cartList, product])
    } else {
        toast.error('Produto já adicionado ao carrinho!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }
  }

  function removeProductFromCart (productId) {
    const newList = cartList.filter((product) => product.id !== productId)
    setCartList(newList)
  }

  function removeAllProducts () {
    const clearCart = []
    setCartList(clearCart)
  }

  return (
    
    <StyledApp>
      
      <>
      <Global />
      <Header setFilter={setFilter} filter={filter} cartList={cartList} />
      <StyledMain>
        <ProductList product={product}setProduct={setProduct} addProductToCart={addProductToCart} filteredProducts={filteredProducts} />
        <Cart product={product} cartList={cartList} removeProductFromCart={removeProductFromCart} removeAllProducts={removeAllProducts} />
      </StyledMain>
      </>

    <ToastContainer/>
    </StyledApp>
    
  );
}

export default App;
