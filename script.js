
function randomPin() {
    let generatedPin = (Math.random() * 10000 + '').split('.')[0];
    let randomPin = document.getElementById('generatedPin');
    if (generatedPin.length < 4) {
        return randomPin();
    }
    else{
        randomPin.value = generatedPin;
    }
}

let input = document.getElementById('buttons');
input.addEventListener('click', function (event) {
    let inputNumber = event.target.innerText;
    let inputPin = document.getElementById('inputPin');
    if (isNaN(inputNumber)) {
        if (inputNumber == "C") {
            inputPin.value = '';
        }
        if (inputNumber == "Del") {
            let preDel = document.getElementById('inputPin').value.split('')
            let afterDel = preDel.slice(0, preDel.length - 1).join('');
            document.getElementById('inputPin').value = afterDel;
            return;
        }
    }
    else {
        inputPin.value += inputNumber;
    }
});











// let number = document.getElementsByClassName('button')

// for (let i = 0; i < number.length; i++) {
//     number[i].addEventListener('click', function(e){
//         let digitValue = e.target.innerText;
//         let digit = parseInt(digitValue);
//         let inputPin = document.getElementById('inputPin');
//         inputPin.value += digit;
//         if(digitValue == "C"){
//             document.getElementById('inputPin').value = '';
//             return;
//         }
//         if(digitValue == "Del"){
//             let preBack = document.getElementById('inputPin').value.split('')
//             if(preBack.length == 1 || preBack.length == 0 ){
//                 document.getElementById('inputPin').value = 999;
//                 return;
//             }
//             let afterBack = preBack.slice(0, preBack.length - 4).join('');
//             document.getElementById('inputPin').value = afterBack;
//             return;
//         }
//     });    
// }


function pinMatch() {
    let randomPin = parseInt(document.getElementById('generatedPin').value);
    let inputPin = parseInt(document.getElementById('inputPin').value);
    let actionLeft = document.getElementById('actionLeft');
    if (randomPin == inputPin) {
        document.getElementById('rightAlert').style.display = "block";
        document.getElementById('wrongAlert').style.display = "none";
        document.getElementById('action').style.display = "none"
        actionLeft.innerText = 5;
    }
    else {
        document.getElementById('wrongAlert').style.display = "block";
        document.getElementById('rightAlert').style.display = "none";
        document.getElementById('action').style.display = "block"
        actionLeft.innerText--;
        if (actionLeft.innerText == 0) {

            document.getElementById('submitBtn').disabled = true;
            setTimeout(function () {
                document.getElementById('submitBtn').disabled = false;
                actionLeft.innerText = 5;
            }, 5000);
            return;
        }
    }
}

