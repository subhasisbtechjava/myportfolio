import React, { useEffect } from 'react';

const testimonials = [
  {
    quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    img: "/assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    role: "Ceo & Founder"
  },
  {
    quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    img: "/assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer"
  },
  {
    quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    img: "/assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner"
  },
  {
    quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    img: "/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer"
  },
  {
    quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    img: "/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    role: "Entrepreneur"
  }
];

export default function Testimonials() {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper('.init-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((item, idx) => (
              <div key={idx} className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{item.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img src={item.img} className="testimonial-img" alt={item.name} />
                  <h3>{item.name}</h3>
                  <h4>{item.role}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

