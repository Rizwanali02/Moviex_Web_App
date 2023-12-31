import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  

  return (

    <nav className="navBarStyle flex-wrap " >
      <div className="navBar">
        <Link to={`/`} className="navbar-brand "><img src="image/movix-logo.svg" alt="Logo" className='logo-img' /> </Link>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-info" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}


