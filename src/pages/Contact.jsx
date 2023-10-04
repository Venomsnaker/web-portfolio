import React, { useEffect } from 'react';
import * as FaIcons from "react-icons/fa";
import '../layouts/Contact.css'

const guide = "You can reach me through the following channels:"
const guide_personal = "If you are interested in working with me, please use this email address."
const email_personal = "qhuy.bui.contact@gmail.com"


const Contact = () => {
    useEffect(() => {
        document.title = 'Contact';
    }, []);

    return (
        <div className='contact-parent'>
            <h1 className='contact-guide'> {guide} </h1>
            <p className='contact-email-txt'> {guide_personal} </p>
            <p className='contact-email'> {email_personal} </p>
            <div className='contact-icons'>
                <a href="https://github.com/"><FaIcons.FaGithubSquare /></a>
                <a href="https://www.linkedin.com/"><FaIcons.FaLinkedin /></a>
                <a href="https://www.youtube.com/"><FaIcons.FaYoutubeSquare /></a>
            </div>
        </div>

    );
};

export default Contact;