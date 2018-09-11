document.getElementById('inputNumber').addEventListener('change', function() {
    let inputNumber = Number(this.value);
    let tmp = 0;
    for(let i = 0; i < inputNumber; i++){
        tmp = tmp + i;
    }
    console.log(tmp);
    document.getElementById('result').innerHTML = tmp;

})