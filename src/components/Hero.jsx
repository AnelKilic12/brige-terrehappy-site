import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";

const heroImages = [
  "/images/hero.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      <BurgerMenu />

      <div className="hero-slides">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-logo"><img src="/images/logo_spirale.png" alt="Logo Brige TerreHappy" /></div>
        


        <h1>Brige TerreHappy</h1>

        <p className="hero-main-text">Thérapeute Complémentaire</p>
        <p className="hero-second-text">Accompagnement Psychocorporel</p>

        <div className="hero-values">
          <span>CRÉATIVITÉ</span>
          <span>RESPECT</span>
          <span>BIENVEILLANCE</span>
        </div>
      </div>

      <div className="hero-wave" />
    </header>
  );
}