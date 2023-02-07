//Catch dispiay
const display = document.getElementById('display');

// Change Node list to Array
const buttons = Array.from(document.querySelectorAll('.button'));
console.log(buttons);
console.log(document.querySelectorAll('.button'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.innerText)
        let value = e.target.innerText;
        switch (value) {
            case 'AC':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    if (display.innerText === '') {
                        display.innerText = ' ';
                    } else {
                        display.innerText = eval(display.innerText);
                    }
                    break;
                } catch (error) {
                    display.innerText = 'Error!! ';
                    break;
                }

            default:
                display.innerText += value;
                break;
        }
    })
})