export function initMobileNav(): void {
  const nav = document.getElementById('mobile-nav');
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  const links = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav__link[data-nav-mobile]');
  const sections = document.querySelectorAll<HTMLElement>('section[data-section]');

  if (!nav || !toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside tap
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target as Node) && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Track active section for mobile nav highlight
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          const id = (entry.target as HTMLElement).dataset.section;
          if (id) {
            links.forEach((link) => {
              link.classList.toggle('is-active', link.dataset.navMobile === id);
            });
          }
        }
      }
    },
    { threshold: [0.3] },
  );

  sections.forEach((s) => io.observe(s));
}
