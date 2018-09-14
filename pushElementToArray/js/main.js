let firstElement = document.querySelector("#first-element");
let lastElement = document.querySelector("#last-element");
let btnRun = document.querySelector('#btn-run');
let result = document.querySelector('#result');

btnRun.addEventListener('click', () => {
    let arr = [];
    let newArr = [];
    if (firstElement.value == "" || lastElement.value == "" ) {
        firstElement.style.border = "1px solid red";
        lastElement.style.border = "1px solid red";
    } else {
        firstElement.style.border = "1px solid grey";
        lastElement.style.border = "1px solid grey";
    }
    arr.push(+firstElement.value);
    arr.push(+lastElement.value);

    if (arr[1]<=arr[0]) {
        for (let i = arr[0]; i >= arr[1]; i--) {
            newArr.push(i);
        }
    } else {
        for (let i = arr[0]; i <= arr[1]; i++ ) {
            newArr.push(i);
        }
    }
    console.log(newArr);
    result.innerHTML = newArr;
});
