let result = document.querySelector('#result');

document.getElementById('run-calculate').addEventListener('click', ()=>{
    setTimeout(calculatePi, 100);
    //result.innerHTML = textResult;
});

let PI = 0;
let number_1 = 1;
let number_2 = 3;

//calculatePi();

function calculatePi() {
    PI += (4/number_1) -(4/number_2);
    number_1 = number_1 + 4;
    number_2 = number_2 + 4;
    console.log(PI);
    setTimeout(calculatePi, 500);
    result.innerHTML = PI;
};