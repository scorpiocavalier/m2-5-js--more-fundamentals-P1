// Exercise 3-3
// ----------

const btnList = document.querySelector('#btn-list');

// Moved the init of the buttons into the reset function and am calling it after declaration.
const handleReset = () => {
  for (let id = 1; id < 5; id++) {
    // target the dom element
    const initButton = document.getElementById(`btn-${id}`);

    // explicitely set the opacity and backgroundColor.
    initButton.style.opacity = '100';
    initButton.style.backgroundColor = 'gold';

    // need to remove the 'jitters' class if it's there
    if (id === 4 && initButton.classList.length > 0) {
      initButton.classList.remove('jitters');
    }
  }
};
// Do the initializing of the buttons
handleReset();

const toggleColor = (id, color) => {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  btnElement.style.backgroundColor = currentColor === 'gold' ? color : 'gold';
};

const handleClick = (e) => {
  const btnId = e.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case 'btn-1':
      btnElement.style.opacity =
        btnElement.style.opacity === '100' ? '0' : '100';
      break;
    case 'btn-2':
      toggleColor(btnId, 'crimson');
      break;
    case 'btn-3':
      toggleColor(btnId, 'lightblue');
      break;
    case 'btn-4':
      btnElement.classList.toggle('jitters');
      break;
    case 'reset':
      handleReset();
      break;
    default:
      break;
  }
};

btnList.addEventListener('click', handleClick);
