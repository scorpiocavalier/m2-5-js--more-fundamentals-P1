// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const hasGoldClass = btn => btn.classList == 'gold';

const addGoldClass = btn => btn.classList = 'gold';

const removeGoldClass = btn => btn.classList = '';

const toggleColor = (btn, color) => btn.style.backgroundColor = (color == 'gold') ? 'gold' : color;


const handleClick = index => {
    
    let btn = event.target;
    let golden = hasGoldClass(btn);
    
    if(golden) 
        removeGoldClass(btn);
    else {
        addGoldClass(btn);
        toggleColor(btn, 'gold');
    }
    
    switch(index) {
        case 1: 
            btn.style.opacity = golden ? '0' : '1';
            break;
        case 2:
            golden && toggleColor(btn, 'crimson');
            break;
        case 3: 
            golden && toggleColor(btn, 'lightblue');
            break;
        case 4:
            btn.classList = golden && 'jitters';
            break;
        default: 
            break;
    }
}

const handleReset = () => {

    for(let i = 1; i <= 4; i++) {
        let btn = document.querySelector(`#btn-${i}`);

        addGoldClass(btn);
        toggleColor(btn, 'gold');

        if(i == 1)
            btn.style.opacity = '1';
    }
}

const app = () => {

    let reset_btn = document.querySelector('#reset');
    reset_btn.addEventListener('click', handleReset);

    for(let i = 1; i <= 4; i++) {
        let btn = document.querySelector(`#btn-${i}`);
        addGoldClass(btn);
        toggleColor(btn, 'gold');
        btn.addEventListener('click', () => handleClick(i));
    }
}

app();