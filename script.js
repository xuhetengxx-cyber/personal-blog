document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer p");

  if (footer) {
    footer.textContent = `© ${year} 我的博客. Built with plain HTML, CSS and JavaScript.`;
  }
});
