import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import AboutSection from "../components/AboutSection";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";

export default function Home() {
  return (
    <Layout title="Brige TerreHappy | Accueil">
      <section className="section services-home-section">
        <div className="services-full-container">
          <ScrollReveal>
            <h2 className="title">SERVICES</h2>
            <p className="subtitle">
              Sur RDV les mercredis de 8h à 18h, jeudis de 10h à 17h et
              vendredis de 10h à 19h.
            </p>
          </ScrollReveal>

          <div className="services-grid services-grid-full">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 0.08}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
    </Layout>
  );
}