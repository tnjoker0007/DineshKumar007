import React, { useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, delay = 0, animation = 'pop-up', className = '', style = {} }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (node) node.classList.add('reveal-active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal-item ${animation} ${className}`} style={style}>
      {children}
    </div>
  );
};
