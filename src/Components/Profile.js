import React from 'react'
import '../App.css';
import { Link } from "react-scroll";
import Typical from 'react-typical';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
            <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                {" "}
                                <span className='highlighted-text'>Sofia Sá</span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical 
                                    loop = {Infinity}
                                    steps = {[
                                        "Formadora",
                                        2000,
                                        "Consultora Pedagógica",
                                        2000
                                    ]}
                                    />
                                </h1>
                            </span>
                            {/* <span className='profile-role-tagline'>
                                    Isto é a tagline!
                            </span>*/}
                        </div>
                        <div className='colz'>
                            <div className='colz-icon'>
                                <a id="linkedInIcon" href='https://www.linkedin.com/in/sofia-s%C3%A1-15305b63/' target="_blank"  rel="noreferrer">
                                <LinkedInIcon fontSize="large"/>
                                </a>
                            </div>
                        </div>
                        <div className='profile-options'>
                        <Link
                            className="button-6" role="button" id="contactButton"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            Contact me!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Profile;