import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import { useSelector } from 'react-redux'
const Header = () => {
  const basketCount = useSelector((state) => state.basket.count);
  return (
    <header>
          <Link to="/">HomeRedux</Link>
          <Link to="/HomeQuery">HomeQuery</Link>
          <Link to="/Basket">Basket <sup>{basketCount}</sup></Link>
          <Link to="/Favorite">Favorites</Link>
          <Link to="/Add">Add</Link>
        
    </header>
  )
}

export default Header
