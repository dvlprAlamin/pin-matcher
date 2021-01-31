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


// input button event handler
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
    else {
        inputPin.value += inputNumber;
    }
});



function pinMatch() {
    let randomPin = parseInt(document.getElementById('generatedPin').value);
    let inputPin = parseInt(document.getElementById('inputPin').value);
    let actionLeft = document.getElementById('actionLeft');
    if (randomPin == inputPin) {
        pinChecker('rightAlert', 'wrongAlert','none')
        actionLeft.innerText = 5;
    }
    else {
        pinChecker('wrongAlert', 'rightAlert', 'block')
        actionLeft.innerText--;
        // if (actionLeft.innerText == 0) {
        //     let submit = document.getElementById('submitBtn');
        //     // submit.disabled = true;
        //     submit.style.display = 'none'
        //     document.getElementById('action').innerText = 'Wait for 15 seconds';
        //     setTimeout(function () {
        //         // submit.disabled = false;
        //         submit.style.display = 'inline-block';
        //         actionLeft.innerText = 5;
        //         document.getElementById('action').innerText = actionLeft.innerText +' '+ 'try left';
        //     }, 5000);
        //     return;
        // }
        callAction();
    }
}
function pinChecker(rightAlert, wrongAlert, actionLeft) {
    display(rightAlert,'block');
    display(wrongAlert,'none');
    display('action',actionLeft);
    // document.getElementById(rightAlert).style.display = "block";
    // document.getElementById(wrongAlert).style.display = "none";
    // document.getElementById('action').style.display = actionLeft;
}
function callAction() {
    if (actionLeft.innerText == 0) {
        let submit = document.getElementById('submitBtn');
        // submit.disabled = true;
        submit.style.display = 'none';
        display('waiting','block');
        setTimeout(function () {
            // submit.disabled = false;
            submit.style.display = 'inline-block';
            display('waiting','none');
            actionLeft.innerText = 5;
        }, 5000);
        return;
    }
}

function display(id, display) {
    document.getElementById(id).style.display = display;
}