import React from 'react'
import Credit from './Credit'
// import bg1 from '../media/About/about_bg.png'
export default function About() {
    return (
        <div className='about-container'>
            <div className="about-header">
                <div className="about-header-headings">
                    <span className='about-heading-1'>HEALTH-SENSE</span>
                    <span className='about-heading-2'>We Got Your Back</span>
                </div>
                <div className="about-header-headings">
                    <span className='about-heading-1'>ABOUT US</span>
                </div>
            </div>
            <div className="about-content">
                <span className='about-content-heading'>WHAT WE DO</span>
                <div className="about-content-cards">
                    <div className="card about-card" style={{ width: '25rem' }}>
                        <div className="card-body">
                            <h3 className="card-title">Comprehensive Healthcare Solutions:</h3>
                            <h5 className="card-subtitle mb-2 text-muted">Your One-Stop Destination for Complete Wellness</h5>
                            <p className="card-text">Experience a comprehensive healthcare solution at our company, where we bring together a medical store, advanced labs, and an innovative website. Our medical store offers a wide range of quality medications and healthcare products, while our labs provide accurate and timely results for various medical tests. </p>
                        </div>
                    </div>
                    <div className="card about-card" style={{ width: '25rem' }}>
                        <div className="card-body">
                            <h3 className="card-title">Advancing Healthcare Excellence:</h3>
                            <h5 className="card-subtitle mb-2 text-muted">Comprehensive Services for Better Health</h5>
                            <p className="card-text">Our company is dedicated to advancing healthcare excellence through a comprehensive range of services. With a vast network of over 120 labs, we provide accurate and reliable medical testing for prompt diagnosis and effective treatment. Our medical store offers a wide selection of high-quality medicines, ensuring access to essential healthcare products. We are committed to delivering exceptional customer service, expert guidance, and competitive pricing, empowering individuals to take control of their health and well-being.</p>
                        </div>
                    </div>
                    <div className="card about-card" style={{ width: '25rem' }}>
                        <div className="card-body">
                            <h3 className="card-title">Precision Diagnostics:</h3>
                            <h5 className="card-subtitle mb-2 text-muted">Uncovering Insights for Informed Healthcare Decisions</h5>
                            <p className="card-text">Our company is at the forefront of precision diagnostics, offering a comprehensive range of lab tests to uncover valuable insights for informed healthcare decisions. With a commitment to accuracy and efficiency, our state-of-the-art labs utilize cutting-edge technology and a skilled team of professionals to deliver precise and reliable test results. Whether it's routine screenings, specialized diagnostics, or advanced genetic testing, we strive to provide actionable information that empowers individuals and healthcare providers to make well-informed decisions regarding treatment, prevention, and overall health management.</p>
                        </div>
                    </div>
                </div>
                <span className='about-content-heading'>Website Owners:</span>
                <div className="owners-container">
                        <Credit name='Ansh Sharma' linkedinUrl = 'https://www.linkedin.com/in/ansh-sharma-/' instaUrl = 'https://www.instagram.com/anshh_sharma/' githubUrl = 'https://github.com/AnshhSharma' image = 'https://avatars.githubusercontent.com/u/84542011?v=4'/>
                        <Credit name='Yash Goyal'/>
                        <Credit name='Sagar Tarachandani'/>
                </div>
            </div>
        </div>
    )
}
