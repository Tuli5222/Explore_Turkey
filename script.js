// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Handle sign-up form submission and redirect to home page
document.getElementById('signup').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Check if the passwords match
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
  } else {
    // Optionally, you can handle form data here (e.g., send it to a server)
    // For this example, we'll just simulate a successful form submission
    alert('Sign-up successful! Redirecting to the homepage.');

    // Redirect to the homepage after successful sign-up
    window.location.href = 'index.html'; // Change this to your homepage URL
  }
});



// Handle Journey Planner form submission
document.getElementById('planner-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value.trim();
  const departureDate = document.getElementById('departure-date').value;
  const returnDate = document.getElementById('return-date').value;
  const travelers = document.getElementById('travelers').value;

  if (!destination || !departureDate || !returnDate || !travelers) {
    alert('Please fill out all fields.');
    return;
  }

  const depDate = new Date(departureDate);
  const retDate = new Date(returnDate);

  if (retDate <= depDate) {
    alert('Return date must be after departure date.');
    return;
  }

  alert(`Searching trips to ${destination}\nDeparture: ${departureDate}\nReturn: ${returnDate}\nTravelers: ${travelers}`);

  // Optionally: Redirect or search logic here
  // window.location.href = `search.html?dest=${encodeURIComponent(destination)}&dep=${departureDate}&ret=${returnDate}&people=${travelers}`;
});



// Newsletter form handling
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (email === '') {
    alert('Please enter a valid email address.');
  } else {
    alert(`Thanks for subscribing, ${email}!`);

    this.reset();
  }
});

// Theme toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});



// Fully Functional Carousel
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentIndex = 0;
  let slideInterval;

  if (!track || slides.length === 0 || !dotsContainer) return;

  function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    updateDots(index);
  }

  function updateDots(index) {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
  }

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 5000); // Change every 5s
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  // Initialize
  createDots();
  updateCarousel(0);
  startAutoplay();

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  window.addEventListener('resize', () => {
    updateCarousel(currentIndex);
  });
});

