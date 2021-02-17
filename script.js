// pin generate function
const randomPin = document.getElementById('generatedPin');
const pinGenerate = () => {
    let generatedPin = (Math.random() * 10000 + '').split('.')[0];
    generatedPin.length < 4 ? pinGenerate() : randomPin.value = generatedPin;
}


// input buttons event handler
const inputPin = document.getElementById('inputPin');
const input = document.getElementById('buttons');
input.addEventListener('click', function (event) {
    let inputNumber = event.target.innerText;
    if (isNaN(inputNumber)) {
        inputNumber === "C" && (inputPin.value = '');
        inputNumber === "Del" && (inputPin.value = inputPin.value.slice(0, - 1));
    }
    else if (inputPin.value.length === 4) return;
    else inputPin.value += inputNumber;
});


// enter key event handler
const submitBtn = document.getElementById("submitBtn");
inputPin.addEventListener("keydown", (e) => e.key === "Enter" && submitBtn.click());


// pin match function
const action = document.getElementById('action');
const actionLeft = document.getElementById('actionLeft');
const pinMatch = () => {
    if (randomPin.value === inputPin.value) {
        alert('rightAlert');
        action.style.display = 'none';
        actionLeft.innerText = 5;
    }
    else {
        alert('wrongAlert');
        action.style.display = 'block';
        actionLeft.innerText--;
        callAction();
    }
    inputPin.value = '';
}


// action handler function
const waitingTime = document.getElementById('waiting-time');
const callAction = () => {
    if (actionLeft.innerText === '0') {
        submitBtnToggler()
        setTimeout(() => {
            submitBtnToggler()
            actionLeft.innerText = 5;
            clearInterval(interval);
            waitingTime.innerText = 10;
        }, 10000);
        const interval = setInterval(() => waitingTime.innerText--, 1000);
    }
}

// submit button & waiting time toggler
const submitBtnToggler = () => {
    document.getElementById('submitBtn').classList.toggle('d-none');
    document.getElementById('waiting').classList.toggle('d-none')
};

// alert message handler
const alert = id => {
    document.getElementById(id).style.display = 'block';
    setInterval(() => document.getElementById(id).style.display = 'none', 2000);
};