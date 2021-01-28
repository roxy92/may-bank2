// hide login area and showing bank area by clicking enter

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    // hide
    const hideArea = document.getElementById('login-area');
    hideArea.style.display = 'none';

    // show
    const showArea = document.getElementById('bank-area');
    showArea.style.display = 'block';
})


// deposit

const depositBtn = document.getElementById('deposit-in-btn');
depositBtn.addEventListener('click', () => {
    add('deposit-in', 'deposit-amount', 'warning-text');
    add('deposit-in', 'balance-amount');

    warning('deposit-in', 'warning-text');
    warningNumber('deposit-in', 'warning-text');

    emptyValue('deposit-in');
});

// withdraw

const withdrawBtn = document.getElementById('withdraw-in-btn');
withdrawBtn.addEventListener('click', () => {
    add('withdraw-in', 'withdraw-amount');
    deducate('withdraw-in', 'balance-amount');

    warning('withdraw-in', 'warning-text-2');
    warningNumber('withdraw-in', 'warning-text-2');

    emptyValue('withdraw-in');
});

function emptyValue(id) {
    target = document.getElementById(id);
    target.value = '';
}

function add(id, addthen) {
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);

    const addTo = document.getElementById(addthen).innerText;
    const addToNumber = parseFloat(addTo);

    const totalValue = inputNumber + addToNumber;
    if (input !== '' && Number.isNaN(inputNumber) == false) {
        document.getElementById(addthen).innerText = totalValue;
    }
}

function deducate(id, deduct) {
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);

    const deductTo = document.getElementById(deduct).innerText;
    const deductToNumber = parseFloat(deductTo);

    const totalValue = deductToNumber - inputNumber;
    if (input !== '' && Number.isNaN(inputNumber) == false) {
        document.getElementById(deduct).innerText = totalValue;
    }
}

function warning(id, warnTo) {
    const element = document.getElementById(id).value;
    const warnToElement = document.getElementsByClassName(warnTo);


    for (var i = 0; i < warnToElement.length; i++) {
        if (element == '') {
            warnToElement[i].innerText = "Input field can't be empty";
        } else {
            warnToElement[i].innerText = '';
        }
    }
}


function warningNumber(id, warnTo) {
    input = document.getElementById(id).value;
    const warnToElement = document.getElementsByClassName(warnTo);

    for (var i = 0; i < warnToElement.length; i++) {
        if (isNaN(input) == true) {
            warnToElement[i].innerText = 'Please input number';
        } else {
            warnToElement[i].innerText = '';
        }
    }
}