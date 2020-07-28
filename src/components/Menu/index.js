import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Urioflix Logo" />            
            </Link>
            <Button as={Link} className="ButtonLink" to="/register/video">
                New Video
            </Button>
        </nav>
    )
}

export default Menu;