export const removeData = () =>
  (window.onbeforeunload = localStorage.removeItem('userChoice'));
