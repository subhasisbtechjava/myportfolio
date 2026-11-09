import React, { useState, useEffect } from 'react';

const portfolioItems = [
  { id: 1, title: 'App 1', category: 'app', img: '/assets/img/portfolio/app-1.jpg' },
  { id: 2, title: 'Product 1', category: 'product', img: '/assets/img/portfolio/product-1.jpg' },
  { id: 3, title: 'Branding 1', category: 'branding', img: '/assets/img/portfolio/branding-1.jpg' },
  { id: 4, title: 'Books 1', category: 'books', img: '/assets/img/portfolio/books-1.jpg' },
  { id: 5, title: 'App 2', category: 'app', img: '/assets/img/portfolio/app-2.jpg' },
  { id: 6, title: 'Product 2', category: 'product', img: '/assets/img/portfolio/product-2.jpg' },
  { id: 7, title: 'Branding 2', category: 'branding', img: '/assets/img/portfolio/branding-2.jpg' },
  { id: 8, title: 'Books 2', category: 'books', img: '/assets/img/portfolio/books-2.jpg' },
  { id: 9, title: 'App 3', category: 'app', img: '/assets/img/portfolio/app-3.jpg' },
  { id: 10, title: 'Product 3', category: 'product', img: '/assets/img/portfolio/product-3.jpg' },
  { id: 11, title: 'Branding 3', category: 'branding', img: '/assets/img/portfolio/branding-3.jpg' },
  { id: 12, title: 'Books 3', category: 'books', img: '/assets/img/portfolio/books-3.jpg' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('*');

  useEffect(() => {
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.glightbox'
      });
    }
  }, [filter]);

  const filteredItems = filter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
          sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li className={filter === '*' ? 'filter-active' : ''} onClick={() => setFilter('*')}>All</li>
            <li className={filter === 'app' ? 'filter-active' : ''} onClick={() => setFilter('app')}>App</li>
            <li className={filter === 'product' ? 'filter-active' : ''} onClick={() => setFilter('product')}>Product</li>
            <li className={filter === 'branding' ? 'filter-active' : ''} onClick={() => setFilter('branding')}>Branding</li>
            <li className={filter === 'books' ? 'filter-active' : ''} onClick={() => setFilter('books')}>Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6 portfolio-item isotope-item">
                <div className="portfolio-content h-100">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a href={item.img} title={item.title} data-gallery="portfolio-gallery" className="glightbox preview-link">
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="#portfolio" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

