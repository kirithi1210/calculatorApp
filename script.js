const display = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

let shouldResetDisplay = false;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        if (shouldResetDisplay) {
            display.value = '';
            shouldResetDisplay = false;
        }

        if (value === '=') {
            try {
                const result = eval(display.value);
                display.value = Number.isInteger(result) ? result : result.toFixed(2);
                shouldResetDisplay = true;
            } catch {
                display.value = 'Error';
                shouldResetDisplay = true;
            }
        } else if (value === 'AC') {
            display.value = '';
        } else if (value === 'DE') {
            display.value = display.value.slice(0, -1);
        } else if (value === '%') {
            try {
                display.value = parseFloat(display.value) / 100;
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});
