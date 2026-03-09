import {
  Atom,
  Shield,
  FileCode,
  Layers,
  Braces,
  Server,
  BrainCircuit,
  GitMerge,
  Paintbrush,
} from "lucide-react";
import { skills } from "../data/content";

const icons = [
  Layers,
  Atom,
  Braces,
  BrainCircuit,
  Shield,
  FileCode,
  GitMerge,
  Paintbrush,
  Server,
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section__label">Expertise</p>
      <h2 className="section__heading">Skills</h2>
      <div className="skills__grid">
        {skills.map((skill, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={skill.name} className="skill-card glow-card">
              <div className="skill-card__icon">
                <Icon size={18} />
              </div>
              <div>
                <p className="skill-card__name">{skill.name}</p>
                <p className="skill-card__desc">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
