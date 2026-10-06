const cursor = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? '' : 'flex';
  if (!open) {
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.padding = '25px 7vw';
    navLinks.style.background = 'rgba(231,231,229,.97)';
    navLinks.style.flexDirection = 'column';
  }
});
