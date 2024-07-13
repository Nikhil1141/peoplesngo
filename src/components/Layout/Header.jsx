import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/header.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink to={"/"} className="navbar-brand">People's NGO</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/blog"} className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/event"} className="nav-link">Event</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contactus"} className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default memo(Header)
