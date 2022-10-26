import './Nav.css'
import React from 'react'
import NavItens from './NavItens'
import { Link } from 'react-router-dom'

export default props =>
<aside className='menu-area'>
    <nav className="menu">
        <NavItens href="/" icon="home" title="Início"/>
        <NavItens href="/users" icon="users" title="Usuários"/> 
    </nav>
</aside>