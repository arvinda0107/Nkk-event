import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Make Every Celebration
          <span> Unforgettable</span>
        </h1>

        <p>
          Birthday • Wedding • Baby Shower • Anniversary • Corporate Events
        </p>

        <button onClick={() => navigate("/services")}>
          Explore Events
        </button>
      </div>
    </section>
  );
}

export default Hero;