import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand"> 
  <Link to='/'>
    <h4 className='display-5'>Property34 </h4>
    </Link>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">For Sale</a>
        <a className="nav-link" href="/">For Rent</a>
        <a className="nav-link" href="/">For Commercial</a>
        <a className="nav-link" href="/">Gate Community</a>
      </div>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar