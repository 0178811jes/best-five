document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerField = document.getElementById('budget-player');
    const playerTotalString = playerField.value;
    const playerTotal = parseFloat(playerTotalString);
   
    playerField.value = playerTotal;

    const playerValue = playerTotal * 5 ;
    playerField.value = '';

    //player expenses//

    const expensesElement = document.getElementById('play-expence');
    const expenceTotalString = expensesElement.innerText;
    const expenceTotal = parseFloat(expenceTotalString);
    expensesElement.innerText = playerValue;
   
});

    //total calculate section//

document.getElementById('total-calculate').addEventListener('click', function(){
    //manager value//
    const managerField = document.getElementById('manager-field');
    const managerFieldTotalString = managerField.value;
    const managerFieldTotal = parseFloat(managerFieldTotalString);
    managerField.value = managerFieldTotal;
    managerField.value = '';

    //coach value//
    const coachField = document.getElementById('coach-field');
    const coachFieldTotalString = coachField.value;
    const coachFieldTotal = parseFloat(coachFieldTotalString);
    coachField.value = coachFieldTotal;
    coachField.value = '';

    //player value//
    const expensesElement = document.getElementById('play-expence');
    const expenceTotalString = expensesElement.innerText;
    const expenceTotal = parseFloat(expenceTotalString);
    expensesElement.innerText = expenceTotal;
    playerValue = expenceTotal;

   
    //calculate total element//

    const calculateElement = document.getElementById('btn-calculation');
    const calculateElementTotalString = calculateElement.innerText;
    const calculateElementTotal = parseFloat(calculateElementTotalString);
    calculateElement.innerText = calculateElementTotal;

    const calculatTotalValue = coachFieldTotal + managerFieldTotal + playerValue;
    calculateElement.innerText = calculatTotalValue;
    

})