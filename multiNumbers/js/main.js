document.querySelector('#btn-run-multi').addEventListener('click', () => {
    console.log(1111);
    let multi = 1;
    let num = 10;
    let doc = document.querySelector('#result');
    let str = "";

    for(let i = 1; i <= num; i++){
        str = multi;
        multi = multi * i;
        console.log("N" + i + " = " + multi);
        doc.innerHTML += i + " x " + str + " = " + multi + "<br>";
    };
})