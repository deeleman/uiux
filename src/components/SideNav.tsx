import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  FolderOpen,
  Zap,
  Mail,
} from "lucide-react";
import { sections } from "../data/content";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  hero: Home,
  experience: Briefcase,
  projects: FolderOpen,
  skills: Zap,
  contact: Mail,
};

export function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="side-nav" aria-label="Section navigation">
      {sections.map((s) => {
        const Icon = iconMap[s.id];
        return (
          <button
            key={s.id}
            className={`side-nav__item ${
              active === s.id ? "side-nav__item--active" : ""
            }`}
            onClick={() =>
              document
                .getElementById(s.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label={s.label}
          >
            {Icon && <Icon size={16} />}
            <span className="side-nav__tooltip">{s.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
