document.getElementById('run-calculate-period').addEventListener('click', calculatePeriod);

function calculatePeriod() {
    let period = document.getElementById('period-number').value;
    let days = document.getElementById('period-days').value;
    let result = document.getElementById('result');
    let workdayPills = document.getElementById('workday-number-pills').value
    let weekEndPills = document.getElementById('weekend-number').value
    let text = 'You need: ';
    let totalPills = 0;
    let tmp = 1;
    let weekEnd = 1;
    period = +period;
    workdayPills = +workdayPills;
    weekEndPills = +weekEndPills;

    for (let i = 1; i <= days; i++) {
        if(tmp === period) {
            if(weekEnd === 6 || weekEnd === 7) {
                totalPills = totalPills + weekEndPills;
                tmp = 0;
                console.log(i + ": weekEnd(" + weekEndPills + ") = "  + totalPills);

            } else if (tmp === period) {
                totalPills = totalPills + workdayPills;
                tmp = 0;
                console.log(i + ": week(" + workdayPills + ") = "  + totalPills);
            }
        } 
        if (weekEnd === 7) weekEnd = 0;
        tmp++;
        weekEnd++;
    }
    console.log(totalPills);
    result.innerHTML += text + totalPills + ' pills.' + '<br>';
}
//calculatePeriod();