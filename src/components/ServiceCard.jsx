import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="service-card" style={{ background: service.color }}>
      <img src={service.image} alt={service.title} />

      <h3>{service.title}</h3>
      <p>{service.short}</p>

      <Link href={`/services#${service.slug}`} className="btn">
        En savoir plus
      </Link>
    </article>
  );
}