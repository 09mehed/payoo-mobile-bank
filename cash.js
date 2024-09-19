// step 1
document.getElementById('cash-out').addEventListener('click', function (event){
    event.preventDefault();
    // step 2
    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputNumber = parseInt(inputCashOut);
    const pinNumber = document.getElementById('cash-out-pin').value;

    // step 3
    if(pinNumber === '1234'){
        // step-4
        const balance = document.getElementById('amount-balance').innerText;
        // step- 5
        const balanceNumber = parseInt(balance);
        const newBalance = balanceNumber - inputNumber;
        // step- 6
        document.getElementById('amount-balance').innerText = newBalance;
    }else{
        console.log('please try again');
    }
})