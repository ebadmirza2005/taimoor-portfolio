const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
  });
}

const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
  link.addEventListener('click', function () {
    links.forEach((nav) => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

const cursor = document.querySelector('.cursor');

if (cursor && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}