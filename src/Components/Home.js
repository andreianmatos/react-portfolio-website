import '../App.css';
import React from 'react';
import Footer from './Footer.js'
import Profile from './Profile.js'

function Home() {
    return(
        <div className='Home' id="Home">
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Home;