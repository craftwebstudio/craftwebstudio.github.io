// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Slideshow for Services Section
const serviceCards = document.querySelectorAll('.service-card');
let serviceIndex = 0;

function showNextService() {
  serviceCards[serviceIndex].classList.remove('active');
  serviceIndex = (serviceIndex + 1) % serviceCards.length;
  serviceCards[serviceIndex].classList.add('active');
}

setInterval(showNextService, 3000);

// Slideshow for Testimonials Section
const testimonials = document.querySelectorAll('.testimonial');
let testimonialIndex = 0;

function showNextTestimonial() {
  testimonials[testimonialIndex].classList.remove('active');
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 5000);

// Slideshow for Pricing and Packages Section
const pricingCards = document.querySelectorAll('.pricing-card');
let pricingIndex = 0;

function showNextPricing() {
  pricingCards[pricingIndex].classList.remove('active');
  pricingIndex = (pricingIndex + 1) % pricingCards.length;
  pricingCards[pricingIndex].classList.add('active');
}

setInterval(showNextPricing, 4000);