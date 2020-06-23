// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const handleClick = index => {
    switch(index) {
        case 1:
            event.target.style.opacity = '0';
            break;
        case 2:
            event.target.style.backgroundColor = 'crimson';
            break;
        case 3:
            event.target.style.backgroundColor = 'lightblue';
            break;
        case 4:
            event.target.classList.add('jitters');
        default: 
            break;
    }
}

const app = () => {
    
    for(let i = 1; i <= 4; i++) {
        let btn = document.querySelector(`#btn-${i}`);
        btn.addEventListener('click', () => handleClick(i));
    }
}

app();