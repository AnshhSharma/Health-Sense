import React from 'react'

export default function Footer() {
    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        document.getElementById('feedbackName').value = '';
        document.getElementById('feedbackEmail').value = '';
        document.getElementById('feedbackText').value = '';
        alert("Thanks for the feedback. Your opinion matters!")
    }
    return (
        <div className="footer">
            <div className=" mt-5">
                <footer
                    className="text-white text-center text-lg-start"
                    style={{ backgroundColor: "#23242a" }}
                >
                    {/* Grid container */}
                    <div className="container p-4">
                        {/*Grid row*/}
                        <div className="row mt-4">
                            {/*Grid column*/}
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4" style={{ textAlign: 'center' }}>About company</h5>
                                <p>
                                    Your trusted medical store and clinic, providing affordable medicines, lab tests, and prescription services. Our knowledgeable team offers personalized care, ensuring you have access to quality healthcare.
                                </p>
                                <p>
                                    Conveniently read your prescriptions with us. Experience convenience, affordability, and expertise for a healthier life.
                                </p>
                                <div className="mt-4">
                                    {/* Facebook */}
                                    <a href = "/" type="button" className="btn btn-floating btn-warning btn-md mx-2">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    {/* Dribbble */}
                                    <a href = "/" type="button" className="btn btn-floating btn-warning btn-md mx-2">
                                        <i className="fab fa-dribbble" />
                                    </a>
                                    {/* Twitter */}
                                    <a href = "/" type="button" className="btn btn-floating btn-warning btn-md mx-2">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    {/* Google + */}
                                    <a href = "/" type="button" className="btn btn-floating btn-warning btn-md mx-2">
                                        <i className="fab fa-google-plus-g" />
                                    </a>
                                    {/* Linkedin */}
                                </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4" style={{ textAlign: 'center' }}>Opening hours</h5>
                                <table className="table table-dark text-center text-white ">
                                    <tbody className="font-weight-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 10pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                                    <li className="mb-3">
                                        <span className="fa-li">
                                            <i className="fas fa-home mx-2" />
                                        </span>
                                        <span className="ms-2">New York, NY 10012, US</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li">
                                            <i className="fas fa-envelope mx-2" />
                                        </span>
                                        <span className="ms-2">info@example.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li">
                                            <i className="fas fa-phone mx-2" />
                                        </span>
                                        <span className="ms-2">+ 91 234 567 8890</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li">
                                            <i className="fas fa-print mx-2" />
                                        </span>
                                        <span className="ms-2">+ 91 234 567 8990</span>
                                    </li>
                                </ul>
                            </div>
                            {/*Grid column*/}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                {/* ------------------------------------- */}
                                <h5 className="text-uppercase mb-4" style={{ textAlign: 'center' }}>Send Us Your Thoughts</h5>
                                <form onSubmit={handleFeedbackSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name</label>
                                        <input type="text" className="form-control" id="feedbackName" placeholder="Please Enter Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Email address</label>
                                        <input type="email" className="form-control" id="feedbackEmail" placeholder="name@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Feedback</label>
                                        <textarea className="form-control" id="feedbackText" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block my-2" style={{width: '100%'}}>
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>
                        {/*Grid row*/}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2023 Copyright | HEALTH SENSE | Designed By: Ansh Sharma, Sagar Tarachandani, Yash Goyal
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
            {/* End of .container */}
        </div>
    )
}
