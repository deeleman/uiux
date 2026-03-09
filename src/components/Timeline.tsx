import { useState } from "react";
import { Briefcase } from "lucide-react";
import { experience } from "../data/content";
import { HorizontalTimeline } from "./HorizontalTimeline";

const dates = experience.map((item) => item.period.split("–")[0]);
const labels = experience.map((item) => item.organization);

export function Timeline() {
  const [index, setIndex] = useState(experience.length - 1);
  const current = experience[index];

  return (
    <section className="timeline-section" id="experience">
      <p className="section__label">Career</p>
      <h2 className="section__heading">Experience</h2>

      <div className="timeline__wrapper">
        <HorizontalTimeline
          values={dates}
          labels={labels}
          index={index}
          onIndexChange={setIndex}
        />
      </div>

      <div className="timeline__detail">
        <div className="timeline__detail-card glow-card">
          <div className="timeline__detail-header">
            <div className="timeline__detail-icon">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="timeline__detail-org">{current.organization}</h3>
              <p className="timeline__detail-period">{current.period}</p>
            </div>
          </div>
          <p className="timeline__detail-title">{current.title}</p>
          <p className="timeline__detail-desc">{current.description}</p>
        </div>
      </div>
    </section>
  );
}
