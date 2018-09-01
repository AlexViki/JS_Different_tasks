window.onload = progressBar();

function progressBar() {
    console.log("11111");
    var progress = document.getElementsByTagName('progress')[0];
    var progressData = document.getElementById('progressData');
    var percent = 0;
    var timeID = setInterval(function(){
            if (progress.value < 100){
                progress.value += 1;
                percent += 1;
                document.getElementById('progressData').innerHTML = percent;
                console.log(progress.value);
            } else if (progress.value == 100) {
                clearInterval(timeID);
            }
        },50);
        console.log(progress.value);
}
