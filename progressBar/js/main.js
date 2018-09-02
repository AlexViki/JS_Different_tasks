//window.onload = progressBar();

document.onclick = function(event) {
    var valueProgresBar = document.getElementById('valueProgresBar');
    var numberProgressBar = Number(valueProgresBar.value);

    if (numberProgressBar === 0){
        valueProgresBar.style.border = "1px solid red";
    } else if (event.target.id == "btnRunProgresBar") {
        progressBar(valueProgresBar);
    };
};

function progressBar(time) {
    var progress = document.getElementsByTagName('progress')[0];
    var progressData = document.getElementById('progressData');
    var percent = 0;
    time = Math.round(time * 10);
    var timeID = setInterval(function(){
            if (progress.value < 100){
                progress.value++;
                percent++;
                progressData.innerHTML = percent;
                //console.log(progress.value);
            } else if (progress.value == 100) {
                clearInterval(timeID);
                userProgressCallBack();
            }
        },time);
        console.log(progress.value);
}

function userProgressCallBack() {
    document.querySelector(".hiden-block").style.display = "block";
};
