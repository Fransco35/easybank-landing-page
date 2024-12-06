/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from "./logo.svg";
import "./App.css";

// eslint-disable-next-line no-unused-expressions

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyUs from "./components/WhyUs";
import ArticlesSection from "./components/ArticlesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyUs />
      <ArticlesSection />
      <Footer />
    </div>
  );
}

export default App;
