function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const moonIcon = document.getElementById('dark-icon');

// Add a click event listener to the moon icon
moonIcon.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
});