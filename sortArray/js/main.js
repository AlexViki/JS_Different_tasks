document.getElementById('btn-run-sort').addEventListener('click', function(){
    let dataArr = (document.querySelector('#data-array').textContent).split(', ');
    function toNum (arr){
        let out = [];
        for (let i = 0; i < arr.length; i++){
            arr[i] = parseFloat(arr[i]);
            if(arr[i]>=0){
                out.push(arr[i])
            }
        }
        out.sort(function(a,b){ return (a - b); });
        return out;
    }
    console.log(toNum(dataArr));
    document.getElementById('result-of-sort').innerHTML = "The sort array: " +
     toNum(dataArr);
})