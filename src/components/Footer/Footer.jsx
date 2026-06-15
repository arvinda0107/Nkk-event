import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>NKK Events</h2>
          <p>
            Creating unforgettable celebrations with elegant decorations,
            creative themes, and exceptional event planning.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Birthday Decoration</li>
            <li>Wedding Events</li>
            <li>Baby Shower</li>
            <li>Corporate Events</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Bangalore, Karnataka</p>
          <p>📞 +91 7483930350</p>
          <p>✉️ nkkevents@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 NKK Events. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;