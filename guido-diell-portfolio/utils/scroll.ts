import { prefersReducedMotion } from './performance';

/**
 * Scroll to an element with an offset to account for the sticky navbar.
 */
export function scrollWithOffset(el: HTMLElement): void {
  const navbarOffset = 96; // Height of the navbar + breathing room
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - navbarOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}
