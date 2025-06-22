// Cursor trail effect
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 600); // Matches the CSS animation duration
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});