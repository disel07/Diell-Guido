import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

const mqlListenersMap = new Map<string, Set<(e: MediaQueryListEvent) => void>>();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => {
    if (!mqlListenersMap.has(query)) {
      mqlListenersMap.set(query, new Set());
    }
    const listeners = mqlListenersMap.get(query)!;

    return {
      matches: query.includes('pointer: coarse') ? false : query.includes('prefers-reduced-motion: reduce'),
      media: query,
      onchange: null,
      addListener: vi.fn((fn) => listeners.add(fn)),
      removeListener: vi.fn((fn) => listeners.delete(fn)),
      addEventListener: vi.fn((event: string, fn: (e: MediaQueryListEvent) => void) => {
        if (event === 'change') listeners.add(fn);
      }),
      removeEventListener: vi.fn((event: string, fn: (e: MediaQueryListEvent) => void) => {
        if (event === 'change') listeners.delete(fn);
      }),
      dispatchEvent: vi.fn((event: Event) => {
        listeners.forEach((fn) => fn(event as MediaQueryListEvent));
        return true;
      }),
    };
  }),
});

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  writable: true,
  value: vi.fn(() => null),
});

Object.defineProperty(navigator, 'clipboard', {
  writable: true,
  configurable: true,
  value: {
    writeText: vi.fn(),
  },
});

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

window.requestAnimationFrame = vi.fn(() => 1);
window.cancelAnimationFrame = vi.fn();

Element.prototype.scrollIntoView = vi.fn();
