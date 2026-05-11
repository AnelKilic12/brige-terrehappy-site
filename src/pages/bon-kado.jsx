import { useEffect } from "react";
import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";

export default function BonKado() {
  useEffect(() => {
    const zone = document.getElementById("bonkado");
    if (!zone) return;

    const preventRightClick = (e) => e.preventDefault();
    zone.addEventListener("contextmenu", preventRightClick);

    return () => zone.removeEventListener("contextmenu", preventRightClick);
  }, []);

  return (
    <Layout title="Brige TerreHappy | Bon KADO">
    <ScrollReveal>
      <section className="bk-page" id="bonkado">
        <h1 className="bk-title">Bon KADO</h1>
        <p className="bk-sub">
          Un cadeau sur demande, préparé spécialement pour vous.
        </p>

        <div className="bk-card">
          <div className="bk-preview" aria-label="Aperçu Bon KADO">
            <img src="/images/bon-kado.png" alt="Aperçu Bon KADO" />
            <div className="bk-watermark">
              <span>Bon cadeau uniquement sur réservation</span>
            </div>
          </div>

          <div className="bk-text">
            <p>
              <strong>
                Offrez une parenthèse, un moment de répit, une découverte
              </strong>{" "}
              à vos proches et amis.
            </p>

            <p>
              Contactez-moi par téléphone, message WhatsApp ou Gmail pour
              réserver un bon <strong>(120 ou 150 CHF selon soin)</strong>.
            </p>

            <p>Modes de paiement possibles :</p>

            <ul className="bk-bullets">
              <li>
                <strong>Twint</strong>
              </li>
              <li>
                <strong>Cash</strong>
              </li>
              <li>
                <strong>Virement bancaire</strong>
              </li>
            </ul>
          </div>

          <div className="bk-actions">
            <a
              className="bk-btn bk-btn-whatsapp"
              href="https://wa.me/41763820088"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a className="bk-btn" href="tel:+41763820088">
              Appeler
            </a>

            <a
              className="bk-btn bk-btn-mail"
              href="mailto:brige.spirale@gmail.com?subject=Demande Bon KADO&body=Bonjour,%0A%0AJe souhaiterais réserver un Bon KADO (120 ou 150 CHF).%0A%0AMontant souhaité :%0ANom du bénéficiaire :%0AMerci et belle journée,"
            >
              Envoyer un email
            </a>
          </div>

          <div className="bk-mail-help">
            Si le bouton email ne s’ouvre pas, vous pouvez écrire directement à :
            <strong> brige.spirale@gmail.com</strong>
          </div>

          <div className="bk-note">
            * Le bon est transmis après réservation et paiement.
          </div>
        </div>
      </section>
    </ScrollReveal>
    </Layout>

  );
}