import Layout from "../components/Layout";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";

export default function Services() {
  return (
    <Layout title="Brige TerreHappy | Services">
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h1 className="title">SERVICES</h1>
            <p className="subtitle">
              Un accompagnement adapté à chaque personne, dans un cadre bienveillant.
            </p>
          </ScrollReveal>

          {services.map((service, index) => (
            <ScrollReveal key={service.slug} delay={index * 0.05}>
              <article
                id={service.slug}
                className="service-detail"
                style={{ background: service.color }}
              >
                <div className="service-detail-inner">
                  <img src={service.image} alt={service.title} />

                  <div>
                    <h2>{service.title}</h2>
                    <strong>Kézako ?</strong>

                    <div className="service-text">
                      {service.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                      {service.contraindication && (
                        <p>
                          <strong>Contre-indication :</strong>{" "}
                          {service.contraindication}
                        </p>
                      )}

                      {service.benefits && (
                        <p>
                          <strong>Bienfaits :</strong> {service.benefits}
                        </p>
                      )}
                    </div>

                    <a href="/contact" className="btn">
                      Prendre rendez-vous
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}