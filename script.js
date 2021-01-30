
function randomPin(){
    let generatedPin = Math.floor(Math.random() * 10000);
    let randomPin = document.getElementById('generatedPin');
    return randomPin.value = generatedPin;
}

let number = document.getElementsByClassName('button')

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e){
        let digitValue = e.target.innerText;
        let digit = parseInt(digitValue);
        let inputPin = document.getElementById('inputPin');
        inputPin.value += digit;
        if(digitValue == "C"){
            document.getElementById('inputPin').value = '';
            return;
        }
        // if(digitValue == "<"){
        //     console.log(typeof document.getElementById('inputPin').value);
        //     let preBack = document.getElementById('inputPin').value.split('');
        //     if(preBack.length == 1){
        //         document.getElementById('inputPin').value = 0;
        //         return;
        //     }
        //     let afterBack = preBack.pop();
        //     let afterBack = preBack.slice(0, preBack.length - 1).join('');
        //     document.getElementById('inputPin').value = afterBack;
        //     return;
        // }
    });    
}


function pinMatch() {
    let randomPin = parseInt(document.getElementById('generatedPin').value);
    let inputPin = parseInt(document.getElementById('inputPin').value);
    let actionLeft = document.getElementById('actionLeft');
    if(randomPin == inputPin){
        document.getElementById('rightAlert').style.display = "block";
        document.getElementById('wrongAlert').style.display = "none";
        document.getElementById('action').style.display = "none"
        actionLeft.innerText = 5;
    }
    else{
        document.getElementById('wrongAlert').style.display = "block";
        document.getElementById('rightAlert').style.display = "none";
        document.getElementById('action').style.display = "block"
        actionLeft.innerText--;
        if (actionLeft.innerText == 0) {
            document.getElementById('submitBtn').disabled = true;
            return;
        }
    }
}

