import React from 'react'
import lab1 from '../media/Lab/lab1.png'
import lab2 from '../media/Lab/lab2.png'
import lab3 from '../media/Lab/lab3.png'
import data from '../Labtest.json'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Test from './Test'
export default function LabTest() {

    return (
        <>
            <div className="lab-header" style={{ marginTop: '7.5vh' }}>
                <Carousel autoPlay={true} infiniteLoop={true} stopOnHover showStatus={false} showThumbs={false}>
                    <div>
                        <img src={lab1} />
                    </div>
                    <div>
                        <img src={lab2} />
                    </div>
                    <div>
                        <img src={lab3} />
                    </div>
                </Carousel>
            </div>
            <div className="services" style={{ margin: '5vh 25vw' }}>
                <div className="card-group">
                    <div className="card service">
                        <img src='https://images.apollo247.in/images/ic_prescriptiontest.png' style={{ width: '40px', height: '40px', margin: '20px auto' }} />

                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center' }}>Free Report Analyzer</h5>
                            <p className="card-text">
                                We take pride in offering complimentary report analysis services to individuals who have conducted tests at our labs. Our expert team carefully examines and interprets the test results, providing valuable insights and personalized recommendations. This service aims to empower our customers with a deeper understanding of their health status and guide them towards informed decisions for their well-being.
                            </p>
                        </div>
                    </div>
                    <div className="card service">
                        <img src='https://images.apollo247.in/images/ic_surface.png' style={{ width: '40px', height: '40px', margin: '20px auto' }} />

                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center' }}>5 Million Tests Annually</h5>
                            <p className="card-text">
                                We take pride in offering complimentary report analysis services to individuals who have conducted tests at our labs. Our expert team carefully examines and interprets the test results, providing valuable insights and personalized recommendations. This service aims to empower our customers with a deeper understanding of their health status and guide them towards informed decisions for their well-being.
                            </p>
                        </div>
                    </div>
                    <div className="card service">
                        <img src='https://images.apollo247.in/images/ic_laboratories.png' style={{ width: '40px', height: '40px', margin: '20px auto' }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center' }}>120+ laboratories</h5>
                            <p className="card-text">
                                With a network of 120+ state-of-the-art labs, we are dedicated to providing accessible and reliable diagnostic services. Our widespread presence enables convenient access to our advanced facilities, ensuring prompt and accurate testing across various locations. Trust in our extensive lab network for comprehensive healthcare solutions.
                            </p>
                        </div>
                    </div>
                    <div className="card service">
                        <img src='https://images.apollo247.in/images/ic_legacy.png' style={{ width: '40px', height: '40px', margin: '20px auto' }} />

                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center' }}>20 years of Legacy</h5>
                            <p className="card-text">
                                With a legacy spanning over 20 years, we have established ourselves as a trusted name in the industry. Our decades of experience reflect our expertise, commitment, and dedication to delivering high-quality diagnostic services. We take pride in our long-standing presence, serving the healthcare needs of our valued customers with excellence and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tests">
                <h3>TESTS</h3>
                <hr></hr>
                <div className="row my-3">
                    {data.labtest.map((element, index) => {
                        return <div className="col-md-4" key={index}>
                            <Test name={element.name} price={element.price} image={element.image} />
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}
