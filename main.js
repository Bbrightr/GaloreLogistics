// ===== GALORE LOGISTICS — ENHANCED MAIN JS =====

// ============================
// SCROLL ANIMATION SETUP
// ============================

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Trigger animation by removing the class that prevents it
      if (entry.target.classList.contains('fade-in-on-scroll')) {
        entry.target.style.animationPlayState = 'running';
      }
      // Optional: stop observing after animation
      // scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
  el.style.animationPlayState = 'paused';
  scrollObserver.observe(el);
});

// Observe stagger items
document.querySelectorAll('.stagger-item').forEach((el, index) => {
  scrollObserver.observe(el);
});

// ============================
// COUNTER ANIMATION
// ============================

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const startTime = Date.now();
  
  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(target * easeOutQuad);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Counter animation with Intersection Observer
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
      entry.target.setAttribute('data-animated', 'true');
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe all counters
document.querySelectorAll('.counter').forEach((counter) => {
  counterObserver.observe(counter);
});

// ============================
// NAVBAR INTERACTIONS
// ============================

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger
    hamburger.style.transform = navLinks.classList.contains('open') 
      ? 'rotate(90deg)' 
      : 'rotate(0)';
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

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (navLinks && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    if (hamburger) hamburger.style.transform = 'rotate(0)';
  }
});

// ============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (navLinks) navLinks.classList.remove('open');
    }
  });
});

// ============================
// NAVBAR SCROLL EFFECT
// ============================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add shadow on scroll
  if (scrollTop > 50) {
    navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ============================
// PARALLAX EFFECT
// ============================

const parallaxElements = document.querySelectorAll('[data-parallax]');

if (parallaxElements.length > 0) {
  window.addEventListener('scroll', () => {
    parallaxElements.forEach((el) => {
      const scrollPosition = window.pageYOffset;
      const elementOffset = el.offsetTop;
      const elementHeight = el.offsetHeight;
      
      // Only apply parallax if element is visible
      if (scrollPosition + window.innerHeight > elementOffset) {
        const yPos = (scrollPosition - elementOffset) * 0.5;
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
  });
}

// ============================
// BUTTON RIPPLE EFFECT
// ============================

const buttons = document.querySelectorAll('.btn-primary, .btn-outline, .btn-cta, .btn-quote');

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Remove previous ripple if it exists
    const oldRipple = this.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();
    
    this.appendChild(ripple);
  });
});

// ============================
// FORM HANDLING
// ============================

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
    successEl.style.animation = 'fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Reset form
    name.value = '';
    email.value = '';
    if (document.getElementById('telephone')) document.getElementById('telephone').value = '';
    if (document.getElementById('subject'))   document.getElementById('subject').value = '';
    message.value = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successEl.style.animation = 'fadeOut 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      setTimeout(() => {
        successEl.style.display = 'none';
        successEl.style.animation = '';
      }, 600);
    }, 5000);
  }
}

// ============================
// FORM INPUT FOCUS ANIMATION
// ============================

const inputs = document.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.boxShadow = '0 0 0 3px rgba(245, 166, 35, 0.1)';
  });
  
  input.addEventListener('blur', function() {
    this.style.boxShadow = 'none';
  });
});

// ============================
// SCROLL TO TOP BUTTON (optional)
// ============================

function createScrollToTopButton() {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'scroll-to-top';
  button.setAttribute('aria-label', 'Scroll to top');
  button.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--orange);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 999;
    box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);
  `;
  
  document.body.appendChild(button);
  
  // Show button on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  // Scroll to top on click
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  button.addEventListener('hover', function() {
    this.style.background = 'var(--orange-dark)';
    this.style.transform = 'translateY(-3px)';
  });
}

createScrollToTopButton();

// ============================
// LOADING ANIMATION
// ============================

// Fade in page on load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ============================
// PERFORMANCE: DEBOUNCE
// ============================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced resize handler
const handleResize = debounce(() => {
  // Handle resize events
}, 250);

window.addEventListener('resize', handleResize);

// ============================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================

// Trap focus in dropdowns
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close any open dropdowns
    hasDropdowns.forEach(item => {
      item.classList.remove('open');
    });
    // Close mobile menu
    if (navLinks) navLinks.classList.remove('open');
  }
});

// ============================
// MUTUAL EXCLUSIVITY FOR DROPDOWNS
// ============================

hasDropdowns.forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth > 700) {
      hasDropdowns.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.add('open');
    }
  });
});

// ============================
// PAGE READY
// ============================

console.log('Galore Logistics - Enhanced page loaded successfully with smooth animations! 🚀');
