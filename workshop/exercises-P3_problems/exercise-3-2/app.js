// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const containsGoldClass = btn => btn.classList == 'gold';

const addGoldClass = btn => btn.classList = 'gold';

const removeGoldClass = btn => btn.classList = '';

const toggleColor = (btn, color) => btn.style.backgroundColor = (color == 'gold') ? 'gold' : color;

const handleClick = index => {
    
    let btn = event.target;
    let golden = containsGoldClass(btn);

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

const app = () => {
    for(let i = 1; i <= 4; i++) {
        let btn = document.querySelector(`#btn-${i}`);
        addGoldClass(btn);
        toggleColor(btn, 'gold');
        btn.addEventListener('click', () => handleClick(i));
    }
}

app();