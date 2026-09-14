import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to trigger
 * reveal animations when elements enter the viewport.
 *
 * @param {string}  selector  CSS selector for elements to observe (default '.reveal')
 * @param {number}  threshold Intersection threshold (0–1)
 */
export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right', threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}

/**
 * useNavScroll — tracks scroll position for navbar state.
 * Returns a ref to the scrolled state.
 */
export function useNavScroll(threshold = 50) {
  const scrolled = useRef(false);

  useEffect(() => {
    const handler = () => {
      scrolled.current = window.scrollY > threshold;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
