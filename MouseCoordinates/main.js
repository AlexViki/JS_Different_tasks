document.querySelector('#test').onmousemove = function(event) {
    event = event || window.event;
    console.log(event);
    var setX = event.offsetX;
    var setY = event.offsetY;
    document.querySelector('#offx').innerHTML = setX;
    document.querySelector('#offy').innerHTML = setY;
    if (setX === 100 && setY === 100){
        alert("100 X 100");
    }
}
