// pin generate function
function randomPin() {
    let generatedPin = (Math.random() * 10000 + '').split('.')[0];
    let randomPin = document.getElementById('generatedPin');
    if (generatedPin.length < 4) {
        return randomPin();
    }
    else {
        randomPin.value = generatedPin;
    }
}


// input buttons event handler
let input = document.getElementById('buttons');
input.addEventListener('click', function (event) {
    let inputNumber = event.target.innerText;
    let inputPin = document.getElementById('inputPin');
    if (isNaN(inputNumber)) {
        if (inputNumber == "C") {
            inputPin.value = '';
        }
        if (inputNumber == "Del") {
            let afterDel = document.getElementById('inputPin').value.slice(0, - 1);
            document.getElementById('inputPin').value = afterDel;
            return;
        }
    }
    else if(inputPin.value.length == 4){
        return;
    }
    else {
        inputPin.value += inputNumber;
    }
});


// pin match function
function pinMatch() {
    let randomPin = parseInt(document.getElementById('generatedPin').value);
    let inputPin = parseInt(document.getElementById('inputPin').value);
    let actionLeft = document.getElementById('actionLeft');
    if (randomPin == inputPin) {
        pinChecker('rightAlert', 'wrongAlert');
        display('action', 'none');
        document.getElementById('inputPin').value = '';
        actionLeft.innerText = 5;
    }
    else {
        pinChecker('wrongAlert', 'rightAlert');
        display('action', 'block');
        document.getElementById('inputPin').value = '';
        actionLeft.innerText--;
        callAction();
    }
}


// pin checker function
function pinChecker(rightAlert, wrongAlert) {
    display(rightAlert,'block');
    display(wrongAlert,'none');
}


// action handler function
function callAction() {
    if (actionLeft.innerText == 0) {
        display('submitBtn','none')
        display('waiting','block');
        setTimeout(function () {
            display('submitBtn','inline-block')
            display('waiting','none');
            actionLeft.innerText = 5;
        }, 10000);
        return;
    }
}


// display element function
function display(id, condition) {
    document.getElementById(id).style.display = condition;
}