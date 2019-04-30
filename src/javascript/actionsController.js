export const actionsController = () => {
  const buttons = document.querySelectorAll('.sectionButton');

  const fillThirdSection = button => {
    const inputs = document.querySelectorAll('input[type=radio]');
    const data = JSON.parse(localStorage.getItem('sampleData'));
    let chosenNumber;
    const paragraph = document.getElementById(
      'sectionThreeOperationalParagraphId'
    );

    let checkedOption;
    const replaceString = 'replace';
    const concatString = 'concat';

    const concat = option => {
      paragraph.innerHTML += ` ${data[option].title} `;
    };

    const replace = option => {
      paragraph.innerHTML = data[option].title;
    };

    const switchOption = (checkedOption, mode) => {
      switch (checkedOption) {
        case 'optionOne':
          switch (mode) {
            case replaceString:
              localStorage.getItem('userChoice') === null
                ? null
                : localStorage.removeItem('userChoice');
              replace(0);
              break;
            case concatString:
              if (localStorage.getItem('userChoice') === null) {
                localStorage.setItem('userChoice', 0);
                concat(0);
              } else {
                let obtainedData = [localStorage.getItem('userChoice')];
                const numbers = obtainedData[0].split(',').map(Number);

                if (numbers.indexOf(0) !== -1) {
                  alert('Ten wpis już istnieje');
                  break;
                } else {
                  concat(0);
                }
                obtainedData.push(0);
                localStorage.setItem('userChoice', obtainedData.toString());
              }
              break;
          }
          break;

        case 'optionTwo':
          switch (mode) {
            case replaceString:
              localStorage.getItem('userChoice') === null
                ? null
                : localStorage.removeItem('userChoice');
              replace(1);
              break;
            case concatString:
              if (localStorage.getItem('userChoice') === null) {
                localStorage.setItem('userChoice', 1);
                concat(1);
              } else {
                let obtainedData = [localStorage.getItem('userChoice')];
                const numbers = obtainedData[0].split(',').map(Number);

                if (numbers.indexOf(1) !== -1) {
                  alert('Ten wpis już istnieje');
                  break;
                } else {
                  concat(1);
                }
                obtainedData.push(1);
                localStorage.setItem('userChoice', obtainedData.toString());
              }
              break;
          }
          break;

        case 'optionRand':
          switch (mode) {
            case replaceString:
              chosenNumber = Math.floor(Math.random() * 98 + 2);
              replace(chosenNumber);
              localStorage.setItem('userChoice', chosenNumber);
              break;

            case concatString:
              chosenNumber = Math.floor(Math.random() * 98 + 2);

              if (localStorage.getItem('userChoice') === null) {
                localStorage.setItem('userChoice', chosenNumber);
                concat(chosenNumber);
              } else {
                let obtainedData = [localStorage.getItem('userChoice')];
                const numbers = obtainedData[0].split(',').map(Number);
                if (numbers.indexOf(chosenNumber) !== -1) {
                  alert('ten wpis już istnieje');
                  break;
                } else {
                  concat(chosenNumber);
                }
                obtainedData.push(chosenNumber);
                localStorage.setItem('userChoice', obtainedData.toString());
              }
              break;
          }
      }
    };

    inputs.forEach((input, i) => {
      input.checked
        ? (checkedOption = input.id)
        : i > 1 && checkedOption === undefined
        ? alert('Proszę zaznaczyć jedną z opcji')
        : null;
    });

    button.id === 'replaceButtonId'
      ? switchOption(checkedOption, replaceString)
      : switchOption(checkedOption, concatString);
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => fillThirdSection(button));
  });
};
