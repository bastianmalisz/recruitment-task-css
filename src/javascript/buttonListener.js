export const footerButtonsController = () => {
  const resetSettings = () => {
    document.querySelectorAll('input[type=radio]').forEach(element => {
      element.checked = false;
    });
    document.getElementById('sectionThreeOperationalParagraphId').innerHTML =
      '';
    document.getElementById('userDataId').classList.remove('visible');
    document.getElementById('appHeaderParagraphId').classList.remove('reset');
    localStorage.getItem('userChoice') !== null
      ? localStorage.removeItem('userChoice')
      : null;
  };

  const showUserData = () => {
    document.getElementById('userDataId').classList.add('visible');
    document.getElementById('appHeaderParagraphId').classList.add('reset');
  };

  document
    .getElementById('resetSettingsButtonId')
    .addEventListener('click', resetSettings);
  document
    .getElementById('showUserDataId')
    .addEventListener('click', showUserData);
};
