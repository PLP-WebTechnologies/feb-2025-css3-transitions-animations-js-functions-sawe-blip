// Trigger CSS animation on button click
document.getElementById("animateButton").addEventListener("click", function() {
    const img = document.getElementById("animatedImage");
    img.style.transform = "scale(1.2)";
    setTimeout(() => {
      img.style.transform = "scale(1)";
    }, 500); // Reset the scale after 500ms
  });
  
  // Toggle Dark Mode and store user preference in localStorage
  const themeButton = document.getElementById("themeButton");
  
  // Check if the user has previously set a theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  themeButton.addEventListener("click", function() {
    // Toggle dark mode class
    document.body.classList.toggle('dark-mode');
    
    // Store user preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  