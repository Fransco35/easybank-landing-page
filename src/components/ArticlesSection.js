import React from "react";
import ImageCurrency from "../images/image-currency.jpg";
import ImageConfetti from "../images/image-confetti.jpg";
import ImagePlane from "../images/image-plane.jpg";
import ImageRestaurant from "../images/image-restaurant.jpg";

function ArticlesSection() {
  const articles = [
    {
      id: 1,
      image: ImageCurrency,
      author: "John Doe",
      title: "Understanding React Components",
      description:
        "Dive into the basics of React components and learn how to create reusable UI blocks for your applications.",
    },
    {
      id: 2,
      image: ImageConfetti,
      author: "Jane Smith",
      title: "Mastering Tailwind CSS",
      description:
        "Discover how to use Tailwind CSS to design responsive and modern web applications efficiently.",
    },
    {
      id: 3,
      image: ImagePlane,
      author: "Alex Johnson",
      title: "JavaScript ES6 Features You Should Know",
      description:
        "Explore the must-know features of JavaScript ES6 that can simplify your coding experience.",
    },
    {
      id: 4,
      image: ImageRestaurant,
      author: "Emily Davis",
      title: "A Beginner’s Guide to Web Development",
      description:
        "Start your web development journey with this comprehensive guide covering all the essentials.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Latest Articles
        </h2>
      </div>

      {/* Article Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />

            {/* Article Content */}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">By {article.author}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-limeGreen">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
