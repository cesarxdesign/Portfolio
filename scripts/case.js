// Shared case-study behaviour: scroll-reveal + full-res lightbox.
// ?shot in the URL disables reveal (for full-page screenshot capture).
if (location.search.indexOf('shot') > -1) {
  document.documentElement.classList.add('shot');
  // force eager image loading so full-page screenshots capture every image
  document.querySelectorAll('img[loading]').forEach(i => i.removeAttribute('loading'));
}

const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const lb = document.getElementById('lb'), lbimg = document.getElementById('lbimg');
if (lb) {
  document.querySelectorAll('.phone.filled img, .shot-web img').forEach(img => {
    img.addEventListener('click', e => { e.stopPropagation(); lbimg.src = img.src; lb.classList.add('on'); });
  });
  lb.addEventListener('click', () => lb.classList.remove('on'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });
}
