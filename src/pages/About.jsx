import React, { useEffect } from 'react';
import '../layouts/About.css'

const fields = 'College Student | Indie Developer'
const introduction = 'Greeting, mate!'
const education = "I'm currently majoring in artificial intelligence at Ho Chi Minh University of Science (HCMUS)."
const ai = "My strengths lie in general programming and learning languages."
const others = "My hobbies include indie game development and making random Youtube videos."
const bye = "Thank you for visiting! I hope we can collaborate in the future."


const About = () => {
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <div className='about-group'>
            <p className='about-fields'>{fields}</p>
            <p className='about-greetings'>{introduction}</p>
            <p>{education}</p>
            <p>{ai}</p>
            <p>{others}</p>
            <p className='about-greetings'>{bye}</p>
        </div>
    );
};

export default About;