// step 1
document.getElementById('login-button').addEventListener('click', function (event){
    event.preventDefault();
    // step 2
    const phoneNumber = document.getElementById('amount-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // step 3
    if(pinNumber === '1234'){
        // step-4
        const balance = document.getElementById('balance').innerText;
        // step- 5
        const moneyNumber = parseInt(phoneNumber);
        const balanceNumber = parseInt(balance);
        const newBalance = moneyNumber + balanceNumber;
        // step- 6
        document.getElementById('balance').innerText = newBalance;
    }else{
        console.log('please try again');
    }
})