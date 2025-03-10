let display = document.getElementById('display');

function appendValue(value) {
    if (value === 'Math.sqrt(' || value === 'Math.sin(' || value === 'Math.cos(' || 
        value === 'Math.tan(' || value === 'Math.log10(' || value === 'Math.exp(' || 
        value === 'Math.pow(') {
        display.value += value + '(';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value
            .replace(/√/g, "Math.sqrt")
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/tan/g, "Math.tan")
            .replace(/log/g, "Math.log10")
            .replace(/exp/g, "Math.exp")
            .replace(/x\^y/g, "**");

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

