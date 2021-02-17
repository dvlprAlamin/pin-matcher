const inputPin = document.getElementById('inputPin');
const randomPin = document.getElementById('generatedPin');
// pin generate function
const pinGenerate = () => {
    let generatedPin = (Math.random() * 10000 + '').split('.')[0];
    generatedPin.length < 4 ? pinGenerate() : randomPin.value = generatedPin;
}


// input buttons event handler
let input = document.getElementById('buttons');
input.addEventListener('click', function (event) {
    let inputNumber = event.target.innerText;
    if (isNaN(inputNumber)) {
        if (inputNumber == "C") {
            inputPin.value = '';
        }
        if (inputNumber == "Del") {
            let afterDel = inputPin.value.slice(0, - 1);
            inputPin.value = afterDel;
            return;
        }
    }
    else if (inputPin.value.length == 4) {
        return;
    }
    else {
        inputPin.value += inputNumber;
    }
});

const submitBtn = document.getElementById("submitBtn");
// enter key event handler
inputPin.addEventListener("keydown", (e) => e.key === "Enter" && submitBtn.click());


// pin match function
const pinMatch = () => {
    let actionLeft = document.getElementById('actionLeft');
    if (randomPin.value === inputPin.value) {
        
        pinChecker('rightAlert', 'wrongAlert');
        display('action', 'none');
        inputPin.value = '';
        actionLeft.innerText = 5;
    }
    else {
        pinChecker('wrongAlert', 'rightAlert');
        display('action', 'block');
        inputPin.value = '';
        actionLeft.innerText--;
        callAction();
    }
}


// pin checker function
function pinChecker(rightAlert, wrongAlert) {
    display(rightAlert, 'block');
    display(wrongAlert, 'none');
}

const waitingTime = document.getElementById('waiting-time');
// action handler function
const callAction = () => {
    if (actionLeft.innerText == 0) {
        display('submitBtn', 'none')
        display('waiting', 'block');
        setTimeout(() => {
            display('submitBtn', 'inline-block')
            display('waiting', 'none');
            actionLeft.innerText = 5;
            clearInterval(interval);
            waitingTime.innerText = 10;
        }, 10000);
        const interval = setInterval(() => waitingTime.innerText--, 1000);
    }
}


// display element function
function display(id, condition) {
    document.getElementById(id).style.display = condition;
}

const toggler = () => {

}