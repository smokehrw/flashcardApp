import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <Link className="app-name" to="/">
                    <h1 className="app-name">FLASH.CD</h1>
                </Link>
                <Link to="/login">Sign In</Link>
                <Link to="/">Explore</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/account">Account</Link>
            </div>
        </header>
    )
}

export default Navbar