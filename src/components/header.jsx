import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <>
        <Link to="/">Home</Link>
        <Link to="/Product_list">All Products</Link>
     </>
  )
}

export default Header