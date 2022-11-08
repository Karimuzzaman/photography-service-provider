import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-5 mb-5">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Wild Photography</a>
                <a className="link link-hover">Weeding Ceremony</a>
                <a className="link link-hover">Sports Photography</a>
                <a className="link link-hover">Journalism Photography</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Equipments</a>
                <a className="link link-hover">Honest</a>
                <a className="link link-hover">Loyalty</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">2022 All Rights Reserved</a>
            </div>
        </footer>
    );
};

export default Footer;