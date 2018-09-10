function showSpesialHtmlSymbol() {
    let symbolNumber = document.getElementById("symbol-number").value;
    symbolNumber = Number(symbolNumber);
    console.log(symbolNumber);
    let tmp = "";
    for(let i = 9900; i <= 10000; i++ ){
        tmp = tmp + "&#" + i + " ";
    }
    document.getElementById('result').innerHTML = tmp;
    document.getElementById('result').innerHTML += "<hr><br>" + "Result: " + "&#" + symbolNumber;
};

document.getElementById("btn-show").addEventListener('click', showSpesialHtmlSymbol);
