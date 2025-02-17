export const toggleOverlay = (action) => {
  const overlay = document.querySelector('.overlay');
  overlay.classList[action]('active');
};