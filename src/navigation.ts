const SECTION_MAP: Record<string, [string, string]> = {
  start:      ['01 / 05', 'Intro'],
  experience: ['02 / 05', 'Experience'],
  projects:   ['03 / 05', 'Projects'],
  skills:     ['04 / 05', 'Skills'],
  contact:    ['05 / 05', 'Contact'],
};

export function initNavigation(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[data-section]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link[data-nav]');
  const barSection = document.getElementById('bar-section');

  function setActive(sectionId: string): void {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.nav === sectionId);
    });

    if (barSection) {
      const entry = SECTION_MAP[sectionId] ?? SECTION_MAP.start;
      barSection.innerHTML = `${entry[0]}&nbsp;·&nbsp;${entry[1]}`;
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const id = (entry.target as HTMLElement).dataset.section;
          if (id) setActive(id);
        }
      }
    },
    { threshold: [0.5] },
  );

  sections.forEach((s) => io.observe(s));

  // Compute total experience years dynamically
  const yearsEl = document.getElementById('exp-total-years');
  if (yearsEl) {
    yearsEl.textContent = String(new Date().getFullYear() - 2000);
  }
}
