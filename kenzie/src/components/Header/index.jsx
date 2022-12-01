import React from 'react'
import logo from './../../assets/img/burgerKenzieLogo.png'
import { StyledHeader } from './style'
import { StyledDefaultButton } from './../../styles/buttons'

const Header = ({ setFilter, filter }) => {
   
  return (
    <StyledHeader>
        <img src={logo} alt="LOGO" />
        <div>
        <input value={filter} type="text" placeholder='Pesquisar' onChange={(event) => setFilter(event.target.value)} />
        <StyledDefaultButton type='submit'>Pesquisar</StyledDefaultButton>
        </div>
    </StyledHeader>
  )
}

export default Header