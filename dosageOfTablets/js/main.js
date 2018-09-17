document.getElementById('run-calculate-period').addEventListener('click', calculatePeriod);

function calculatePeriod() {
    let period = document.getElementById('period-number').value;
    let days = document.getElementById('period-days').value;
    let result = document.getElementById('result');
    let text = 'You need: ';
    let totalCalories = 0;
    let tmp = 1;
    let weekEnd = 1;
    period = +period;

    for (let i = 1; i <= days; i++) {
        if(tmp === period) {
            if(weekEnd === 6 || weekEnd === 7) {
                totalCalories = totalCalories + 2;
                tmp = 0;
                console.log(i + ":su weekEnd(200) - "  + totalCalories);

            } else if (tmp === period) {
                totalCalories = totalCalories + 1;
                tmp = 0;
                console.log(i + ": week(300) - "  + totalCalories);
            }
        } 
        if (weekEnd === 7) weekEnd = 0;
        tmp++;
        weekEnd++;
    }
    console.log(totalCalories);
    result.innerHTML += text + totalCalories + ' pills.' + '<br>';
}
//calculatePeriod();