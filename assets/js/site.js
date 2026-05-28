/* James Tyler Short — portfolio interactions. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  /* --- sticky nav shadow on scroll --- */
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- mobile menu --- */
  navToggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close the menu after tapping a link (mobile)
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* --- scroll-spy: highlight the active section in the nav --- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id], header[id]'));
  var linkFor = {};
  navLinks.querySelectorAll('a[href^="#"]').forEach(function (a) {
    linkFor[a.getAttribute('href').slice(1)] = a;
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        Object.keys(linkFor).forEach(function (k) {
          linkFor[k].classList.toggle('active', k === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --- reveal-on-scroll --- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { ro.observe(el); });
  }

  /* --- lightbox for screenshots --- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  function openLb(src, alt) {
    lbImg.src = src; lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
  }
  document.querySelectorAll('img[data-lightbox]').forEach(function (img) {
    img.addEventListener('click', function () { openLb(img.src, img.alt); });
  });
  lb.addEventListener('click', closeLb);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLb();
  });

  /* --- current year --- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
