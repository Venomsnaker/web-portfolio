import React, { useEffect } from 'react';
import avatar from '../assets/images/avatar.png'
import '../layouts/Home.css'

const name = 'Skewed Contour'
const greeting = "Hi mate, welcome to my website! Let's get started!"

const HandleHireMe = () => {
    window.location.href = 'https://www.linkedin.com/';
}


const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className='home-group'>
            <img className='home-avatar' src={avatar} alt="Avatar" />
            <h1 className='home-name'> {name} </h1>
            <div className='home-icons'>  </div>
            <button className='home-button-hire' onClick={HandleHireMe}> Hire Me </button>
            <p className='home-greet'> {greeting} </p>
        </div>
    );
};

export default Home;