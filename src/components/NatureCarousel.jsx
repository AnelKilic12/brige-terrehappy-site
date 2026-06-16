import { useEffect, useState } from "react";

const images = [
  "/images/hero.jpg",
  "/images/hero-2.jpg",
  "/images/nature3.jpg",
  "/images/nature4.jpg"
];

export default function NatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nature-carousel">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="Apprendre c'est s'engager"
          className={index === currentIndex ? "active" : ""}
        />
      ))}

      <div className="nature-carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Afficher l’image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}