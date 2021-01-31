import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link exact to='/' className="navbar-brand">Home</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/about' className="nav-link">About</Link>
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar