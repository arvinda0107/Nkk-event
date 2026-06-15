import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-banner">
        <h1>About NKK Events</h1>
        <p>Creating Unforgettable Moments with Passion & Creativity</p>
      </section>

      <section className="about-container">

        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            NKK Events is a professional event management company dedicated to
            creating memorable celebrations for every occasion. From birthday
            parties and weddings to baby showers and corporate events, we
            transform your ideas into beautiful experiences.
          </p>

          <p>
            Our experienced team focuses on creativity, quality, and customer
            satisfaction to ensure every event is unique and stress-free.
          </p>
        </div>

        <div className="about-image">
          <img src="/about/about.jpg" alt="About NKK Events" />
        </div>

      </section>

      <section className="why-choose">
        <h2>Why Choose Us?</h2>

        <div className="choose-container">

          <div className="choose-card">
            <h3>500+</h3>
            <p>Events Successfully Completed</p>
          </div>

          <div className="choose-card">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="choose-card">
            <h3>50+</h3>
            <p>Professional Team Members</p>
          </div>

          <div className="choose-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

        </div>
      </section>

      <section className="mission">

        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To create joyful and unforgettable celebrations through innovative
            event planning and exceptional service.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted and creative event management company,
            delivering happiness in every celebration.
          </p>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;