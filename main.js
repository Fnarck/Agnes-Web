/* ─── main.js — Agnès Brandely Website ─── */
'use strict';

// ═══════════════════════════
// NAVBAR scroll behaviour
// ═══════════════════════════
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile toggle
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close menu on nav link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// ═══════════════════════════
// REVEAL on scroll
// ═══════════════════════════
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings within same section
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// ═══════════════════════════
// ACTIVE nav link on scroll
// ═══════════════════════════
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.removeAttribute('aria-current'));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.setAttribute('aria-current', 'page');
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => sectionObserver.observe(s));

// ═══════════════════════════
// CONTACT FORM (Test mode — mailto)
// ═══════════════════════════
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', (e) => {
    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.style.outline = '';
      if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
        field.style.outline = '2px solid #c0392b';
        valid = false;
      }
    });
    if (!valid) {
      e.preventDefault();
      formSuccess.style.display = 'block';
      formSuccess.style.background = 'rgba(192,57,43,.08)';
      formSuccess.style.color = '#c0392b';
      formSuccess.textContent = 'Merci de remplir tous les champs obligatoires et de cocher la case RGPD.';
      return;
    }
    // Let the native form submit (mailto:) proceed
    submitBtn.querySelector('span:first-child').textContent = 'Ouverture messagerie…';
  });
}

// ═══════════════════════════
// MODAL mentions légales
// ═══════════════════════════
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const mentionsBtn = document.getElementById('mentionsBtn');
const rgpdBtn = document.getElementById('rgpdBtn');

function openModal() {
  modalOverlay.classList.add('open');
  modalOverlay.removeAttribute('aria-hidden');
  modalClose.focus();
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

mentionsBtn?.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
rgpdBtn?.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ═══════════════════════════
// Smooth scroll offset for fixed nav
// ═══════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
