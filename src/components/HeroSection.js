import React from "react";
import ImageMockup from "../images/image-mockups.png";

function HeroSection() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center px-5 lg:px-16 lg:justify-between space-y-10 lg:space-y-5 lg:space-x-15">
        {/* Right Image */}
        <div className="flex-1">
          <img
            src={ImageMockup}
            alt="Hero"
            className="w-full mx-auto lg:mx-0"
          />
        </div>

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Big Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
            Next generation digital banking
          </h1>
          {/* Subheading */}
          <p className="text-gray-600 text-lg lg:text-xl">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          {/* Button */}
          <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-white py-3 px-8 rounded-lg text-lg transition text-white hover:opacity-80 transition-opacity duration-300">
            Request Invite
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
