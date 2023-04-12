import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://www.linkedin.com/in/haillander-viana-568a8b63/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/Haillander" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                        <a href="" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaInstagram />
                            </li>
                        </a>
                        <a href="" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaTwitter />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;
