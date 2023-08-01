let userId = localStorage.getItem('userId'); 
let balance = localStorage.getItem('balance'); 
balance = parseInt(balance); 

let welcomeUser = document.querySelector('h1');
    welcomeUser.textContent = "¡Hola, " + userId + "!";

//Mostrar saldo según el usuario
const checkBalance = document.getElementById('check-balance');
    checkBalance.textContent = balance;



const btnDepositMoney = document.getElementById('btn-deposit-money');
const inpDepositMoney = document.getElementById('input-dm');

btnDepositMoney.addEventListener('click', (event) => {
    
    if (inpDepositMoney.value == "") {
        event.preventDefault();
    } else {
        const numDepositMoney = parseInt(inpDepositMoney.value);
        let newBalance = parseInt(balance) + numDepositMoney;
        inpDepositMoney.value = "";
        if (newBalance <= 990) {
            balance = newBalance;
            checkBalance.textContent = balance;
        } else {
            alert("La cuenta no debe de tener más de $990");
        }
    }
})

//Función para retirar dinero
const btnWithdrawMoney = document.getElementById('btn-withdraw-money');
const inpWithdrawMoney = document.getElementById('input-wm');

btnWithdrawMoney.addEventListener('click', (event) => {
    if (inpWithdrawMoney.value == "") {
        event.preventDefault();
    } else {
        const numDrawMoney = parseInt(inpWithdrawMoney.value);
        let newBalance = parseInt(balance) - numDrawMoney;
        inpWithdrawMoney.value = "";
        if (newBalance >= 10) {
            balance = newBalance;
            checkBalance.textContent = balance;
        } else {

            alert("Como regla de negocio, una cuenta no debe de tener menos de $10");   
        }
    }
})