const section = document.querySelector('.section');
window.addEventListener('scroll', () => {
  const top = section.getBoundingClientRect().top;
  if (top < window.innerHeight) {
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  }
});
