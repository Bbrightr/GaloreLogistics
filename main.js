// ===== GALORE LOGISTICS — ENHANCED MAIN JS =====

// ============================
// SCROLL ANIMATION SETUP
// ============================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('fade-in-on-scroll')) {
        entry.target.style.animationPlayState = 'running';
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
  el.style.animationPlayState = 'paused';
  scrollObserver.observe(el);
});

document.querySelectorAll('.stagger-item').forEach((el) => {
  scrollObserver.observe(el);
});

// ============================
// COUNTER ANIMATION
// ============================

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000;
  const startTime = Date.now();
  
  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
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

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
      entry.target.setAttribute('data-animated', 'true');
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach((counter) => {
  counterObserver.observe(counter);
});

// ============================
// HORIZONTAL SCROLL WITH PARALLAX
// ============================

function setupHorizontalScroll() {
  const scrollContainer = document.getElementById('premium-scroll');
  if (!scrollContainer) return;

  const wrapper = scrollContainer.parentElement;
  const scrollHint = wrapper.querySelector('.scroll-hint');

  // Auto-scroll on load
  setTimeout(() => {
    if (scrollHint) scrollHint.style.opacity = '0.5';
  }, 1000);

  // Hide hint on first scroll
  scrollContainer.addEventListener('scroll', () => {
    if (scrollHint && scrollContainer.scrollLeft > 50) {
      scrollHint.style.opacity = '0';
      scrollHint.style.pointerEvents = 'none';
    }
  }, { once: true });

  // Smooth scroll with arrow keys
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
    if (e.key === 'ArrowLeft') {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }
  });
}

setupHorizontalScroll();

// ============================
// NAVBAR INTERACTIONS
// ============================

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.style.transform = navLinks.classList.contains('open') 
      ? 'rotate(90deg)' 
      : 'rotate(0)';
  });
}

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
      
      if (scrollPosition + window.innerHeight > elementOffset) {
        const yPos = (scrollPosition - elementOffset) * 0.5;
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
  });
}

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

  const successEl = document.getElementById('form-success');
  if (successEl) {
    successEl.style.display = 'block';
    successEl.style.animation = 'fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    name.value = '';
    email.value = '';
    if (document.getElementById('telephone')) document.getElementById('telephone').value = '';
    if (document.getElementById('subject'))   document.getElementById('subject').value = '';
    message.value = '';
    
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
// SCROLL TO TOP BUTTON
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
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

createScrollToTopButton();

// ============================
// DEBOUNCE FOR PERFORMANCE
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

const handleResize = debounce(() => {
  // Handle resize events
}, 250);

window.addEventListener('resize', handleResize);

// ============================
// KEYBOARD NAVIGATION
// ============================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hasDropdowns.forEach(item => {
      item.classList.remove('open');
    });
    if (navLinks) navLinks.classList.remove('open');
  }
});

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

console.log('✅ Galore Logistics - Enhanced page loaded with smooth animations!');
