import React from 'react'
import { Link } from 'react-router-dom'
//importando o css

import './Navbar.css'

//5-importamos o link, pq não queremos colocar nas li o a(isso faria um recarregamento da página) e na propriedade to={}, dentro das chaves é passada a rota que queremos dar
const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>

        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/new`} className='new-btn'>New Post</Link>
            </li>

            <li>
                <Link to={`/admin`} >Gerenciar</Link>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar
