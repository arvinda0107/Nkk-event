import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    { id: 1, image: "images/image1.jpeg", title: "Birthday Event" },
    { id: 2, image: "/images/wedding.jpeg", title: "Wedding Event" },
    { id: 3, image: "/images/baby.jpeg", title: "Baby Shower" },
    { id: 4, image: "/images/corporate.jpeg", title: "Corporate Event" },
    { id: 5, image: "/images/engagement.jpeg", title: "Engagement" },
    { id: 6, image: "/images/anniversary.jpeg", title: "Anniversary" },
    { id: 7, image: "/images/anniversary.jpeg", title: "Anniversary" },
    { id: 8, image: "/images/anniversary.jpeg", title: "Anniversary" },
    { id: 9, image: "/images/anniversary.jpeg", title: "Anniversary" },
    { id: 10, image: "/images/anniversary.jpeg", title: "Anniversary" },
  ];

  return (
    <>
      <Navbar />

      <section className="gallery-page">
        <h1>Our Gallery</h1>
        <p>Explore our beautifu l event decorations</p>

        <div className="gallery-container">
          {galleryImages.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;