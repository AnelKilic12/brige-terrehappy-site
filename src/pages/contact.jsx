import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  return (
    <Layout title="Brige TerreHappy | Contact">
    <ScrollReveal>
      <section className="lb-contact">
        <div className="lb-contact-card">
          <div className="lb-contact-hero">
            <h1>Me contacter</h1>
            <p>
              Je suis joignable <strong>uniquement via WhatsApp</strong>.
              Réponse en général <strong>sous 24h</strong>.
            </p>
            <span className="lb-pill">WhatsApp uniquement</span>
          </div>

          <div className="lb-contact-grid">
            <div className="lb-whatsapp-box">
              <div className="lb-whatsapp-top">
                <div className="lb-wa-badge">
                  <span>💬</span>
                </div>

                <div>
                  <h2>WhatsApp</h2>
                  <span>Cliquez et écrivez-moi directement</span>
                </div>
              </div>

              <div className="lb-btn-row">
                <a
                  className="lb-btn lb-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/41763820088"
                >
                  Écrire sur WhatsApp
                </a>

                <a
                    className="lb-btn lb-btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/41763820088?text=${encodeURIComponent(
                    `Bonjour, je souhaite prendre rendez-vous.

                    Prénom :
                    Prestation :
                    Disponibilités :

                    Merci 🌿`
                    )}`}
                    >
                    Message rapide
                </a>
              </div>

              <div className="lb-steps">
                <h3>Comment ça se passe ?</h3>
                <ol>
                  <li>Vous m’écrivez sur WhatsApp</li>
                  <li>Vous précisez la prestation + vos disponibilités</li>
                  <li>Je vous propose un créneau</li>
                </ol>
              </div>
            </div>

            <aside className="lb-info">
              <h3>Informations utiles</h3>

              <div className="lb-info-item">
                <div className="lb-info-label">Disponibilités</div>
                <div className="lb-info-value">
                  Sur RDV :
                  <br />
                  Mercredi 8h–18h30
                  <br />
                  Jeudi 8h–18h30
                </div>
              </div>

              <div className="lb-info-item">
                <div className="lb-info-label">Délai de réponse</div>
                <div className="lb-info-value">
                  En général sous 24h, souvent plus rapide.
                </div>
              </div>

              <div className="lb-info-item">
                <div className="lb-info-label">Adresse</div>
                <div className="lb-info-value">
                  <a
                    href="https://share.google/IeU7LVzqmFVKKXZXq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    8 bis Rue Baylon, 1227 Carouge
                  </a>
                </div>
              </div>

              <div className="lb-info-item">
                <div className="lb-info-label">Important</div>
                <div className="lb-info-value">
                  Je ne réponds pas par e-mail / formulaire. Uniquement WhatsApp.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </Layout>
  );
}