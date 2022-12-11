import React from 'react'
import '../App.css';
import { Link } from "react-scroll";
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
                                <span className='highlighted-text'><b>Sofia Sá</b></span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                <h1>
                                    Formadora / Consultora Pedagógica
                                </h1>
                            </span>
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
                            <b>Contact me!</b>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Profile;