import { useState } from "react";
import Link from "next/link";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="about-wave-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Qui suis-je ?</h2>
          <p className="about-role">Thérapeute</p>
          <div className="asca-badge">
            <img src="/images/asca.png" alt="ASCA - Médecines complémentaires" /><img src="/images/logo_rme.png" alt="RME - Qualité dans la médecine empirique" />
        </div>

          <p>
            Après avoir passé 23 ans en tant que géographe dans une entreprise
            internationale de géologues pétroliers, l’envie de passer à l’énergie
            des êtres humains s’est imposée comme une évidence. Le travail
            scientifique m’a apporté une certaine rigueur et un ancrage certain.
            La vie et les rencontres m’ont amenée vers des formations diverses,
            en rapport avec mes fondamentaux, comme des retrouvailles avec la
            personne que j’ai toujours été.
          </p>

          <p>
            <strong>Ecouter, aider, apaiser, accompagner.</strong>
          </p>

          {open && (
            <div className="about-more">
              <p>
                Les soins énergétiques, le magnétisme, la réflexologie, des massages
                et la lithothérapie ont été mes enseignants sur la voie de la thérapeute
                en médecine complémentaire, agréée ASCA *, que je suis devenue.
                La médecine académique de base, essentielle pour comprendre l’humain
                dans son ensemble : matière, systèmes, émotions et énergie.
              </p>

              <p>
                Persuadée qu’une approche holistique du vivant et qu’une collaboration
                de toutes les médecines est le bon chemin, convaincue que la santé est
                une question de travail commun et de responsabilité personnelle, je vois
                avec joie l’émergence d’une médecine intégrative. Je collabore avec
                différents médecins et thérapeutes pour un accompagnement complet des
                personnes.
              </p>

              <p>
                Une séance ne ressemble jamais à une autre, je m’adapte à la personne
                et à ses besoins en utilisant et associant les différentes techniques
                que je maîtrise. Je mets énormément à contribution mon intuition et mes
                ressentis. L’empathie, le respect et la bienveillance sont mes
                indispensables, mais la bonne humeur et l’humour ne sont jamais bien loin !
              </p>

              <p>
                Mes soins s’adressent à tous, personne en souffrance physique ou
                émotionnelle, en évolution personnelle, enfant ou adolescent stressé ou
                désorienté dans ses choix de vie, femmes enceintes… La bonne nouvelle
                c’est qu’il y a toujours un moyen de soulager et d’atteindre ses
                ressources personnelles pour pouvoir transformer le présent et mieux
                repartir.
              </p>

              <p>
                Je me réjouis de vous accueillir et de vous rencontrer !
              </p>

              <p>Brigitte</p>

              <p className="about-note">
                * Remboursée par certaines assurances complémentaires, veuillez-vous
                renseigner de la prise en charge partielle auprès de votre assurance.
              </p>
            </div>
          )}

          <div className="about-actions">
            <button className="btn about-btn" onClick={() => setOpen(!open)}>
              {open ? "Voir moins" : "Voir plus"}
            </button>

            <Link href="/contact" className="btn btn-green">
              Contacter sur WhatsApp
            </Link>
          </div>
        </div>

        <div className="about-image">
          <img src="/images/brigitte.jpg" alt="Brigitte, thérapeute" />
        </div>
      </div>
    </section>
  );
}