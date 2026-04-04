/* GrowthStack — main.js
   Nav scroll behaviour (HarvestOS: bg/95 + backdrop-blur on scroll)
   Mobile burger menu + animated bars
   Scroll reveal animations (HarvestOS: opacity + translateY, duration-700)
   Active nav link highlight
*/

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav: add .scrolled class when page scrolls (HarvestOS pattern) ──
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    if (!nav) return;
    if (window.scrollY > 16) {
      nav.classList.add('scrolled');
    } else {
      // Keep scrolled on inner pages that start with scrolled class
      if (!nav.classList.contains('scrolled-lock')) {
        nav.classList.remove('scrolled');
      }
    }
  };
  // Inner pages start fully opaque — lock the scrolled state
  if (nav && nav.classList.contains('scrolled')) {
    nav.classList.add('scrolled-lock');
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Mobile burger menu ──
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      // Animate bars into X
      const bars = burger.querySelectorAll('span');
      if (isOpen) {
        bars[0].style.cssText = 'transform:rotate(45deg) translate(5px,5px)';
        bars[1].style.cssText = 'opacity:0;transform:scaleX(0)';
        bars[2].style.cssText = 'transform:rotate(-45deg) translate(5px,-5px)';
      } else {
        bars.forEach(b => b.style.cssText = '');
      }
    });
    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.querySelectorAll('span').forEach(b => b.style.cssText = '');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Scroll reveal (HarvestOS: transition opacity + translateY, duration-700) ──
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately if no IntersectionObserver
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ── Active nav link (highlight current page) ──
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── FAQ accordion: rotate + icon ──
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      const plus = item.querySelector('.faq-plus');
      if (plus) plus.textContent = item.open ? '−' : '+';
    });
  });

});


/* ── Cal.com button click tracking via GTM dataLayer ─────────────────────── */
(function() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('button[data-utm-content]');
    if (!btn) return;
    var utmContent = btn.getAttribute('data-utm-content');
    var calLink    = btn.getAttribute('data-cal-link') || '';
    if (window.dataLayer) {
      window.dataLayer.push({
        event:       'cal_book_click',
        utm_content: utmContent,
        cal_link:    calLink,
        page_path:   window.location.pathname,
      });
    }
  });
})();
