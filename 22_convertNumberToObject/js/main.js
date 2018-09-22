document.querySelector('#btn-run-convert-number').addEventListener('click', ()=>{
    convertToNumber();
});

let convertToNumber = () => {
    let inputNumber = document.querySelector('#input-number').value;
    let cutting  = new CutNumber(inputNumber);
    console.log(cutting );
    let result = document.querySelector('#result');
    result.innerHTML = 'The typeof: ' + typeof cutting  + ';<br>';
    for (let i in cutting ) {
        console.log(cutting [i]);
        result.innerHTML += 'The key is: ' + i 
            + '; the value is: ' + cutting [i] + '; <br>';
    }
    
}
// конструктор для создание нового обекта
function CutNumber (num) {
    if (num > 0 && num < 999 ) {
        nnn = Math.floor(num / 100);
        num = num % 100;
        nn = Math.floor(num / 10);
        num = num % 10;
        n = num;
    } else {
        alert('Type the corect number');
    }
    this.nnn = nnn;
    this.nn = nn;
    this.n = n;
}