function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-links li a');
  const contactSection = document.querySelector('#contact');

  // Function to check if the element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle scroll event
  function handleScroll() {
      if (isInViewport(contactSection)) {
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#contact') {
                  link.classList.add('active');
              }
          });
      } else {
          navLinks.forEach(link => {
              link.classList.remove('active');
          });
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});
