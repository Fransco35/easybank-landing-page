import React from "react";
import EasyLogo from "../images/logo.svg";
import IconFacebook from "../images/icon-facebook.svg";
import IconYoutube from "../images/icon-youtube.svg";
import IconPinterest from "../images/icon-pinterest.svg";
import IconTwitter from "../images/icon-twitter.svg";
import IconInstagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold md:items-center">
            <img src={EasyLogo} alt="company_logo" />
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <img
                src={IconFacebook}
                alt="icon-facebook"
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img
                src={IconYoutube}
                alt="icon-youtube"
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={IconTwitter}
                alt="icon-twitter"
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a href="#" aria-label="Pinterest">
              <img
                src={IconPinterest}
                alt="icon-pinterest"
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                className="w-full h-full hover:opacity-80 transition-opacity duration-300"
                src={IconInstagram}
                alt="icon-instagram"
              />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-limeGreen">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-limeGreen">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-limeGreen">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-limeGreen">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-limeGreen">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-limeGreen">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Request Invite Button */}
          <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300">
            Request Invite
          </button>
          {/* Footer Rights */}
          <p className="text-sm text-gray-400">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
