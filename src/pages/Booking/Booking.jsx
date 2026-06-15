import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Booking.css";

function Booking() {
  return (
    <>
      <Navbar />

      <section className="booking-banner">
        <h1>Book Your Event</h1>
        <p>Fill in the details and we'll make your celebration memorable.</p>
      </section>

      <section className="booking-container">

        <form className="booking-form">

          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="tel" placeholder="Phone Number" required />

          <select required>
            <option>Select Event Type</option>
            <option>Birthday Decoration</option>
            <option>Wedding Decoration</option>
            <option>Baby Shower</option>
            <option>Corporate Event</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>

          <input type="date" required />

          <input type="text" placeholder="Event Location" required />

          <textarea
            rows="5"
            placeholder="Additional Requirements"
          ></textarea>

          <button type="submit">Book Now</button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default Booking;