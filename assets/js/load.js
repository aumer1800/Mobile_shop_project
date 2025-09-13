  // Splash transition with fade-out
  setTimeout(() => {
    const splash = document.querySelector('.load');
    splash.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = "main.html";
    }, 1000); // Match fade duration (1s)
  }, 3000);
