// set date for cheking
getTimer(2018,9,4,12,00,00);

function getTimer(year, month, date, hour, minut, second) {
    var curentTime = new Date();
    var gettingTime = new Date(year, (month-1), date, hour, minut, second);

    if (gettingTime > curentTime) {
        console.log("can use");
        document.getElementById('id').innerHTML = "can use";
    } else {
        alert("need to pay!!!");
    }
    //console.log(gettingTime.getTime());
    //console.log(curentTime.getTime());
};