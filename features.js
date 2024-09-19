document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
});