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

