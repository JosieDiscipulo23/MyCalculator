let numbers = [];
        
function insertNumber() {
    let numInput = document.getElementById("num");
    let num = parseInt(numInput.value);
    numbers.push(num);
    displayNumbers();
}

function deleteNumber() {
    numbers.pop();
    displayNumbers();
}

function displayNumbers() {
    document.getElementById("numbers").textContent = numbers.join(", ");
    document.getElementById("sum").textContent = numbers.reduce((a, b) => a + b, 0);
    document.getElementById("highest").textContent = Math.max(...numbers);
    document.getElementById("lowest").textContent = Math.min(...numbers);
    document.getElementById("even").textContent = numbers.filter(num => num % 2 === 0).length;
    document.getElementById("odd").textContent = numbers.filter(num => num % 2 !== 0).length;
    document.getElementById("count").textContent = numbers.length;
}