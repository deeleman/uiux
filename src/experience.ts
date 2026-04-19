export function initExperience(): void {
  const scroller = document.getElementById('tl-scroller');
  let detailEl = document.getElementById('exp-detail');
  const nodes = document.querySelectorAll<HTMLButtonElement>('.tl-node');

  if (!detailEl || nodes.length === 0) return;

  // Scroll timeline to the right end on load (latest jobs visible)
  if (scroller) {
    scroller.scrollLeft = scroller.scrollWidth;
  }

  let activeNode: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>('.tl-node.is-active');

  function selectNode(node: HTMLButtonElement): void {
    if (activeNode === node) return;

    activeNode?.classList.remove('is-active');
    node.classList.add('is-active');
    activeNode = node;

    updateDetail(node);
  }

  function updateDetail(node: HTMLButtonElement): void {
    const { year, end, company, role, location, blurb } = node.dataset;
    if (!year || !company) return;

    const parent = detailEl!.parentNode!;
    const clone = detailEl!.cloneNode(false) as HTMLElement;
    clone.id = 'exp-detail';
    clone.className = 'exp-detail';

    clone.innerHTML = `
      <div class="exp-detail__head">
        <span class="exp-detail__years">${year}<span class="exp-detail__dash">—</span>${end ?? ''}</span>
        <span class="exp-detail__sep"></span>
        <span class="exp-detail__location">${location ?? ''}</span>
      </div>
      <h3 class="exp-detail__company">
        <span>${company}</span>
        <span class="exp-detail__middot">·</span>
        <span class="exp-detail__role gradient-text">${role ?? ''}</span>
      </h3>
      <p class="exp-detail__blurb">${blurb ?? ''}</p>
    `;

    parent.replaceChild(clone, detailEl!);
    detailEl = clone;
  }

  nodes.forEach((node) => {
    node.addEventListener('click', () => selectNode(node));
  });
}
