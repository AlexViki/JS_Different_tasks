$(document).ready(function() {
  //getRate();
  //getHistoryRate();
  $('input[type="date"]').on('input', getHistoryRate);
});

function getRate() {
  //https://api.coindesk.com/v1/bpi/currentprice.json
  $.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
      data = JSON.parse(data);
      console.log(data);
      document.getElementById('id-1').innerHTML = data;
    }
  )
};


function getHistoryRate() {
  //https://api.coindesk.com/v1/bpi/historical/close.json
  $.get(
    "https://api.coindesk.com/v1/bpi/historical/close.json",
    {
      "start": $('#start').val(),
      "end": $('#end').val()
    },
    function(data) {
      data = JSON.parse(data);
      console.log(data);
      data = data.bpi;
      console.log(data);
      document.getElementById('id-2').innerHTML = data;
      for (let i in data){
        console.log(i + ": " + data[i]);
        document.getElementById('id-2').innerHTML += data[i] + "<br>";
      }
    }
  )
};
