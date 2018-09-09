document.getElementById('btnCheckYear').onclick = function() {
  let inputYear = document.getElementById('input-year').value;
  let currentYear = new Date();
  let resultAccess = document.getElementById('result-access')
  let yourAge;
  currentYear = currentYear.getFullYear();
  inputYear = Number(inputYear.substr(0,4));
  yourAge = currentYear - inputYear;
  //console.log("input year: " + inputYear);
  //console.log("current: " + currentYear);
  if ((currentYear - inputYear) < 16 ) {
    resultAccess.innerHTML = "Not Access. Your age less them 16!";
  } else {
    resultAccess.innerHTML = "Access allow! Your age is: " + yourAge;
  };
};
