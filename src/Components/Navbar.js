import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {

    const moveToDown = ()=>{
        window.scrollTo (0, document.body.scrollHeight);
    }
    const moveToTop = ()=>{
        window.scrollTo (0,0);
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-pills" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home" onClick={moveToTop}>HEALTH SENSE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item mx-3">
                                <Link className="nav-Link" aria-current="page" to="/home" onClick={moveToTop}>Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                            <Link className="nav-Link" aria-current="page" to="/medicines" onClick={moveToTop}>Medicines</Link>
                            </li>
                            <li className="nav-item mx-3">Lab Test</li>
                            <li className="nav-item mx-3">Chat Bot</li>
                            <li className="nav-item mx-3">Prescription</li>
                            <li className="nav-item mx-3">About Us</li>
                            <li className="nav-item mx-3" onClick={moveToDown}>Contact Us</li>
                            <li className="nav-item mx-3"> 
                            <Link className="nav-Link active btn btn-active" aria-current="page" to="/login">Log In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
