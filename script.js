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
        let expression = display.value
            .replace(/Math.sqrt\(/g, "Math.sqrt")
            .replace(/Math.pow\(/g, "Math.pow")
            .replace(/Math.sin\(/g, "Math.sin")
            .replace(/Math.cos\(/g, "Math.cos")
            .replace(/Math.tan\(/g, "Math.tan")
            .replace(/Math.log10\(/g, "Math.log10")
            .replace(/Math.exp\(/g, "Math.exp")
            .replace(/x\^y/g, "**");

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
