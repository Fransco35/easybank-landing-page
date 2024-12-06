import React from "react";
import {
  FaRegLightbulb,
  FaHandsHelping,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

function WhyUs() {
  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      {/* Heading and Subheading */}
      <div className="max-w-6xl mx-auto mb-12 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Why Choose Easybank?
        </h2>
        <p className="text-gray-600 text-lg text-center md:text-left">
          We leverage Open Banking to turn your bank account into financial hub.
        </p>
        <p className="text-gray-600 text-lg text-center md:text-left">
          Control your finances like never before
        </p>
      </div>

      {/* Boxed Items */}
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Item 1 */}
        <div className="flex flex-col items-center md:items-start bg-white shadow-md rounded-lg p-6 text-center md:text-left">
          <FaRegLightbulb className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
            Online banking
          </h3>
          <p className="text-gray-600 text-center md:text-left">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center md:items-start bg-white shadow-md rounded-lg p-6 text-center md:text-left">
          <FaHandsHelping className="text-green-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
            Simple Budgeting
          </h3>
          <p className="text-gray-600 text-center md:text-left">
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center md:items-start bg-white shadow-md rounded-lg p-6 text-center md:text-left">
          <FaRocket className="text-purple-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
            Fast Onboarding
          </h3>
          <p className="text-gray-600 text-center md:text-left">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center md:items-start bg-white shadow-md rounded-lg p-6 text-center md:text-left">
          <FaShieldAlt className="text-red-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
            Open API
          </h3>
          <p className="text-gray-600 text-center md:text-left">
            Manage your savings, investments, pension and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
