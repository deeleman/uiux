import { ChevronDown } from "lucide-react";
import { intro } from "../data/content";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <img
          src="/1770722607679.jpg"
          alt="Pablo Deeleman"
          className="hero__photo"
          width={160}
          height={160}
        />
        <h1 className="hero__name">{intro.headline}</h1>
        <p className="hero__title">{intro.subtitle}</p>
        <p className="hero__intro">{intro.text}</p>
      </div>
      <button
        className="hero__scroll"
        onClick={() =>
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>Scroll</span>
        <ChevronDown size={20} className="hero__scroll-icon" />
      </button>
    </section>
  );
}
