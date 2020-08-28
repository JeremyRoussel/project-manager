import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/" >Home Page</Link> | 
      <Link to="/projects" > Projects</Link>
    </>
  )
}

export default Header
