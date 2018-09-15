let days = 21;
let period = 3;
let eatDay = 0;
let totalCalories = 0;
let tmp = 0;
let su = 0; // Saturday
let sa = 0; // Sunday
function takeCalories () {
    for (let i = 1; i <= days; i++) {
        tmp++;
        su++;
        sa++;
        if(tmp === period && su === 6 ){
            totalCalories = totalCalories + 200;
            tmp = 0;
            su = 0;
            sa = 1;
        } else if (tmp === period & sa === 7) {
            totalCalories = totalCalories + 200;
            tmp = 0;
            sa = 0;
        } else if (tmp === period) {
            totalCalories = totalCalories + 300;
            tmp = 0;
        }
    }
    //console.log(eatDay);
    console.log(totalCalories);
};

takeCalories();