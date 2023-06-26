import React from 'react'
import '../AboutCredit.css'
export default function Credit(props) {
    return (
        <div className="our-team">
            <div className="picture">
                <img alt={props.name}
                    className="img-fluid"
                    src={props.image}
                />
            </div>
            <div className="team-content">
                <h3 className="name">{props.name}</h3>
            </div>
            <ul className="social">
                <li>
                    <a
                        href={props.linkedinUrl}
                        className="fa fa-linkedin"
                        aria-hidden="true"
                        target='_blank'
                        rel="noreferrer"
                    />
                </li>
                <li>
                    <a
                        href={props.githubUrl}
                        className="fa-brands fa-github"
                        aria-hidden="true"
                        target='_blank'
                        rel="noreferrer"
                    />
                </li>
                <li>
                    <a
                        href={props.instaUrl}
                        className="fa-brands fa-instagram"
                        aria-hidden="true"
                        target='_blank'
                        rel="noreferrer"
                    />
                </li>
            </ul>
        </div>
    )
}
