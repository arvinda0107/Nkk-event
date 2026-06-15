import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      image: "services/Birthday.jpeg",
      title: "Birthday Decoration",
      description: "Creative balloon decorations and themed birthday setups.",
      price: "Starting ₹4,999",
    },
    {
      id: 2,
      image: "services/Wedding.jpeg",
      title: "Wedding Decoration",
      description: "Elegant wedding stage and venue decoration services.",
      price: "Starting ₹14,999",
    },
    {
      id: 3,
      image: "services/baby.jpeg",
      title: "Baby Shower",
      description: "Beautiful baby shower themes and customized decorations.",
      price: "Starting ₹6,999",
    },
    {
      id: 4,
      image: "services/corporate.jpeg",
      title: "Corporate Events",
      description: "Professional event planning for business meetings and launches.",
      price: "Starting ₹9,999",
    },
    {
      id: 5,
      image: "services/engagement.jpeg",
      title: "Engagement Ceremony",
      description: "Stylish engagement decorations for your special day.",
      price: "Starting ₹7,999",
    },
    {
      id: 6,
      image: "services/anniversary.jpeg",
      title: "Anniversary Celebration",
      description: "Romantic anniversary decorations and party arrangements.",
      price: "Starting ₹5,999",
    },
   
  ];

  return (
    <>
      <Navbar />

      <section className="services-page">
        <div className="services-banner">
          <h1>Our Event Services</h1>
          <p>Making Every Celebration Memorable</p>
        </div>

        <div className="services-container">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;