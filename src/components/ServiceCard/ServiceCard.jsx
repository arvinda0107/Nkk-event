import "./ServiceCard.css";

function ServiceCard({ image, title, price }) {
  return (
    <div className="service-card">

      <img src={image} alt={title} />

      <div className="service-content">
        <h2>{title}</h2>
        <p>{price}</p>

        <button>Book Now</button>
      </div>

    </div>
  );
}

export default ServiceCard;