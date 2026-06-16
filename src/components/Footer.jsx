import TestimonialSlider from "./TestimonialSlider";

export default function Footer() {
  return (
    <>
      <TestimonialSlider />

      <section className="nature-section">
        <h2>Un espace de nature et de sérénité</h2>
        <p>Un environnement propice au calme, à la détente et au ressourcement.</p>

        <div className="nature-image">
          <img src="/images/nature.jpg" alt="Nature et sérénité" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Informations supplémentaires</h3>
            <h4>Ayni Concept</h4>
            <a
                    href="https://share.google/IeU7LVzqmFVKKXZXq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    8 bis Rue Baylon, 1227 Carouge
                  </a>
            <p>1227 Carouge</p>
            <p>Email : brige.spirale@gmail.com</p>
            <p>Tel : 076 382 00 88</p>
          </div>

          <div>
            <h3>Horaire</h3>
            <p>Mercredi : 8h — 18h30</p>
            <p>Jeudi : 8h — 18h30</p>
          </div>

          <div>
            <h3>Réseaux sociaux</h3>

            <div className="social-links">
              <a
                href="https://www.instagram.com/brigitte_ehlers_fliege/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>

              <a
                href="https://wa.me/41763820088"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/whatsapp_noir.png" alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 - labrige</p>

          <a
            href="https://evoswiss.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="evoswiss-badge"
          >
            <img
              src="/images/powered-by-evoswiss-white.png"
              alt="Powered by Evoswiss"
            />
          </a>
        </div>
      </footer>
    </>
  );
}