import './scss/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  // Handle navigation active states
  const navLinks = document.querySelectorAll('.profile-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.parentElement.classList.remove('active'));
      link.parentElement.classList.add('active');
    });
  });

  // Handle buttons hover animations
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });

  // Handle profile image loading animations
  const images = document.querySelectorAll('.profile-avatars img');
  images.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.transform = 'translateY(20px)';
    setTimeout(() => {
      img.style.transition = 'all 0.3s ease-out';
      img.style.opacity = '1';
      img.style.transform = 'translateY(0)';
    }, index * 100);
  });

  // Add scroll animation for cover photo
  const coverPhoto = document.querySelector('.cover-photo');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 0) {
      coverPhoto.style.transform = `scale(${1 + scrolled * 0.0005})`;
    }
  });
});
