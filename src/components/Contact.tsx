import { Mail, Github, Globe } from "lucide-react";
import { contact } from "../data/content";

export function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section__label">Get in touch</p>
      <h2 className="section__heading">Contact</h2>
      <div className="contact__links">
        <a href={`mailto:${contact.email}`} className="contact__link">
          <Mail size={18} />
          <span>{contact.email}</span>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        <a href={contact.website} className="contact__link">
          <Globe size={18} />
          <span>uiux.es</span>
        </a>
      </div>
    </section>
  );
}
