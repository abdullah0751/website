// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function showProjectDetails(id) {
  // Hide all project details first
  document.querySelectorAll('.project-details').forEach(detail => {
    detail.style.display = 'none';
  });
  // Show the selected project details
  document.getElementById(id).style.display = 'block';
}