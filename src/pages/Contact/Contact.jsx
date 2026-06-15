import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>We're here to make your celebrations unforgettable.</p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Mysore, Karnataka, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>nkkevents@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>⏰ Working Hours</h3>
            <p>Monday - Sunday : 9:00 AM - 9:00 PM</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="tel" placeholder="Phone Number" />

            <textarea
              rows="5"
              placeholder="Tell us about your event..."
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;