//rfc  default react

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (                                                           //replace name  - shortcut key : cmd + F
        <nav className="navbar navbar-expand-lg navbar bg-primary">  
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Full Stack CRUD Application </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <Link className='btn btn-outline-light' to='/adduser' >AddUser</Link>
    </nav>
    
  )
}
