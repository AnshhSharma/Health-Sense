import React, { useState } from 'react'
import doctor from '../media/Home/doc1.png'
import Reviews from './Reviews';
import { useAuth0 } from "@auth0/auth0-react";
import {
    Link
} from "react-router-dom";


export default function Home() {
    const {loginWithRedirect, user, isAuthenticated } = useAuth0();
    document.title = 'Health Sense - HOME';
    return (
        // <div className='container d-flex flex-column'>
        //     <img style={{ width: "100%", height: "50vh" }} src={homeBG1} />            
        //     <Link className="navbar-brand" to="/medicine"><img className='discount' style={{ width: "100%", height: "50vh" }} src={discount}/></Link>

        // </div>
        <>
            <img src={doctor} className='docBgImg' />
            <div className="jumbotron d-flex justify-content-around flex-column top-1" >
                <h1 className="display-4">HEALTH SENSE</h1>
                <p className="lead">Your One-Stop Shop for Medicines, Lab Tests, and Prescription Services at Unbeatable Prices.</p>
                <hr className="my-4" />
                {isAuthenticated? <></>: <>
                    <p>Join us today by having an account with us.</p>
                    <p className="lead">
                        <button className="btn btn-primary btn-lg" role="button " onClick={() => loginWithRedirect()}>Sign Up</button>
                    </p>
                </>}
                
            </div>
            <div className='container'>
                <div className="services">
                    <div className="card-group">
                        <div className="card service">
                            <i className="fa-solid fa-user-doctor fa-xl" />
                            <div className="card-body">
                                <h5 className="card-title">Expert's Advice</h5>
                                <p className="card-text">
                                    We prioritize the well-being and satisfaction of our patients. Our dedicated team focuses on delivering personalized care, actively listening to your concerns, and tailoring our services to meet your unique requirements, ensuring a positive and supportive healthcare experience.
                                </p>
                            </div>
                        </div>
                        <div className="card service">
                            <i className="fa-regular fa-file-lines fa-xl" />
                            <div className="card-body">
                                <h5 className="card-title">Faster Test Results</h5>
                                <p className="card-text">
                                    Our advanced laboratory facility is equipped with cutting-edge technology, enabling accurate and timely test results. From routine blood work to specialized diagnostics, our lab testing services provide crucial insights to aid in diagnosis, monitoring, and treatment.
                                </p>
                            </div>
                        </div>
                        <div className="card service">
                            <i className="fa-solid fa-lock fa-xl" />
                            <div className="card-body">
                                <h5 className="card-title">Confidentiality and Privacy</h5>
                                <p className="card-text">
                                    We understand the importance of confidentiality when it comes to healthcare. Our company upholds strict privacy standards to protect your sensitive information and maintains a secure environment where you can confidently share your medical history and prescriptions.
                                </p>
                            </div>
                        </div>
                        <div className="card service">
                            <i className="fa-solid fa-cubes-stacked fa-xl" />
                            <div className="card-body">
                                <h5 className="card-title">Extensive Medication Selection</h5>
                                <p className="card-text">
                                    Our medical store boasts a wide variety of medications, including prescription and over-the-counter options. We ensure that you have access to a comprehensive range of pharmaceutical products to meet your specific healthcare needs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <span className="badge badge-pill badge-light blinker">Current Offers</span>
                <div className="offers">
                    <div className="offer">
                        <Link className="navbar-brand" to="/medicines"><h2>20% off on all Medicines <i className="fa-solid fa-capsules"></i></h2></Link>

                    </div>
                    <hr />
                    <div className="offer">
                        <Link className="navbar-brand" to="/labtest"><h2>5% off on all Lab Tests <i className="fa-solid fa-syringe"></i></h2></Link>
                    </div>
                </div>
            </div>
            <Reviews />

        </>
    )
}
