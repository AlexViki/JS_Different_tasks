let aboutMe = '';

$(document).ready(() => {
   $(document).on('keydown', startCollect); 
});

let startCollect = (e) => {
    if (e.key == 's'){
        $(document).off('keydown', startCollect);
        $(document).on('keydown', collectSymbol);
        console.log('start to collect symbols');
    }
}

let collectSymbol = (e) => {
    console.log(e.key);
    if (e.key == ' ' || e.key == 'Escape'){
        stopCollect();
    } else {
        aboutMe += e.key;
        if (aboutMe == 'alex'){
            console.log(aboutMe);
            $('#exampleModal').modal({
                show: true
              });
        }
    }
}

let stopCollect = () => {
    console.log('Stop collect symbols!!!');
    aboutMe = '';
    $(document).off('keydown', collectSymbol);
    $(document).on('keydown', startCollect);
}