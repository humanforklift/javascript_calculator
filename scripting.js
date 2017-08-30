//Link all buttons from document to variable
var buttons = document.querySelectorAll(".buttons, span"), buttonStr = "", keys = document.getElementsByTagName("SPAN");
var operators = ["+", "-", "*", "/", "%"];

function display(buttonStr) {

        var screen = document.getElementsByClassName("main-display");
        screen[0].innerHTML = buttonStr;

        /*for(var i = 0; i < buttons.length; i++) {
                var buttonValue = buttons.innerHTML;
                document.getElementById(".screen").innerHTML += buttons[i].onclick.innerHTML;
        }*/

}
/**** TO DO

- Find out difference between AC and CE
- Stop being able to add to buttonStr after length is 25
- Calculator logic
- Stop screen from scrolling
- Make function in the background which stores numbers so far to calculate
- Display running total as more operators are pressed
- If operator has already been pressed, overwrite with other operator
- Find a way to append strings to working area div
- Don't allow 0 to be pressed if display already shows 0

****/

//Clear screen totally and reset buttonStr
function clear() {
        buttonStr = "";
        display("0");
        writeToWorkingArea("");
}

function writeToWorkingArea(str) {
        var screen = document.getElementsByClassName("working-area");
        screen[0].innerHTML = str;
}

function operate(sign) {
        writeToWorkingArea(buttonStr + " " + sign);
        buttonStr = "";
}

for (var i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", function() {
                var buttonValue = this.innerHTML;
                if (buttonValue == "AC") {
                        clear();
                } else if (operators.indexOf(buttonValue) != -1){
                        operate(buttonValue);
                } else {
                buttonStr += buttonValue;
                display(buttonStr);
                }
        });
}