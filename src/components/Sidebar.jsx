import React, { useState } from 'react';
import icon from '../assets/images/icon.png'
import * as IoIcons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const credit = "@2023 Skewed Contour"

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <IoIcons.IoHomeSharp />
        },
        {
            path: "/about",
            name: "About",
            icon: <IoIcons.IoAccessibilitySharp />
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <IoIcons.IoCallSharp />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "15rem" : "3rem" }} className="sidebar">
                <div className="top_section">
                    <img style={{ display: isOpen ? "block" : "none" }} className='logo' src={icon} alt="logo" />
                    <div style={{ marginLeft: isOpen ? "2rem" : "0rem" }} className="bars">
                        <FaIcons.FaList onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <p className='credit' style={{ display: isOpen ? "block" : "none" }}> {credit} </p>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;