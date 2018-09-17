document.querySelector('#calculate').addEventListener('click', function(){
    let currentWeight = document.querySelector('#current-weight').value;
    let expectedWeight = document.querySelector('#expected-weight').value;
    let result = document.querySelector("#result");
    let result2 = document.querySelector("#result2");
    let valueLostWeight = 300;

    currentWeight = currentWeight * 1000;
    expectedWeight = expectedWeight * 1000;

    console.log( typeof currentWeight );

    if (expectedWeight > currentWeight) {
        alert("expected weight can not be bigger then curent");
    } else {
        for (var i = 1; currentWeight >= expectedWeight; i++ ) {
            currentWeight = currentWeight - valueLostWeight;
            console.log(i + " : " + currentWeight);
            result.innerHTML += "day: " + i + 
                            "; current weight = " + 
                            currentWeight + "<br>";
        }
        result2.innerHTML = "You need " + i + " days!"
    }
    
})