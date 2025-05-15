import { useEffect } from 'react';


export default function useIntersectionObserver (setActiveLink) {
  useEffect(() => {
    const options = {
      root:null,
      rootMargin: '0%',
      threshold:0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveLink]);
};
