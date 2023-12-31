import { React} from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar() {

    // Scrolling Mechanism
    const moveToDown = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }
    const moveToTop = () => {
        window.scrollTo(0, 0);
    }

    // Authentication using auth0
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
                            <li className="nav-item mx-3">
                                <Link className="nav-Link" aria-current="page" to="/labtest" onClick={moveToTop}>Lab Test</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-Link" aria-current="page" to="/chatbot" onClick={moveToTop}>Chat Bot</Link>

                            </li>
                            {/* <li className="nav-item mx-3">Prescription</li> */}
                            <li className="nav-item mx-3">
                                <Link className="nav-Link" aria-current="page" to="/about" onClick={moveToTop}>About Us</Link>
                            </li>
                            <li className="nav-item mx-3" onClick={moveToDown}>Contact Us</li>
                            <div style={{position: 'absolute', right: '25px'}}>

                            {!isAuthenticated ?
                                <button className="btn btn-primary mx-3"  onClick={() => loginWithRedirect()}>Log In</button>
                                :
                                <>
                                    <Link className="nav-Link my-2 my-sm-0" aria-current="page" to="/profile" onClick={moveToTop}><span>{user.name}</span><i className="fa-solid fa-user" style={{marginLeft: '5px'}}></i></Link>
                                    <button className="btn btn-primary mx-3 my-2 my-sm-0"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                </>
                            }
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
