import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const typedTargetRef = useRef(null);

  useEffect(() => {
    let typedInstance = null;
    if (window.Typed && typedTargetRef.current) {
      typedInstance = new window.Typed(typedTargetRef.current, {
        strings: ['Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });
    }
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/Gemini_Generated_Image_czeojuczeojuczeo.png" alt="" data-aos="fade-in" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Alex Smith</h2>
        <p>
          I'm <span ref={typedTargetRef} className="typed"></span>
        </p>
      </div>
    </section>
  );
}

