document.getElementById('btn-check-flat').addEventListener("click", function(){
  console.log("1111");
  let result = document.getElementById('result');
  let flatNumber = document.getElementById('flat-number').value;
  if (flatNumber >= 1 && flatNumber <= 15) {
    result.innerHTML = "1й подезд";
  } else if (flatNumber > 15 && flatNumber <= 30) {
    result.innerHTML = "2й подезд";
  } else if (flatNumber > 30 && flatNumber <= 45) {
    result.innerHTML = "3й позезд";
  } else {
    result.innerHTML = "Error!";
  }
});
