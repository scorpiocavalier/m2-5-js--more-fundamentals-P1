// Exercise 3-1
// ----------

const btnList = document.querySelector('#btn-list');

const handleClick = (e) => {
  const btnId = e.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case 'btn-1':
      btnElement.style.opacity = 0;
      break;
    case 'btn-2':
      btnElement.style.background = 'crimson';
      break;
    case 'btn-3':
      btnElement.style.background = 'lightblue';
      break;
    case 'btn-4':
      btnElement.classList.add('jitters');
      break;
    default:
      break;
  }
};

btnList.addEventListener('click', handleClick);
