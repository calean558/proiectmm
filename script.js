var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    nav.style.background = 'rgba(248,244,239,0.98)';
  } else {
    nav.style.background = 'rgba(248,244,239,0.92)';
  }
});
