document.addEventListener("DOMContentLoaded", function() {
    const outputScreen = document.getElementById("output-screen");
    const clearButton = document.getElementById("clear");
    const divideButton = document.getElementById("divide");
    const multiplyButton = document.getElementById("multiply");
    const addButton = document.getElementById("add");
    const subtractButton = document.getElementById("subtract");
    const equalsButton = document.getElementById("equals");
    const numbers = document.querySelectorAll(".calculator button:not(#clear):not(#divide):not(#multiply):not(#subtract):not(#add):not(#equals)");


    clearButton.addEventListener("click", function() {
        outputScreen.value = "";
    });

    
    numbers.forEach(function(button) {
        button.addEventListener("click", function() {
            outputScreen.value += button.textContent;
        });
    });


    divideButton.addEventListener("click", function() {
        outputScreen.value += "/";
    });

    multiplyButton.addEventListener("click", function() {
        outputScreen.value += "*";
    });

    addButton.addEventListener("click", function() {
        outputScreen.value += "+";
    });

    subtractButton.addEventListener("click", function() {
        outputScreen.value += "-";
    });

    
    equalsButton.addEventListener("click", function() {
        try {
            outputScreen.value = eval(outputScreen.value);
        } catch (error) {
            outputScreen.value = "Error";
        }
    });
});