import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="testimonials section">
      <div className="container testimonial-container">
        <ScrollReveal>
          <h2 className="title">Témoignages</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="testimonial-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p>« {testimonial.text} »</p>
                <strong>{testimonial.name}</strong>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                className={dotIndex === index ? "active" : ""}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Afficher le témoignage ${dotIndex + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}