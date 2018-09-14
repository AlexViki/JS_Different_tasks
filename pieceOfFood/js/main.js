let days = 21;
let period = 3;
let eatDay = 0;
let totalCalories = 0;
function takeCalories () {
    for (let i = 1; i <= days; i++;) {
        eatDay++;
        if (period === eatDay) {
            totalCalories = totalCalories + 300;
            eatDay = 0;
        }
    }
    console.log(eatDay);
    console.log(totalCalories);
};

takeCalories();