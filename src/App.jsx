import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export default function App() {
  useEffect(() => {
    // Initialize AOS animations
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Navmenu Scrollspy
    const handleScrollspy = () => {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollspy);
    return () => window.removeEventListener('scroll', handleScrollspy);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

