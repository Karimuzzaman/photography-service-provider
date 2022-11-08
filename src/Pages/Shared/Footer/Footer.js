import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-5 mb-5">
            <div>
                <span className="footer-title">Services</span>
                <Link>Wild Photography  </Link>
                <Link>Weeding Ceremony</Link>
                <Link>Sports Photography</Link>
                <Link>Journalism Photography</Link>

            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link>About us</Link>
                <Link>Equipments</Link>
                <Link>Honesty</Link>
                <Link>Loyalty</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link>Terms of use</Link>
                <Link>Privacy policy</Link>
                <Link>2022 All Rights Reserved</Link>
            </div>
        </footer>
    );
};

export default Footer;