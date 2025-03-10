let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        if(display.value.includes('Math')) {
            display.value = new Function('return ' + display.value)();
        }
    } catch (error) {
        display.value = 'Error';
    }
}
