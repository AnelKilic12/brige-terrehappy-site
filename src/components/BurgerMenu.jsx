import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Bon KADO", href: "/bon-kado" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <button
        className={`burger-button ${open ? "active" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <Menu size={24} />
      </button>

      <div
        className={`menu-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`circle-menu ${open ? "open" : ""}`}>
        <button
          className="close-menu"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X size={26} />
        </button>

        <div className="circle-links">
          {links.map((link) => {
            const isActive = router.pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "active-link" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}