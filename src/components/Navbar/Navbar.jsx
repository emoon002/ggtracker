import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
        <Link to="/ggtracker" className="fs-1 fw-bold ubuntu navbar-brand p-3">Games Giveaway <span className="text-warning">Tracker</span></Link>
    </nav>
  )
}

export default Navbar