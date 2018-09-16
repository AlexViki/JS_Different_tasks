function intakeCalories () {
    let days = 28;
    let period = 3;
    let totalCalories = 0;
    let tmp = 1;
    let su = 1; // Saturday
    let sa = 1; // Sunday
        
    for (let i = 1; i <= days; i++) {
        if(tmp === period) {
            if(su === 6) {
                totalCalories = totalCalories + 200;
                tmp = 0;
                su = 1;
                sa = 2;
                console.log(i + ":su weekEnd(200) - "  + totalCalories);
            } else if (sa === 7) {
                totalCalories = totalCalories + 200;
                tmp = 0;
                su = 1;
                sa = 2;
                console.log(i + ":sa weekEnd(200) - "  + totalCalories);
            } else if (tmp === period) {
                totalCalories = totalCalories + 300;
                tmp = 0;
                console.log(i + ": week(300) - "  + totalCalories);
            }
        } 
        if (su == 6) su = 0;
        if (sa == 7) sa = 0;
        tmp++;
        su++;
        sa++;
    }
    console.log(totalCalories);
}

intakeCalories();