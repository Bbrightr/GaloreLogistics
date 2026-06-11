// ===== GALORE LOGISTICS — MAIN JS =====

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Mobile: tap on "SERVICES" to toggle dropdown
const hasDropdowns = document.querySelectorAll('.has-dropdown');
hasDropdowns.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 700) {
      e.preventDefault();
      item.classList.toggle('open');
    }
  });
});

// Contact form submission
function handleFormSubmit() {
  const name    = document.getElementById('name');
  const email   = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name || !email || !message) return;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('Please fill in your name, email, and message before sending.');
    return;
  }

  // Show success
  const successEl = document.getElementById('form-success');
  if (successEl) {
    successEl.style.display = 'block';
    // Reset form
    name.value = '';
    email.value = '';
    if (document.getElementById('telephone')) document.getElementById('telephone').value = '';
    if (document.getElementById('subject'))   document.getElementById('subject').value = '';
    message.value = '';
  }
}

// Smooth scroll for anchor links on services page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (navLinks && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});
