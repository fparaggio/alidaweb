/* ================================================
   ALIDA — Main JavaScript
   ================================================ */

(function () {
  'use strict';

  // ---- DOM References ----
  var header = document.getElementById('site-header');
  var hamburger = document.getElementById('nav-hamburger');
  var navLinks = document.getElementById('nav-links');
  var navItems = document.querySelectorAll('.nav__link');
  var sections = document.querySelectorAll('section[id]');
  var fadeEls = document.querySelectorAll('.fade-in');

  // ---- Sticky Nav Background on Scroll ----
  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // ---- Active Nav Link Highlighting ----
  function highlightActiveLink() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ---- Scroll Events (throttled via requestAnimationFrame) ----
  var scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        handleHeaderScroll();
        highlightActiveLink();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // ---- Smooth Scroll for Nav Links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        // Close mobile menu if open
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Mobile Hamburger Menu Toggle ----
  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // ---- Scroll-Triggered Fade-In Animations ----
  if ('IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });

    // Also observe hero annotations separately for initial load
    var heroAnnotations = document.querySelector('.hero__annotations');
    if (heroAnnotations) {
      // Trigger hero labels after a short delay for cinematic feel
      setTimeout(function () {
        var heroLabels = heroAnnotations.querySelectorAll('.overlay-label--fade');
        heroLabels.forEach(function (label) {
          label.style.opacity = '1';
          label.style.transform = 'translateY(0)';
        });
      }, 800);
    }
  } else {
    // Fallback: show everything immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Subtle Parallax on Hero ----
  var heroImg = document.querySelector('.hero__bg-img');
  if (heroImg) {
    // Parallax handled inside existing RAF-throttled scroll handler
    var origHandleScroll = handleHeaderScroll;
    handleHeaderScroll = function () {
      origHandleScroll();
      var scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroImg.style.transform = 'scale(1.05) translateY(' + (scrollY * 0.15) + 'px)';
      }
    };
  }

  // ---- Init ----
  handleHeaderScroll();
})();
