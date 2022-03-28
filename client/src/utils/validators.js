import styles from '../components/CardForm/CardForm.module.css'
const DB_SERVER = 'http://localhost:4000';

const cardNumberEtalon = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
const amountEtalon = /\d+/;

const regDigits = /\d/;

export function dateValidation(dateInput) {
    const labels = document.querySelectorAll('.label');

    labels[1].style.color = 'gray';
    labels[1].textContent = 'Expiration Date';
    
    let dateString = dateInput.value;
    const lastSymbol = dateString[dateString.length - 1];

    if (regDigits.test(lastSymbol)) {
        if (dateString.length === 1 && parseInt(dateString[0]) > 1) dateString = '';
        if (dateString.length === 2 && parseInt(dateString[0]) === 1)
            if (parseInt(dateString[1]) > 2) dateString = dateString[0];
        if (dateString.length === 2) dateString = `${dateString}/`;
        if (dateString.length >= 7) dateString = dateString.slice(0, 7);
    }   
    else dateString = dateString.slice(0, dateString.length - 1);
    dateInput.value = dateString;
}

export function cardNumberValidation(cardNumberInput){
    const labels = document.querySelectorAll('.label');

    labels[0].style.color = 'gray';
    labels[0].textContent = 'Card number';

    const cardNumberString = cardNumberInput.value;
    const lastSymbol = cardNumberString[cardNumberString.length - 1];

    if (regDigits.test(lastSymbol)) {
        if (cardNumberString.length === 4
            || cardNumberString.length === 9 
            || cardNumberString.length === 14) cardNumberInput.value = `${cardNumberString} `;
        if (cardNumberString.length >= 19) cardNumberInput.value = cardNumberString.slice(0, 19);
    }   
    else cardNumberInput.value = cardNumberString.slice(0, cardNumberString.length - 1)
}

export function CVVValidation(CVVInput){
    const labels = document.querySelectorAll('.label');

    labels[2].style.color = 'gray';
    labels[2].textContent = 'CVV';

    const CVVString = CVVInput.value;
    const lastSymbol = CVVString[CVVString.length - 1];

    if (regDigits.test(lastSymbol)) {
        if (CVVString.length >= 3) CVVInput.value = CVVString.slice(0, 3);
    }   
    else CVVInput.value = CVVString.slice(0, CVVString.length - 1)
}

export function amountValidation(amountInput){
    const labels = document.querySelectorAll('.label');

    labels[3].style.color = 'gray';
    labels[3].textContent = 'Amount';

    const amountString = amountInput.value;
    const lastSymbol = amountString[amountString.length - 1];

    if (!regDigits.test(lastSymbol)) amountInput.value = amountString.slice(0, amountString.length - 1)
}

export async function ValidateAndSend(){

    const now = new Date();
    let dataToSend = {}
    let errors = new Array(4);

    const inputs = document.querySelectorAll(`.${styles.input}`);
    const cardNumber = inputs[0].getElementsByTagName('input')[0].value;
    const date = inputs[1].getElementsByTagName('input')[0].value;
    const CVV = inputs[2].getElementsByTagName('input')[0].value;
    const amount = inputs[3].getElementsByTagName('input')[0].value;

    cardNumberEtalon.test(cardNumber) ? dataToSend.cardNumber = cardNumber : errors[0] = 'Wrong card format';
    now.getFullYear() - 3 <= parseInt(date.slice(3)) && parseInt(date.slice(3)) <= now.getFullYear() + 3
        ? dataToSend.expirationDate = date
        : errors[1] = 'Wrong date format';
    CVV.length === 3 ? dataToSend.CVV = CVV : errors[2] = "Wrong CVV format";
    amountEtalon.test(amount) ? dataToSend.amount = amount : errors[3] = "Wrong format of amount";

    if (Object.keys(dataToSend).length === 4) {
        const res = await fetch(`${DB_SERVER}/save`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(dataToSend)
        }).then((res) => { return res.text() });
        console.log(res);
        if (res != 'failed') document.location.replace('/thanks-for-payment');
    }
    else {
        const labels = document.querySelectorAll('.label');
        for (let i in errors) {
            if (!!errors[i]) {
                labels[i].textContent = errors[i];
                labels[i].style.color = 'rgb(255,100,100)';
            }
        }
    }
}