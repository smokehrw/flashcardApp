import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <Link className="app-name" to="/">
                    <h1 className="app-name">FLASH.CD</h1>
                </Link>
                <a href="/login">Sign In</a>
                <a href="/login">Explore</a>
                <a href="/login">Settings</a>
                <a href="/login">Account</a>
            </div>
        </header>
    )
}

export default Navbar