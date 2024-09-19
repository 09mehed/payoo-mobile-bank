document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputBalance = parseInt(inputCashOut);
    const cashOutPin = document.getElementById('cash-out-pin').value;

    if(cashOutPin === "1234"){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseInt(balance);
        const newBalance = balanceNumber - inputBalance;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('please try again');
    }
})