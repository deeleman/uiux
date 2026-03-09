import { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalTimelineProps {
  values: string[];
  labels: string[];
  index: number;
  onIndexChange: (index: number) => void;
}

export function HorizontalTimeline({
  values,
  labels,
  index,
  onIndexChange,
}: HorizontalTimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollToIndex = useCallback(
    (i: number) => {
      const dot = dotsRef.current[i];
      const track = trackRef.current;
      if (!dot || !track) return;
      const trackRect = track.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();
      const scrollLeft =
        dot.offsetLeft - trackRect.width / 2 + dotRect.width / 2;
      track.scrollTo({ left: scrollLeft, behavior: "smooth" });
    },
    []
  );

  useEffect(() => {
    scrollToIndex(index);
  }, [index, scrollToIndex]);

  const fillPercent =
    values.length > 1 ? (index / (values.length - 1)) * 100 : 0;

  return (
    <div className="ht-nav">
      <button
        className="ht-nav__btn"
        type="button"
        disabled={index <= 0}
        onClick={() => onIndexChange(index - 1)}
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="ht" ref={trackRef}>
        <div className="ht__inner">
          <div className="ht__line">
            <div
              className="ht__line-fill"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
          {values.map((value, i) => {
            const isActive = i === index;
            const isPast = i < index;
            return (
              <button
                key={`${value}-${i}`}
                ref={(el) => {
                  dotsRef.current[i] = el;
                }}
                className={[
                  "ht__stop",
                  isActive && "ht__stop--active",
                  isPast && "ht__stop--past",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onIndexChange(i)}
                type="button"
              >
                <span className="ht__dot" />
                <span className="ht__label">{labels[i]}</span>
                <span className="ht__date">{value}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        className="ht-nav__btn"
        type="button"
        disabled={index >= values.length - 1}
        onClick={() => onIndexChange(index + 1)}
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
