document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('.footer-year');

  if (yearNode) {
    yearNode.textContent = `© ${new Date().getFullYear()} 许鹤腾. All rights reserved.`;
  }
});
